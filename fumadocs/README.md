# Fumadocs notes site

This is an independent Fumadocs migration of the MkDocs site in the parent
repository. It deliberately does not read `../pages/docs`: the published notes
are cloned from `piper-of-dawn/KumarsNotes` at build time, sanitized, and copied
into this app's generated `content/docs` tree.

## Local development

```bash
corepack pnpm install
corepack pnpm run serve:local
```

The site is available at <http://127.0.0.1:3001>. The first page request may
take a little while because Next.js compiles the route on demand.

## Verification

```bash
corepack pnpm test
corepack pnpm run lint
corepack pnpm run types:check
corepack pnpm run build
corepack pnpm run routes:check
```

`build` performs a fresh notes sync, checks the sanitized source, creates a
static export in `out/`, and scans that final artifact again. The route check
also confirms that approved MkDocs URLs exist and known private URLs do not.

## Publication policy

- Only Markdown, PNG, and safe SVG source files are accepted.
- Hidden/configuration areas, diaries, archives, WIP material, agent files,
  PDFs, Excalidraw files, and sensitive-looking paths are excluded.
- Source frontmatter is discarded except for the page title.
- Local filesystem paths, email addresses, common secret formats, and image
  metadata are removed or rejected.
- `publication-manifest.json` pins the approved source files by SHA-256 and the
  exact reviewed notes commit. Normal sync/build uses that commit, so later
  upstream edits cannot change or break the published site. A deliberate
  `pnpm run review:refresh` advances the pin after review.
- Review an intentional source change with `pnpm run review:refresh`, inspect
  the generated report and diff, then rerun the full verification commands.

The public author identity is intentionally limited to `Kumar Shantanu` and
the existing `piper-of-dawn/blog` GitHub link. No email address is published.

## Deployment

The app uses Next.js static export and includes `vercel.json`. Deploy this
subdirectory as its own project with `fumadocs` as the project root. Do not
configure the parent MkDocs directory as an input.
