<script lang="ts">
  import '../app.css';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import PageCorner from '$lib/components/PageCorner.svelte';
  import { sleep } from '$lib/utils';
  import Button from '$lib/components/Button.svelte';

  let { data, children } = $props();

  async function toggleTheme(mode: 'toggle' | 'light' | 'dark' | 'os' | 'check') {
    if (themeChangeInProgress) return;
    themeChangeInProgress = true;

    switch (mode) {
      case 'toggle':
        cornerIsVisible = false;
        await sleep(500);
        if (localStorage.theme === 'light') localStorage.theme = 'dark';
        else localStorage.theme = 'light';
        break;
      case 'dark':
        localStorage.theme = 'dark';
        break;
      case 'light':
        localStorage.theme = 'light';
        break;
      default:
      case 'os':
        localStorage.removeItem('theme');
        break;
      case 'check':
        break;
    }

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
    }

    await sleep(1500);
    cornerIsVisible = true;
    await sleep(500);

    themeChangeInProgress = false;
  }

  let copied = $state(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      copied = true;
      await sleep(1500);
      copied = false;
    } catch {
      // Clipboard unavailable (insecure context / denied permission) — no feedback.
    }
  }

  let themeChangeInProgress = false;
  let cornerIsVisible = $state(false);

  onMount(() => {
    // themeChange(false);
    toggleTheme('check');

    setTimeout(() => {
      cornerIsVisible = true;
    }, 2000);
  });
</script>

<svelte:head>
  <script lang="ts">
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  </script>
</svelte:head>

{#snippet checkmark()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="h-3.5 w-3.5 stroke-green-400"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
{/snippet}

<div
  class="relative lg:container lg:mx-auto lg:max-w-4xl w-full lg:shadow-xl ring-1 rounded-lg ring-slate-900/5 dark:ring-white/5 overflow-hidden"
>
  <!-- Banner -->
  <div class="sticky top-0 z-10 lg:relative bg-neutral-50 dark:bg-neutral-900 lg:rounded-t-lg">
    <div class="hidden md:block">
      <PageCorner isVisible={cornerIsVisible} />
    </div>

    <div class="text-center px-4 py-2 lg:px-8 lg:py-4 flex flex-row gap-24 justify-evenly items-center">
      <div class="icon flex flex-row gap-4 lg:gap-6 justify-center">
        <Button onclick={() => goto('/')} disabled={data.url === '/'} title="all posts">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={data.url === '/' ? 'icon-dim' : 'icon-bright'}
            ><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" /></svg
          >
        </Button>

        <Button onclick={() => toggleTheme('toggle')} title="toggle theme">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon-bright"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </Button>

        <Button
          onclick={() => copyLink()}
          title={copied ? 'copied!' : 'copy link'}
          tooltipIcon={copied ? checkmark : undefined}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon-bright"
          >
            <path d="M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2" />
          </svg>
        </Button>
      </div>

      <div class="relative">
        <div class="flex flex-row gap-3 items-center select-none font-thin tracking-tighter">
          <div class="flex flex-row items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon-bright w-6 h-6"
              ><path
                d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
              /></svg
            >
            <span class="font-mono text-2xl sm:text-2xl">logs</span>
          </div>
          <div class="font-mono text-2xl sm:text-2xl hidden sm:block text-neutral-400 dark:text-neutral-600">\</div>
          <div class="flex-row items-center gap-1 hidden sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon-dim w-6 h-6"
              ><path
                d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
              /><path d="M2 10h20" /></svg
            >
            <span class="font-mono text-2xl sm:text-2xl hidden sm:block text-neutral-400 dark:text-neutral-600"
              >fike</span
            >
          </div>
          <div class="font-mono text-2xl sm:text-2xl hidden sm:block text-neutral-400 dark:text-neutral-600">\</div>
          <div class="flex-row items-center gap-1 hidden sm:flex text-neutral-400 dark:text-neutral-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="icon-dim w-6 h-6"
              ><path
                d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
              /><path d="M2 10h20" /></svg
            >
            <span class="font-mono text-2xl sm:text-2xl hidden sm:block text-neutral-400 dark:text-neutral-600">io</span
            >
          </div>
        </div>

        <div class="font-mono text-xs text-neutral-400 dark:text-neutral-600 absolute top-10 right-0">
          {data.motd}
        </div>
      </div>
    </div>

    <div class="absolute w-full bg-linear-to-t from-transparent to-black/10 h-2 lg:hidden"></div>
  </div>

  <!-- For page transitions -->
  {#key data.url}
    <!-- Content -->
    <div class="bg-neutral-50 dark:bg-neutral-900 pb-12 md:py-12 md:pb-24 lg:py-12 lg:pb-32 lg:rounded-b-lg">
      <div>
        {@render children?.()}
      </div>
    </div>
  {/key}
</div>
