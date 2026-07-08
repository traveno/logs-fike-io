<script lang="ts">
  import PostList from '$lib/components/PostList.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>#{data.tag} — logs.fike.io</title>
</svelte:head>

<div class="px-4 md:px-32">
  <div class="w-full">
    <PostList posts={data.posts} heading={`#${data.tag}`} />
  </div>
</div>
