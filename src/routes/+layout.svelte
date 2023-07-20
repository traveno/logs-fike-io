<script lang="ts">
  import { goto } from '$app/navigation';
  import '../app.css';

  export let data;
</script>

<div class="fixed w-screen h-screen top-0 left-0 -z-10 from-zinc-800 to-gray-700 bg-neutral-100 lg:bg-gradient-to-tl"></div>

<div class="lg:container lg:mx-auto lg:max-w-4xl w-full lg:drop-shadow-2xl transition re">
  <!-- Banner -->
  <div class="sticky top-0 z-10 lg:relative">
    <div class="text-center px-4 py-2 lg:px-8 lg:py-4 bg-neutral-100 text-neutral-700 flex flex-row gap-8 items-center justify-between lg:rounded-t-lg ">
      <div class="flex flex-row gap-4 lg:gap-8 justify-center">
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div class="p-2 rounded-full bg-neutral-100 hover:bg-white hover:shadow transition hover:cursor-pointer" on:click={() => goto('/')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        </div>

        <div class="p-2 rounded-full bg-neutral-100 hover:bg-white hover:shadow transition hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
        </div>


        <div class="p-2 rounded-full bg-neutral-100 hover:bg-white hover:shadow transition hover:cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
        </div>
      </div>
      <div class="flex flex-row gap-4 items-center select-none">
        <div class="flex flex-row items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"/></svg>
          <span class="font-mono text-2xl sm:text-2xl">logs</span>
        </div>
        <div class="font mono text-2xl sm:text-2xl text-neutral-400 hidden sm:block">\</div>
        <div class="flex-row items-center gap-1 text-neutral-400 hidden sm:flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M2 10h20"/></svg>
          <span class="font-mono text-2xl sm:text-2xl hidden sm:block">fike</span>
        </div>
        <div class="font mono text-2xl sm:text-2xl text-neutral-400 hidden sm:block">\</div>
        <div class="flex-row items-center gap-1 text-neutral-400 hidden sm:flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><path d="M2 10h20"/></svg>
          <span class="font-mono text-2xl sm:text-2xl hidden sm:block">io</span>
        </div>
      </div>
    </div>

    <div class="absolute w-full bg-gradient-to-t from-transparent to-black/10 h-2 lg:hidden"></div>
  </div>
  
  

  <!-- For page transitions -->
  {#key data.url}
  <!-- Content -->
  <div class="bg-neutral-100 pb-12 md:py-12 md:pb-24 lg:py-12 lg:pb-32 lg:rounded-b-lg">
  <!-- <div class="bg-neutral-100 pb-12 md:py-12 lg:py-12 lg:pb-32 lg:rounded-b-lg absolute w-full" out:slide={{ duration: 500, axis:  'y' }} in:slide={{ duration: 500, delay: 500, axis: 'y' }}> -->
  <!-- <div class="bg-neutral-100 pb-12 md:py-12 lg:py-12 lg:pb-32 lg:rounded-b-lg absolute w-full" out:fly={{ duration: 500, x: 100 }} in:fly={{ duration: 500, delay: 250, x: -100 }}> -->
    <div>
      <slot />
    </div>
  </div>
  {/key}
  
  
  
  <!-- Footer -->
  <!-- <div class="text-center py-4 bg-neutral-300 text-neutral-700 lg:rounded-b-lg flex flex-row gap-8 items-center justify-between px-8">
    <div class="flex flex-row gap-12 justify-center">
      <div class="p-3 rounded-full bg-neutral-100 hover:bg-white hover:shadow transition hover:cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
        </svg>
      </div>
      
    </div>
    <span class="font-serif text-2xl sm:text-4xl">stephen fike 2023</span>
  </div> -->
</div>