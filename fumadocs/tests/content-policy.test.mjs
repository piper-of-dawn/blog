import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import {
  classify,
  convertCalloutsAndHighlights,
  routeForMarkdown,
  sanitizePng,
  scanText,
  transformMarkdown,
} from '../scripts/content-policy.mjs';
import { resolvePublicationSource } from '../lib/publication-source.mjs';

const globalCss = readFileSync(new URL('../app/global.css', import.meta.url), 'utf8');

test('private and opaque sources are excluded', () => {
  assert.equal(classify('Diary/journal.md'), null);
  assert.equal(classify('Affirmations.md'), null);
  assert.equal(classify('WIP/draft.md'), null);
  assert.equal(classify('lesson.pdf'), null);
  assert.equal(classify('diagram.excalidraw'), null);
  assert.equal(classify('Arts/article.md'), 'content');
  assert.equal(classify('diagram.svg'), 'asset');
});

test('routes preserve source path, spaces, and casing', () => {
  assert.equal(routeForMarkdown('index.md'), '/');
  assert.equal(routeForMarkdown('C++/Reading Args.md'), '/C++/Reading Args/');
  assert.equal(
    routeForMarkdown('CFA Notes/03 - Fixed Income.md'),
    '/CFA Notes/- Fixed Income/',
  );
});

test('normal sync stays on the reviewed publication commit', () => {
  const manifest = {
    source: {
      repository: 'https://example.test/notes.git',
      ref: 'master',
      commit: 'abc123',
    },
  };
  assert.deepEqual(resolvePublicationSource({ manifest }), {
    repository: 'https://example.test/notes.git',
    ref: 'master',
    commit: 'abc123',
  });
  assert.deepEqual(resolvePublicationSource({ manifest, refreshManifest: true }), {
    repository: 'https://example.test/notes.git',
    ref: 'master',
    commit: null,
  });
});

test('dark mode defines a dark editorial palette', () => {
  assert.match(globalCss, /\.dark\s*\{[\s\S]*--editorial-paper:\s*#[0-9a-f]{6}/u);
  assert.match(globalCss, /\.dark\s*\{[\s\S]*--editorial-ink:\s*#[0-9a-f]{6}/u);
  assert.match(globalCss, /\.dark\s*\{[\s\S]*--editorial-body:\s*#[0-9a-f]{6}/u);
  assert.match(globalCss, /\.dark\s*\{[\s\S]*--editorial-rule:\s*#[0-9a-f]{6}/u);
  assert.match(globalCss, /--editorial-highlight:\s*rgb\(/u);
});

test('callouts and highlights are converted outside code fences', () => {
  const result = convertCalloutsAndHighlights(
    '> [!tip] Quick check\n> Keep ==this== visible.\n\n```txt\n==literal==\n```',
  );
  assert.match(result, /> \*\*Quick check\*\*/u);
  assert.match(result, /> Keep <mark>this<\/mark> visible/u);
  assert.match(result, /```txt\n==literal==\n```/u);
});

test('callouts omit standalone quotation marks', () => {
  const result = convertCalloutsAndHighlights('> [!note]\n> “\n> The car is running.\n> ”');
  assert.doesNotMatch(result, /> [“”]/u);
  assert.match(result, /> The car is running\./u);
});

test('unsupported MkDocs fence labels are normalized for Shiki', () => {
  assert.equal(
    convertCalloutsAndHighlights('```table-of-contents\nA\n```'),
    '```text\nA\n```',
  );
  assert.equal(convertCalloutsAndHighlights('```gdb\nrun\n```'), '```bash\nrun\n```');
});

test('frontmatter is minimized and personal provenance is redacted', () => {
  const result = transformMarkdown(
    '---\ntitle: Safe Title\ndate: 2020-01-01\n---\n\n> Source module: `/home/person/private.txt`\nContact me@example.com',
    'Safe.md',
    new Set(['Safe.md']),
    new Set(),
  );
  assert.match(result, /^---\ntitle: "Safe Title"\n---/u);
  assert.doesNotMatch(result, /2020-01-01|\/home\/|me@example\.com/u);
  assert.deepEqual(scanText(result), []);
});

test('normalizes HTML line breaks before MDX compilation', () => {
  const result = transformMarkdown(
    '> ### Revision<br>first line<br>second line\n> Dialogue<br>reply\n\n| A<br>B | C |\n\n```mermaid\nA[one<br>two]\n```',
    'Safe.md',
    new Set(['Safe.md']),
    new Set(),
  );
  assert.match(result, /> ### Revision — first line — second line/u);
  assert.match(result, /> Dialogue  \n> reply/u);
  assert.match(result, /\| A; B \| C \|/u);
  assert.match(result, /A\[one<br>two\]/u);
  assert.doesNotMatch(result, /<br\s*\/?>(?!two)/iu);
});

test('privacy rules detect direct identifiers and secrets', () => {
  assert.deepEqual(scanText('mail person@example.com from /home/person'), [
    'email',
    'local-home-path',
  ]);
  assert.deepEqual(scanText('api_key="123456789-secret"'), ['credential-assignment']);
});

test('PNG sanitizer rejects non-PNG input', () => {
  assert.throws(() => sanitizePng(Buffer.from('not png')), /invalid-png/u);
});
