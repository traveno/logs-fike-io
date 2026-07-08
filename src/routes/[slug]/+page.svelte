<script lang="ts">
  import { onMount } from 'svelte';

  let { data } = $props();

  onMount(() => console.log(data));
</script>

<svelte:head>
  <title>{data.meta.title} — logs.fike.io</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta name="description" content={data.meta.blurb} />
</svelte:head>

<article>
  <data.content />
</article>
