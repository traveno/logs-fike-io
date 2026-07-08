<script lang="ts">
  import Tag from '$lib/components/Tag.svelte';

  interface Props {
    tags: string[];
  }

  let { tags }: Props = $props();
</script>

<div class="flex flex-col gap-6">
  <h1 class="text-3xl font-mono font-thin">tags</h1>
  <div class="border-neutral-300 border-b"></div>
  <div class="flex flex-row flex-wrap item-center gap-3">
    {#each tags as tag}
      <Tag name={tag} />
    {:else}
      <p class="text-neutral-500">No tags found.</p>
    {/each}
  </div>
</div>
