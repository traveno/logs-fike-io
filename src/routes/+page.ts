import type { PageLoad } from './$types';
import type { Post } from '$lib/types';

export const load: PageLoad = async ({ fetch }) => {
  const posts = await fetch('api/posts');
  return { posts: (await posts.json()) as Post[] };
};
