const DEFAULT_REPOSITORY = 'https://github.com/piper-of-dawn/KumarsNotes.git';
const DEFAULT_REF = 'master';

export function resolvePublicationSource({ manifest, refreshManifest = false, env = process.env }) {
  const source = manifest?.source ?? {};
  return {
    repository: env.NOTES_REPOSITORY_URL || source.repository || DEFAULT_REPOSITORY,
    ref: env.NOTES_REF || source.ref || DEFAULT_REF,
    commit: refreshManifest
      ? null
      : env.NOTES_COMMIT || source.commit || null,
  };
}
