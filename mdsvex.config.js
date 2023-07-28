import { defineMDSveXConfig as defineConfig, escapeSvelte } from "mdsvex";

// Highligher
import shiki from 'shiki';

// Remark plugins
import relativeImages from 'mdsvex-relative-images';
import remarkEmoji from 'remark-emoji';
import remarkMath from 'remark-math';
import remarkToc from "remark-toc";


// Rehype plugins
import rehypeKatexSvelte from 'rehype-katex-svelte';
import rehypeExternalLinks from "rehype-external-links";
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from "rehype-autolink-headings";

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
    [remarkToc]
    
  ],
  rehypePlugins: [
    [rehypeKatexSvelte],
    [rehypeExternalLinks, { target: ['_blank'] }],
    [rehypeSlug],
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