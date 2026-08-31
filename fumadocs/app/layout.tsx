import { Provider } from '@/components/provider';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import type { Metadata } from 'next';
import './global.css';
import './print.css';
import 'katex/dist/katex.css';

export const metadata: Metadata = {
  title: {
    default: 'Notes',
    template: '%s | Notes',
  },
  authors: [{ name: 'Kumar Shantanu' }],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>
          <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
            {children}
          </DocsLayout>
        </Provider>
      </body>
    </html>
  );
}
