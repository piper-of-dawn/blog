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

function nerdifyForwardPointArrows() {
  const forwardPointLines = new Set([
    'Positive points (+) -> add them to spot',
    'Negative points (-) -> subtract them from spot',
  ]);

  const textContent = (node: any): string => node.type === 'text'
    ? node.value
    : (node.children ?? []).map(textContent).join('');

  const replaceArrow = (node: any) => {
    if (node.type === 'text' && node.value.includes('->')) {
      const parts = node.value.split('->');
      const children: any[] = [];
      parts.forEach((part: string, index: number) => {
        if (part) children.push({ type: 'text', value: part });
        if (index < parts.length - 1) {
          children.push({
            type: 'mdxJsxTextElement',
            name: 'span',
            attributes: [
              { type: 'mdxJsxAttribute', name: 'className', value: 'nerd-arrow' },
              { type: 'mdxJsxAttribute', name: 'aria-hidden', value: 'true' },
            ],
            children: [{ type: 'text', value: '\uf061' }],
          });
        }
      });
      return children;
    }

    if (!node.children) return [node];
    node.children = node.children.flatMap(replaceArrow);
    return [node];
  };

  return (tree: any) => {
    const visit = (node: any) => {
      if (node.type === 'listItem' && forwardPointLines.has(textContent(node).trim())) {
        node.children = node.children.flatMap(replaceArrow);
        return;
      }
      for (const child of node.children ?? []) visit(child);
    };
    visit(tree);
  };
}

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkMath, classifyCallouts, nerdifyForwardPointArrows],
    rehypePlugins: (plugins) => [[rehypeKatex, { strict: false }], ...plugins],
  },
});
