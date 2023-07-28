<script lang="ts">
  import { convertDate } from '$lib/utils.js';
  import Tag from '$lib/components/Tag.svelte';
  
  export let data;
  const { posts } = data;

  $: tags = posts.flatMap(p => p.tags);
</script>

<svelte:head>
<title>Index | logs.fike.io</title>
</svelte:head>

<div class=" px-4 md:px-32">
  <div class="w-full">
    <div class="pb-8">
      <h1 class="text-3xl font-mono font-thin border-b border-neutral-300 pb-2">tags</h1>
      <div class="py-4 flex flex-row gap-2 flex-wrap justify-center">
       {#each tags as tag}
         <span class="inline-block w-fit">
           <Tag name={tag} />
         </span>
       {/each}
      </div>
    </div>


    <div class="border-b border-b-neutral-300 pb-4">
      <h1 class="text-3xl font-mono font-thin">recent posts</h1>
    </div>
    <div class="mt-8 grid gap-4 lg:grid-cols-2">
      {#each posts || [] as post}
      <a href="/{post.slug}">
        <div class="border border-neutral-300 p-4 rounded-lg flex flex-col justify-between transition text-neutral-700 hover:shadow-lg hover:scale-[1.01]">
          <p class="text-xl">{post.title}</p>
          <p class="mt-3 text-neutral-500">{post.blurb}</p>
          <div class="mt-3">
            <div class="flex flex-row justify-between items-center">
              <div class="flex flex-row justify-start items-center gap-2">
                <!-- {#each post.tags as tag}
                <div class="font-mono text-sm rounded outline outline-1 outline-neutral-400 px-1 bg-neutral-200">
                  <div class="flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 stroke-neutral-700">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
                    </svg>
                    <div class="text-neutral-700">{tag}</div>
                  </div>
                </div>
                {/each} -->
              </div>
              <div class="text-sm text-neutral-500">{convertDate(post.date)}</div>
            </div>
          </div>
        </div>
      </a>
      {/each}
    </div>
  </div>
</div>