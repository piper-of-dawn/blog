import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'out');
const port = Number(process.env.PORT || 3001);

function encodedFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0]).replace(/^\/+/, '');
  if (clean === '') return path.join(root, 'index.html');
  if (clean === 'api/search' || clean === 'api/search/') return path.join(root, 'api', 'search');
  // Next exports bracketed chunk directories literally (e.g. `[[...slug]]`),
  // so re-encoding these decoded URL segments would make valid browser URLs
  // miss their files.
  const segments = clean.split('/').filter(Boolean).map((segment) => segment.replaceAll(' ', '%20'));
  if (clean.startsWith('_next/') || clean.startsWith('assets/')) {
    return path.join(root, ...segments);
  }
  return path.join(root, ...(segments.length ? segments : ['index']), 'index.html');
}

function contentType(file) {
  const extension = path.extname(file).toLowerCase();
  return {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
  }[extension] || 'application/octet-stream';
}

createServer(async (request, response) => {
  try {
    const file = encodedFile(request.url || '/');
    const body = await readFile(file);
    response.writeHead(200, { 'content-type': request.url?.startsWith('/api/search') ? 'application/json; charset=utf-8' : contentType(file) });
    response.end(body);
  } catch {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not found');
  }
}).listen(port, '127.0.0.1', () => {
  process.stdout.write(`Local static server listening at http://127.0.0.1:${port}\n`);
});
