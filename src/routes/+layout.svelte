<script lang="ts">
  import { goto } from '$app/navigation';
  import '../app.css';
</script>

<div class="fixed w-screen h-screen top-0 left-0 -z-10 bg-gradient-to-tl from-zinc-800 to-gray-700"></div>

<div class="lg:container lg:mx-auto lg:max-w-4xl w-full lg:my-16 drop-shadow-2xl">
  <!-- Banner -->
  <div class="text-center px-4 py-2 lg:px-8 lg:py-4 bg-neutral-100 text-neutral-700 flex flex-row gap-8 items-center justify-between border-b-2 border-neutral-300 border-dashed lg:rounded-t-lg sticky top-0 z-10 lg:relative">
    
    <div class="flex flex-row gap-4 lg:gap-8 justify-center">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="p-2 rounded-full bg-neutral-100 hover:bg-white hover:shadow transition hover:cursor-pointer" on:click={() => history.back()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="p-2 rounded-full bg-neutral-100 hover:bg-white hover:shadow transition hover:cursor-pointer" on:click={() => goto('/')}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </div>
    </div>
    <div class="flex flex-row gap-4 items-center">
      <div class="flex flex-row items-center gap-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
        </svg>
        
        <span class="font-mono text-2xl sm:text-2xl">logs</span>
      </div>
      <div class="font mono text-2xl sm:text-2xl text-neutral-400 hidden sm:block">\</div>
      <div class="flex-row items-center gap-1 text-neutral-400 hidden sm:flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
        <span class="font-mono text-2xl sm:text-2xl hidden sm:block">fike</span>
      </div>
      <div class="font mono text-2xl sm:text-2xl text-neutral-400 hidden sm:block">\</div>
      <div class="flex-row items-center gap-1 text-neutral-400 hidden sm:flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
        </svg>
        <span class="font-mono text-2xl sm:text-2xl hidden sm:block">io</span>
      </div>
      
    </div>
  </div>
  
  <!-- Content -->
  <div class="bg-neutral-100 pb-12 lg:py-12 lg:pb-32 lg:rounded-b-lg">
    <slot />
  </div>
  
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