// Force search assets to load from this deployment's origin and root.
// Used only in the Vercel build to avoid cross-origin worker loads.
(function () {
  try {
    // Only override if base_url looks absolute (e.g., https://example.com/...) or a GitHub Pages URL
    var cur = (typeof window.base_url !== 'undefined') ? String(window.base_url) : '';
    var isAbsolute = /^https?:\/\//i.test(cur) || /github\.io\//i.test(cur);
    if (isAbsolute || !cur) {
      // Use root-relative base so joinUrl(base_url, path) -> "/" + path
      window.base_url = '';
      try { console.log('[search-debug] base_url overridden for Vercel to root-relative'); } catch (_) {}
    }
  } catch (e) {
    try { console.warn('[search-debug] failed to override base_url', e); } catch (_) {}
  }
})();

