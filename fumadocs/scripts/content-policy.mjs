import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

export const EXCLUDED_SEGMENTS = new Set([
  '.agents',
  '.diag',
  '.git',
  '.obsidian',
  '.trash',
  'Archives',
  'Diary',
  'WIP',
]);

export const EXCLUDED_FILES = new Set([
  'Affirmations.md',
  'AGENT.md',
  'AGENTS.md',
]);

export const APPROVED_EXTENSIONS = new Map([
  ['.md', 'content'],
  ['.png', 'asset'],
  ['.svg', 'asset'],
]);

const SENSITIVE_NAME = /(^|[-_. ])(diary|journal|private|personal|passwords?|credentials?|secrets?|resume|curriculum vitae|cv)([-_. ]|$)/i;
const EMAIL = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/giu;
const HOME_PATH = /(?:\/home\/[^\s`"')]+|\/Users\/[^\s`"')]+|[A-Z]:\\Users\\[^\s`"')]+)/giu;
const SECRET_PATTERNS = [
  ['private-key', /-----BEGIN (?:RSA |OPENSSH |EC )?PRIVATE KEY-----/gu],
  ['github-token', /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/gu],
  ['openai-key', /\bsk-[A-Za-z0-9_-]{20,}\b/gu],
  ['aws-key', /\bAKIA[0-9A-Z]{16}\b/gu],
  ['bearer-token', /\bBearer\s+[A-Za-z0-9._~+/-]{24,}=*\b/giu],
  ['credential-assignment', /\b(?:api[_-]?key|client[_-]?secret|password|passwd)\s*[:=]\s*["'][^"'\n]{8,}["']/giu],
];

const FENCE_LANGUAGE_ALIASES = new Map([
  [';', 'text'],
  ['gdb', 'bash'],
  ['path', 'text'],
  ['table-of-contents', 'text'],
]);

export function normalizeRelative(value) {
  return value.split(path.sep).join('/').replace(/^\.\//u, '');
}

export function classify(relativePath) {
  const normalized = normalizeRelative(relativePath);
  const parts = normalized.split('/');
  const name = parts.at(-1) ?? '';

  if (
    parts.some((part) => part.startsWith('.') || EXCLUDED_SEGMENTS.has(part)) ||
    EXCLUDED_FILES.has(name) ||
    SENSITIVE_NAME.test(name)
  ) {
    return null;
  }

  return APPROVED_EXTENSIONS.get(path.extname(name).toLowerCase()) ?? null;
}

export function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

export function routeForMarkdown(relativePath) {
  const withoutExtension = normalizeRelative(relativePath).replace(/\.md$/iu, '');
  if (withoutExtension.toLowerCase() === 'index') return '/';
  if (withoutExtension.toLowerCase().endsWith('/index')) {
    return `/${withoutExtension.slice(0, -6)}/`;
  }
  const segments = withoutExtension.split('/');
  const basename = segments.pop()?.replace(/^\d+\s/u, '') ?? '';
  return `/${[...segments, basename].join('/')}/`;
}

export function encodePathSegments(value) {
  return normalizeRelative(value)
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

export function scanText(text) {
  const findings = new Set();
  if (EMAIL.test(text)) findings.add('email');
  EMAIL.lastIndex = 0;
  if (HOME_PATH.test(text)) findings.add('local-home-path');
  HOME_PATH.lastIndex = 0;
  if (/\b(?:latitude|longitude|gps)\s*[:=]\s*-?\d{1,3}\.\d{4,}/giu.test(text)) {
    findings.add('gps-coordinate');
  }
  for (const [name, pattern] of SECRET_PATTERNS) {
    if (pattern.test(text)) findings.add(name);
    pattern.lastIndex = 0;
  }
  return [...findings].sort();
}

export function redactPrivateText(text) {
  let output = text.replace(
    /^>\s*Source\s+(?:module|PDF):.*(?:\n|$)/gimu,
    '',
  );
  output = output.replace(EMAIL, '[private email removed]');
  output = output.replace(HOME_PATH, '[local path removed]');
  EMAIL.lastIndex = 0;
  HOME_PATH.lastIndex = 0;
  return output;
}

function stripFrontmatter(markdown) {
  const normalized = markdown.replace(/^\uFEFF/u, '');
  if (!normalized.startsWith('---\n')) return { body: normalized, title: null };
  const end = normalized.indexOf('\n---\n', 4);
  if (end === -1) return { body: normalized, title: null };

  const raw = normalized.slice(4, end);
  const titleLine = raw.match(/^title:\s*(.+)$/imu)?.[1]?.trim();
  const title = titleLine?.replace(/^(["'])(.*)\1$/u, '$2') ?? null;
  return { body: normalized.slice(end + 5), title };
}

function deriveTitle(markdown, relativePath, frontmatterTitle) {
  if (frontmatterTitle) return frontmatterTitle;
  const heading = markdown.match(/^#\s+(.+?)\s*$/mu)?.[1];
  if (heading) return heading.replace(/[*_`]/gu, '').trim();
  return path.basename(relativePath, path.extname(relativePath));
}

function escapeDirectiveTitle(value) {
  return value.replace(/[\[\]\n]/gu, ' ').trim();
}

export function convertCalloutsAndHighlights(markdown) {
  const lines = markdown.split('\n');
  const output = [];
  let fenced = false;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (/^\s*```/u.test(line)) {
      fenced = !fenced;
      if (fenced) {
        const opening = line.match(/^(\s*```)([^\s{`]*)?(.*)$/u);
        const language = opening?.[2]?.toLowerCase();
        if (opening && language && FENCE_LANGUAGE_ALIASES.has(language)) {
          output.push(`${opening[1]}${FENCE_LANGUAGE_ALIASES.get(language)}${opening[3]}`);
          continue;
        }
      }
    }
    if (fenced) {
      output.push(line);
      continue;
    }

    const callout = line.match(/^> \[!([^\]]+)\]([+-]?)(?:\s*(.*))?$/u);
    if (!callout) {
      output.push(line.replace(/==([^=\n]+)==/gu, '<mark>$1</mark>'));
      continue;
    }

    const rawKind = callout[1].trim();
    const title = escapeDirectiveTitle(callout[3] || rawKind);
    const body = [];
    while (index + 1 < lines.length) {
      const quoted = lines[index + 1].match(/^>(?: ?(.*))?$/u);
      if (!quoted) break;
      body.push((quoted[1] ?? '').replace(/==([^=\n]+)==/gu, '<mark>$1</mark>'));
      index += 1;
    }
    output.push(
      `> **${title}**`,
      '>',
      ...body.map((bodyLine) => `> ${bodyLine}`.trimEnd()),
    );
  }

  return output.join('\n');
}

function resolveByPathOrBasename(target, noteRelative, knownPaths) {
  let decoded = target.trim().replace(/^<|>$/gu, '');
  try {
    decoded = decodeURIComponent(decoded);
  } catch {
    // Keep the original text when it is not valid percent encoding.
  }
  const direct = normalizeRelative(
    decoded.startsWith('/')
      ? decoded.slice(1)
      : path.posix.join(path.posix.dirname(noteRelative), decoded),
  );
  if (knownPaths.has(direct)) return direct;
  if (knownPaths.has(normalizeRelative(decoded))) return normalizeRelative(decoded);

  const basename = path.posix.basename(decoded);
  const matches = [...knownPaths].filter((candidate) => path.posix.basename(candidate) === basename);
  return matches.length === 1 ? matches[0] : null;
}

export function rewriteLinks(markdown, noteRelative, contentPaths, assetPaths, omissions) {
  let output = markdown.replace(
    /(!?)\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/gu,
    (_match, embedded, rawTarget, rawLabel) => {
      const target = rawTarget.trim();
      const label = (rawLabel || path.posix.basename(target, path.posix.extname(target))).trim();
      const extension = path.posix.extname(target).toLowerCase();

      if (embedded) {
        if (extension === '.excalidraw') {
          omissions.push({ type: 'excluded-excalidraw', source: noteRelative, target });
          return '_Interactive drawing omitted from the public build._';
        }
        const asset = resolveByPathOrBasename(target, noteRelative, assetPaths);
        if (!asset) {
          omissions.push({ type: 'missing-image', source: noteRelative, target });
          return '_Image omitted because no approved source asset was available._';
        }
        return `![${label}](/assets/${encodePathSegments(asset)})`;
      }

      const documentTarget = extension ? target : `${target}.md`;
      const document = resolveByPathOrBasename(documentTarget, noteRelative, contentPaths);
      if (!document) {
        omissions.push({ type: 'missing-document-link', source: noteRelative, target });
        return label;
      }
      return `[${label}](${encodeURI(routeForMarkdown(document))})`;
    },
  );

  output = output.replace(/!\[([^\]]*)\]\(([^)]+)\)/gu, (match, label, target) => {
    if (/^(?:https?:|data:|\/assets\/|#)/iu.test(target.trim())) return match;
    const asset = resolveByPathOrBasename(target, noteRelative, assetPaths);
    if (!asset) return match;
    return `![${label}](/assets/${encodePathSegments(asset)})`;
  });

  output = output.replace(/(<img\b[^>]*\bsrc=["'])([^"']+)(["'][^>]*>)/giu, (match, before, target, after) => {
    if (/^(?:https?:|data:|\/assets\/)/iu.test(target.trim())) return match;
    const asset = resolveByPathOrBasename(target, noteRelative, assetPaths);
    if (!asset) return match;
    return `${before}/assets/${encodePathSegments(asset)}${after}`;
  });

  return output;
}

export function transformMarkdown(markdown, relativePath, contentPaths, assetPaths, omissions = []) {
  const redacted = redactPrivateText(markdown);
  const { body, title: frontmatterTitle } = stripFrontmatter(redacted);
  const title = deriveTitle(body, relativePath, frontmatterTitle);
  let output = convertCalloutsAndHighlights(body);
  output = rewriteLinks(output, relativePath, contentPaths, assetPaths, omissions);
  return `---\ntitle: ${JSON.stringify(title)}\n---\n\n${output.trim()}\n`;
}

export function sanitizeSvg(svg) {
  if (
    /<(?:script|foreignObject)\b/iu.test(svg) ||
    /\son[a-z]+\s*=/iu.test(svg) ||
    /(?:href|src)\s*=\s*["']\s*(?:https?:|\/\/|javascript:|data:text\/html)/iu.test(svg)
  ) {
    throw new Error('unsafe-svg');
  }

  return svg
    .replace(/<!--[^]*?-->/gu, '')
    .replace(/<metadata\b[^]*?<\/metadata>/giu, '')
    .replace(/<(?:title|desc)\b[^]*?<\/(?:title|desc)>/giu, '')
    .replace(/\s(?:sodipodi:docname|inkscape:export-filename)=["'][^"']*["']/giu, '');
}

export function sanitizePng(buffer) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  if (buffer.length < 8 || !buffer.subarray(0, 8).equals(signature)) {
    throw new Error('invalid-png');
  }

  const safeAncillary = new Set(['tRNS', 'gAMA', 'cHRM', 'sRGB', 'acTL', 'fcTL', 'fdAT']);
  const chunks = [signature];
  let offset = 8;
  let sawEnd = false;

  while (offset + 12 <= buffer.length) {
    const length = buffer.readUInt32BE(offset);
    const end = offset + 12 + length;
    if (end > buffer.length) throw new Error('invalid-png-chunk');
    const type = buffer.toString('ascii', offset + 4, offset + 8);
    const critical = type[0] === type[0].toUpperCase();
    if (critical || safeAncillary.has(type)) chunks.push(buffer.subarray(offset, end));
    offset = end;
    if (type === 'IEND') {
      sawEnd = true;
      break;
    }
  }

  if (!sawEnd) throw new Error('invalid-png-end');
  return Buffer.concat(chunks);
}

export async function walkFiles(root) {
  const results = [];
  async function visit(current) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) await visit(fullPath);
      else if (entry.isFile()) results.push(fullPath);
    }
  }
  await visit(root);
  return results.sort();
}

export async function readAndHash(filePath) {
  const contents = await readFile(filePath);
  return { contents, hash: sha256(contents) };
}
