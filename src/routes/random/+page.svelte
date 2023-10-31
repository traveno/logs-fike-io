<script lang="ts">
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  export let data;
  const { slug } = data;

  onMount(() => goto(slug));
</script>