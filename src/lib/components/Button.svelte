<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title?: string;
    disabled?: boolean;
    onclick: () => void;
    children?: Snippet;
  }

  const { disabled = false, onclick, title = 'A button', children }: Props = $props();
</script>

<button
  {onclick}
  {disabled}
  {title}
  class="p-3 rounded-full bg-neutral-500/0 duration-200 {disabled
    ? 'bg-neutral-500/0'
    : 'cursor-pointer bg-neutral-500/0 hover:hover:bg-neutral-500/20'}"
>
  {@render children?.()}
</button>
