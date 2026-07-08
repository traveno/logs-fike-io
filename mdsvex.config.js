import { defineMDSveXConfig as defineConfig, escapeSvelte } from "mdsvex";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Highligher
import { codeToHtml } from 'shiki';

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
  layout: { blog: path.join(__dirname, 'src/lib/post-layouts/Blog.svelte') },

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
      const html = escapeSvelte(await codeToHtml(code, { lang, theme: 'slack-dark' }));
      return `{@html \`${html}\`}`;
    }
  }
});

export default config;