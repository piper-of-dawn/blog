import { defineConfig } from 'fumadocs-mdx/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

function classifyCallouts() {
  const textContent = (node: any): string =>
    node.type === 'text'
      ? node.value ?? ''
      : (node.children ?? []).map(textContent).join('');

  return (tree: any) => {
    const visit = (node: any) => {
      if (node.type === 'blockquote') {
        const lead = node.children?.[0]?.children?.[0];
        const leadTitle = lead?.type === 'strong' ? textContent(lead).trim() : '';
        const isLabeledNote =
          leadTitle.length > 0 && !/^(what is|question\b|\(?\d+)/i.test(leadTitle);
        node.data ??= {};
        node.data.hProperties ??= {};
        const variant = /abstract/i.test(leadTitle)
          ? 'abstract'
          : /\bnote\b/i.test(leadTitle)
            ? 'note'
            : isLabeledNote
              ? 'inline'
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
