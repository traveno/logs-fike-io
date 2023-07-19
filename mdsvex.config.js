import { defineMDSveXConfig as defineConfig, escapeSvelte } from "mdsvex";
import shiki from 'shiki';
import rehypeExternalLinks from "rehype-external-links";


const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  layout: { blog: '/src/lib/post-layouts/Blog.svelte' },

  smartypants: {
    dashes: true
  },

  remarkPlugins: [
  ],
  rehypePlugins: [
    [rehypeExternalLinks, { target: ['_blank'] }]
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