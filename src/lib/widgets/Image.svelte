<script lang="ts">
  interface Props {
    // export let imgURL: string | undefined;
    caption: string | undefined;
    children?: import('svelte').Snippet;
  }

  let { caption, children }: Props = $props();
</script>

<!-- {#if imgURL} -->
<div
  class="image-window lg:shadow-md border-8 border-white overflow-hidden dark:bg-slate-950 dark:border-slate-950 bg-white flex flex-col gap-1 outline-1 outline-black/10 dark:outline-white/10 transition-all"
>
  {@render children?.()}
  {#if caption}
    <div class="text-center text-base italic text-neutral-500! dark:text-neutral-300! font-thin! transition">
      {caption}
    </div>
  {/if}
</div>

<!-- {/if} -->

<style>
  .image-window :global(img) {
    margin: 0;
  }
</style>
