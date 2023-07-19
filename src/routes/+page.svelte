<script lang="ts">
    import { convertDate } from '$lib/utils.js';

  export let data;
  const { posts } = data;
</script>

<svelte:head>
  <title>Index | logs / fike / io</title>
</svelte:head>

<div class="py-12 px-32 ">
  <div class="w-full">
      <div class="border-b border-b-neutral-300 pb-4">
          <h2 class="text-3xl tracking-tight font-semibold text-neutral-900 sm:text-4xl">Recent Posts</h2>
      </div>
      <div class="mt-12 grid gap-16 lg:grid-cols-1 lg:gap-x-5 lg:gap-y-12">
          {#each posts || [] as post}
              <div class="border border-neutral-300 p-4 rounded-lg flex flex-col justify-between">
                  <a href="/{post.slug}">
                      <p class="text-xl text-neutral-700">{post.title}</p>
                      <p class="mt-3 text-neutral-500">{post.blurb}</p>
                  </a>
                  <div class="mt-4">
                      <div class="text-end text-sm text-neutral-500">
                          {convertDate(post.date)}
                      </div>
                  </div>
              </div>
          {/each}
      </div>
  </div>
</div>