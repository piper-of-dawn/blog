#!/usr/bin/env node
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { EXCLUDED_FILES, EXCLUDED_SEGMENTS, scanText, walkFiles } from './content-policy.mjs';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const requested = process.argv.slice(2);
const roots = requested.length > 0 ? requested : ['content/docs', 'public/assets', 'out'];
const textExtensions = new Set([
  '.css', '.html', '.js', '.json', '.map', '.md', '.mjs', '.svg', '.txt', '.xml',
]);
const forbiddenPngChunks = new Set(['tEXt', 'zTXt', 'iTXt', 'eXIf', 'tIME']);

function inspectPng(buffer) {
  const findings = [];
  let offset = 8;
  while (offset + 12 <= buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    if (forbiddenPngChunks.has(type)) findings.push(`png-${type}`);
    offset += 12 + length;
    if (type === 'IEND') break;
  }
  return findings;
}

async function main() {
  const failures = [];
  let scanned = 0;

  for (const requestedRoot of roots) {
    const root = path.resolve(projectRoot, requestedRoot);
    const details = await stat(root).catch(() => null);
    if (!details?.isDirectory()) {
      failures.push(`${requestedRoot}: required privacy-scan directory is missing`);
      continue;
    }

    for (const filePath of await walkFiles(root)) {
      scanned += 1;
      const relative = path.relative(projectRoot, filePath).split(path.sep).join('/');
      const parts = relative.split('/');
      const name = parts.at(-1);
      if (parts.some((part) => EXCLUDED_SEGMENTS.has(part)) || EXCLUDED_FILES.has(name)) {
        failures.push(`${relative}: excluded private path`);
        continue;
      }

      const extension = path.extname(filePath).toLowerCase();
      const buffer = await readFile(filePath);
      const findings = extension === '.png'
        ? inspectPng(buffer)
        : textExtensions.has(extension)
          ? scanText(buffer.toString('utf8'))
          : [];
      if (findings.length > 0) failures.push(`${relative}: ${findings.join(', ')}`);
    }
  }

  if (failures.length > 0) {
    process.stderr.write(`Privacy check failed for ${failures.length} file(s):\n${failures.join('\n')}\n`);
    process.exitCode = 1;
    return;
  }
  process.stdout.write(`Privacy check passed for ${scanned} file(s).\n`);
}

main().catch((error) => {
  process.stderr.write(`${error.message}\n`);
  process.exitCode = 1;
});
