<script lang="ts">
  import type { Snippet } from 'svelte';
  import Tooltip from '$lib/components/Tooltip.svelte';

  interface Props {
    title?: string;
    disabled?: boolean;
    onclick: () => void;
    /** Optional icon shown before the tooltip text (e.g. a checkmark). */
    tooltipIcon?: Snippet;
    children?: Snippet;
  }

  const { disabled = false, onclick, title = 'A button', tooltipIcon, children }: Props = $props();
</script>

<Tooltip text={title} icon={tooltipIcon}>
  <button
    {onclick}
    {disabled}
    aria-label={title}
    class="p-3 rounded-full bg-neutral-500/0 duration-200 {disabled
      ? 'bg-neutral-500/0'
      : 'cursor-pointer bg-neutral-500/0 hover:hover:bg-neutral-500/20'}"
  >
    {@render children?.()}
  </button>
</Tooltip>
