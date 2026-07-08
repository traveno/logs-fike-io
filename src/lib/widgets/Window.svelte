<script lang="ts">
  interface Props {
    name: string;
    children?: import('svelte').Snippet;
  }

  let { name, children }: Props = $props();
</script>

<div class="code-window lg:shadow-lg my-6 md:my-8">
  <div class="rounded-t-lg bg-linear-to-l bg-neutral-700 relative">
    <div class="flex flex-row gap-2 justify-start items-center absolute translate-y-2 translate-x-2">
      <div class="h-3 w-3 rounded-full bg-red-400"></div>
      <div class="h-3 w-3 rounded-full bg-yellow-400"></div>
      <div class="h-3 w-3 rounded-full bg-green-400"></div>
    </div>
    <div class="text-center text-neutral-200! text-xs sm:text-sm py-1">{name}</div>
  </div>
  {@render children?.()}
</div>

<style>
  .code-window :global(pre.shiki) {
    margin-top: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0.5rem /* 8px */;
    border-bottom-right-radius: 0.5rem /* 8px */;
  }
</style>
