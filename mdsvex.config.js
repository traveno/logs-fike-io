import { defineMDSveXConfig as defineConfig, escapeSvelte } from "mdsvex";
import shiki from 'shiki';
import rehypeExternalLinks from "rehype-external-links";
import relativeImages from 'mdsvex-relative-images';
import remarkEmoji from 'remark-emoji';
import remarkMath from 'remark-math';
import rehypeKatexSvelte from 'rehype-katex-svelte';

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  layout: { blog: '/src/lib/post-layouts/Blog.svelte' },

  smartypants: {
    dashes: true
  },

  remarkPlugins: [
    [remarkMath],
    [relativeImages],
    [remarkEmoji],
    
  ],
  rehypePlugins: [
    [rehypeKatexSvelte],
    [rehypeExternalLinks, { target: ['_blank'] }],
  ],
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highligher = await shiki.getHighlighter({ theme: 'slack-dark' });
      const html = escapeSvelte(highligher.codeToHtml(code, { lang }));
      return `{@html \`${html}\`}`;
    }
  }
});

export default config;