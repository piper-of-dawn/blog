'use client';

import { useSidebar } from 'fumadocs-ui/layouts/docs/slots/sidebar';
import { useEffect } from 'react';

/** Keep the navigation available through Fumadocs' collapsed sidebar panel. */
export function ResponsiveSidebar() {
  const { setCollapsed } = useSidebar();

  useEffect(() => {
    const compact = window.matchMedia('(width < 100rem)');
    const update = () => setCollapsed(compact.matches);

    update();
    compact.addEventListener('change', update);
    return () => compact.removeEventListener('change', update);
  }, [setCollapsed]);

  return null;
}
