import { defineConfig } from 'fumadocs-mdx/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

function classifyCallouts() {
  return (tree: any) => {
    const visit = (node: any) => {
      if (node.type === 'blockquote') {
        const text = JSON.stringify(node.children?.[0] ?? '').toLowerCase();
        node.data ??= {};
        node.data.hProperties ??= {};
        const variant = text.includes('abstract')
          ? 'abstract'
          : text.includes('note')
            ? 'note'
            : 'quote';
        node.data.hProperties.className = [
          'editorial-callout',
          `editorial-callout--${variant}`,
        ];
      }
      for (const child of node.children ?? []) visit(child);
    };
    visit(tree);
  };
}

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath, classifyCallouts],
    rehypePlugins: (plugins) => [[rehypeKatex, { strict: false }], ...plugins],
  },
});
