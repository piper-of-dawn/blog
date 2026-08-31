#!/usr/bin/env node
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outRoot = path.join(projectRoot, 'out');
const manifest = JSON.parse(await readFile(path.join(projectRoot, 'publication-manifest.json'), 'utf8'));
const failures = [];

function encodeRoutePath(route) {
  return route
    .replace(/^\//u, '')
    .replace(/\/$/u, '')
    .split('/')
    .map((segment) => encodeURI(segment))
    .join('/');
}

for (const entry of manifest.entries.filter((candidate) => candidate.type === 'content')) {
  const route = entry.route === '/' ? '' : encodeRoutePath(entry.route);
  const filePath = path.join(outRoot, route, 'index.html');
  await access(filePath).catch(() => failures.push(`${entry.route}: missing static page`));
}

for (const alias of manifest.legacyAliases ?? []) {
  const filePath = path.join(outRoot, encodeRoutePath(alias.route), 'index.html');
  await access(filePath).catch(() => failures.push(`${alias.route}: missing legacy replacement page`));
}

for (const excluded of ['Affirmations', 'Diary', 'Archives', 'WIP']) {
  const filePath = path.join(outRoot, excluded, 'index.html');
  const exists = await access(filePath).then(() => true).catch(() => false);
  if (exists) failures.push(`/${excluded}/: excluded route was emitted`);
}

if (failures.length > 0) {
  process.stderr.write(`Route validation failed:\n${failures.join('\n')}\n`);
  process.exitCode = 1;
} else {
  const count = manifest.entries.filter((entry) => entry.type === 'content').length;
  const aliases = manifest.legacyAliases?.length ?? 0;
  process.stdout.write(`Route validation passed for ${count} approved pages, ${aliases} legacy replacement page(s), and four private-route sentinels.\n`);
}
