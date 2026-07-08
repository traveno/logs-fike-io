import type { PageLoad } from './$types';
import type { Post } from '$lib/types';

export const load: PageLoad = async ({ params, fetch }) => {
  const response = await fetch('/api/posts');
  const posts: Post[] = await response.json();

  return {
    tag: params.tag,
    posts: posts.filter(post => post.tags.includes(params.tag)),
  };
};
