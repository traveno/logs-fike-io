import type { Post } from "$lib/types";
import { json } from "@sveltejs/kit";

export const GET = async () => {
  // Check for posts
  const allPostsFetch = import.meta.glob('/src/posts/*.md', { eager: true });

  const allPosts: Post[] = Object.entries(allPostsFetch).map(([path, post]) => {
    const { metadata } = <{ metadata: any }> post;
    const slug = path.split('/').at(-1)?.replace('.md', '');
    return { ...metadata, slug } as Post
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .filter(post => post.published);

  return json(allPosts);
}