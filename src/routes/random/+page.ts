import type { PageLoad } from "./$types";
import type { Post } from "$lib/types";
import { goto } from "$app/navigation";

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('api/posts');
  const posts: Post[] = await response.json();

  const randomPost = posts[Math.floor(Math.random() * posts.length)];

  return {
    slug: randomPost.slug
  }
}