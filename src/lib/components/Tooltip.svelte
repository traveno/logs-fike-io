<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { Placement } from 'svelte-floating-ui/dom';
  import { createFloatingActions } from 'svelte-floating-ui';
  import { offset, flip, shift } from 'svelte-floating-ui/dom';
  import { fade } from 'svelte/transition';

  interface Props {
    /** Text shown inside the tooltip. When empty, no tooltip is rendered. */
    text?: string;
    /** Optional icon rendered before the text (e.g. a checkmark). */
    icon?: Snippet;
    /** Preferred side to place the tooltip relative to the trigger. */
    placement?: Placement;
    /** The trigger content the tooltip is attached to. */
    children: Snippet;
  }

  const { text = '', icon, placement = 'bottom', children }: Props = $props();

  let visible = $state(false);

  const [triggerRef, tooltipContent] = createFloatingActions({
    strategy: 'absolute',
    placement,
    middleware: [offset(8), flip(), shift({ padding: 8 })],
  });

  const show = () => (visible = true);
  const hide = () => (visible = false);
</script>

<!-- Hover is a visual enhancement; the wrapped element keeps its own accessible
     name and gets the tooltip via focusin/focusout too. -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<span class="inline-flex" use:triggerRef onmouseenter={show} onmouseleave={hide} onfocusin={show} onfocusout={hide}>
  {@render children()}
</span>

{#if visible && text}
  <div
    use:tooltipContent
    role="tooltip"
    transition:fade={{ duration: 100 }}
    class="pointer-events-none z-50 inline-flex w-max max-w-xs items-center gap-1 rounded-md bg-neutral-800 px-2 py-1 text-xs font-mono !text-neutral-100 shadow-lg dark:bg-neutral-700"
  >
    {@render icon?.()}
    {text}
  </div>
{/if}
