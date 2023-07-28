<script lang="ts">
  import { convertDate } from "$lib/utils.js";
  import Tag from "$lib/components/Tag.svelte";
  import RecentPosts from "./RecentPosts.svelte";

  export let data;
  const { posts } = data;

  $: tags = posts.flatMap((p) => p.tags);
</script>

<svelte:head>
  <title>Index | logs.fike.io</title>
</svelte:head>

<div class=" px-4 md:px-32">
  <div class="w-full">
    <div class="pb-8">
      <h1 class="text-3xl font-mono font-thin border-b border-neutral-300 pb-2">
        tags
      </h1>
      <div class="py-4 flex flex-row gap-2 flex-wrap justify-center">
        {#each tags as tag}
          <span class="inline-block w-fit">
            <Tag name={tag} />
          </span>
        {/each}
      </div>
    </div>

    <RecentPosts {posts} />
  </div>
</div>
