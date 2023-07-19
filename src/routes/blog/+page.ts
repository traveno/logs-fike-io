import { convertDate } from "$lib/utils";

export const load = async ({ params }) => {
  // Check for posts
  const allPostFiles = import.meta.glob('./*.{svx,md}');

  // Build promise array
  const allPostPromises = Object.entries(allPostFiles).map(async ([path, post]) => {
    const { metadata } = <{ metadata: { title: string, date: string } }> await post();
    const postPath = path.slice(2, -3);
    return { ...metadata, path: postPath, published: convertDate(metadata.date) }
  });

  // Fetch and sort by publish date
  const allPosts = (await Promise.all(allPostPromises))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return {
    posts: allPosts
  }
}