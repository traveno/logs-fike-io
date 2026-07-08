<script lang="ts">
  import PostList from '$lib/components/PostList.svelte';
  import TagList from '$lib/components/TagList.svelte';

  let { data } = $props();

  let tags = $derived(data.posts.flatMap(p => p.tags));
</script>

<svelte:head>
  <title>index — logs.fike.io</title>
</svelte:head>

<div class="px-4 md:px-32">
  <div class="w-full flex flex-col gap-8">
    <TagList {tags} />
    <PostList posts={data.posts} heading="recent posts" limit={4} />
  </div>
</div>
