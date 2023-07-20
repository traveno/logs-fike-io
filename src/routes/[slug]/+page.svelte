<script lang="ts">
    import { onMount } from 'svelte';

  export let data;

  onMount(() => console.log(data));
</script>

<svelte:head>
  <title>{data.meta.title} | logs.fike.io</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
  <svelte:component this={data.content} />
</article>