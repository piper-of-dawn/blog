#!/usr/bin/env node
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { access, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  classify,
  normalizeRelative,
  readAndHash,
  routeForMarkdown,
  sanitizePng,
  sanitizeSvg,
  scanText,
  transformMarkdown,
  walkFiles,
} from './content-policy.mjs';
import { resolvePublicationSource } from '../lib/publication-source.mjs';

const exec = promisify(execFile);
const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const workRoot = path.join(projectRoot, '.work');
const cloneRoot = path.join(workRoot, 'notes-source');
const contentRoot = path.join(projectRoot, 'content', 'docs');
const assetsRoot = path.join(projectRoot, 'public', 'assets');
const manifestPath = path.join(projectRoot, 'publication-manifest.json');
const reportPath = path.join(workRoot, 'migration-report.json');
const refreshManifest = process.argv.includes('--refresh-manifest');
const legacyAliases = [
  {
    path: 'CFA L1 Notes/ALTERNATIVE INVESTMENTS/PRIVATE EQUITY.md',
    route: '/CFA L1 Notes/ALTERNATIVE INVESTMENTS/PRIVATE EQUITY/',
    target: '/CFA L1 Notes/ALTERNATIVE INVESTMENTS/Alternative Investment Features Methods and Structures/',
    title: 'Private Equity',
  },
];

function assertManagedPath(target) {
  const relative = path.relative(projectRoot, target);
  if (!relative || relative.startsWith('..') || path.isAbsolute(relative)) {
    throw new Error('Refusing to manage a path outside the Fumadocs subproject.');
  }
}

async function cleanManagedDirectory(target) {
  assertManagedPath(target);
  await rm(target, { recursive: true, force: true });
  await mkdir(target, { recursive: true });
}

async function prepareSource(source) {
  if (process.env.NOTES_SOURCE_DIR) {
    const local = path.resolve(process.env.NOTES_SOURCE_DIR);
    await access(local);
    return local;
  }

  await mkdir(workRoot, { recursive: true });
  assertManagedPath(cloneRoot);
  await rm(cloneRoot, { recursive: true, force: true });
  if (source.commit) {
    await exec('git', ['init', '--quiet', cloneRoot], { cwd: projectRoot });
    await exec('git', ['remote', 'add', 'origin', source.repository], { cwd: cloneRoot });
    await exec('git', ['fetch', '--quiet', '--depth', '1', 'origin', source.commit], {
      cwd: cloneRoot,
    });
    await exec('git', ['checkout', '--quiet', '--detach', source.commit], {
      cwd: cloneRoot,
    });
  } else {
    await exec('git', [
      'clone',
      '--quiet',
      '--depth',
      '1',
      '--branch',
      source.ref,
      source.repository,
      cloneRoot,
    ], {
      cwd: projectRoot,
    });
  }
  return cloneRoot;
}

async function sourceCommit(sourceRoot) {
  const { stdout } = await exec('git', ['rev-parse', 'HEAD'], { cwd: sourceRoot });
  return stdout.trim();
}

async function collectCandidates(sourceRoot) {
  const entries = [];
  for (const filePath of await walkFiles(sourceRoot)) {
    const relative = normalizeRelative(path.relative(sourceRoot, filePath));
    const type = classify(relative);
    if (!type) continue;
    const { contents, hash } = await readAndHash(filePath);
    entries.push({
      path: relative,
      sha256: hash,
      type,
      ...(type === 'content' ? { route: routeForMarkdown(relative) } : {}),
      contents,
    });
  }
  return entries.sort((left, right) => left.path.localeCompare(right.path));
}

async function loadManifest() {
  return JSON.parse(await readFile(manifestPath, 'utf8'));
}

async function writeManifest(entries, source, commit) {
  const manifest = {
    version: 1,
    source: {
      repository: source.repository,
      ref: source.ref,
      ...(commit ? { commit } : {}),
    },
    publicIdentity: {
      author: 'Kumar Shantanu',
      profile: 'https://github.com/piper-of-dawn',
    },
    legacyAliases,
    entries: entries.map(({ path: sourcePath, sha256, type, route }) => ({
      path: sourcePath,
      sha256,
      type,
      ...(route ? { route } : {}),
    })),
  };
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  return manifest;
}

function validateAgainstManifest(candidates, manifest) {
  const expected = new Map(manifest.entries.map((entry) => [entry.path, entry]));
  const actual = new Map(candidates.map((entry) => [entry.path, entry]));
  const problems = [];

  for (const [sourcePath, entry] of expected) {
    const candidate = actual.get(sourcePath);
    if (!candidate) problems.push(`${sourcePath}: approved source is missing`);
    else if (candidate.sha256 !== entry.sha256) problems.push(`${sourcePath}: source hash changed`);
    else if (candidate.type !== entry.type) problems.push(`${sourcePath}: source type changed`);
  }
  for (const sourcePath of actual.keys()) {
    if (!expected.has(sourcePath)) problems.push(`${sourcePath}: source is not approved`);
  }

  if (problems.length > 0) {
    const summary = problems.slice(0, 20).join('\n');
    throw new Error(`Publication manifest rejected ${problems.length} source change(s):\n${summary}`);
  }
}

async function emit(candidates) {
  await cleanManagedDirectory(contentRoot);
  await cleanManagedDirectory(assetsRoot);

  const contentPaths = new Set(candidates.filter((entry) => entry.type === 'content').map((entry) => entry.path));
  const assetPaths = new Set(candidates.filter((entry) => entry.type === 'asset').map((entry) => entry.path));
  const omissions = [];

  for (const candidate of candidates) {
    if (candidate.type === 'content') {
      const markdown = transformMarkdown(
        candidate.contents.toString('utf8'),
        candidate.path,
        contentPaths,
        assetPaths,
        omissions,
      );
      const findings = scanText(markdown);
      if (findings.length > 0) {
        throw new Error(`${candidate.path}: generated content failed privacy rules (${findings.join(', ')})`);
      }
      const route = routeForMarkdown(candidate.path);
      const generatedPath = route === '/'
        ? 'index.md'
        : `${decodeURI(route.replace(/^\//u, '').replace(/\/$/u, ''))}.md`;
      const destination = path.join(contentRoot, generatedPath);
      await mkdir(path.dirname(destination), { recursive: true });
      await writeFile(destination, markdown, 'utf8');
      continue;
    }

    const extension = path.extname(candidate.path).toLowerCase();
    const destination = path.join(assetsRoot, candidate.path);
    await mkdir(path.dirname(destination), { recursive: true });
    if (extension === '.png') {
      await writeFile(destination, sanitizePng(candidate.contents));
    } else if (extension === '.svg') {
      const sanitized = sanitizeSvg(candidate.contents.toString('utf8'));
      const findings = scanText(sanitized);
      if (findings.length > 0) {
        throw new Error(`${candidate.path}: generated SVG failed privacy rules (${findings.join(', ')})`);
      }
      await writeFile(destination, sanitized, 'utf8');
    }
  }

  for (const alias of legacyAliases) {
    const destination = path.join(contentRoot, alias.path);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(
      destination,
      `---\ntitle: ${JSON.stringify(alias.title)}\n---\n\nThis legacy page has been consolidated into [the current note](${encodeURI(alias.target)}).\n`,
      'utf8',
    );
  }

  await mkdir(workRoot, { recursive: true });
  await writeFile(
    reportPath,
    `${JSON.stringify({ emitted: candidates.length, legacyAliases: legacyAliases.length, omissions }, null, 2)}\n`,
    'utf8',
  );
  return omissions;
}

async function main() {
  const currentManifest = refreshManifest ? null : await loadManifest();
  const source = resolvePublicationSource({ manifest: currentManifest, refreshManifest });
  const sourceRoot = await prepareSource(source);
  const candidates = await collectCandidates(sourceRoot);
  const manifest = refreshManifest
    ? await writeManifest(candidates, source, await sourceCommit(sourceRoot))
    : currentManifest;
  validateAgainstManifest(candidates, manifest);
  const omissions = await emit(candidates);
  const contentCount = candidates.filter((entry) => entry.type === 'content').length;
  const assetCount = candidates.length - contentCount;
  process.stdout.write(
    `Synchronized ${contentCount} approved documents and ${assetCount} sanitized assets; ${omissions.length} documented omission(s).\n`,
  );
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
});
