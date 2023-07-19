<script lang="ts">
    import { goto } from '$app/navigation';
    import '../app.css';
</script>

<div class="fixed w-screen h-screen top-0 left-0 -z-10 bg-gradient-to-tl from-gray-800 to-gray-700"></div>

<div class="lg:container lg:mx-auto lg:max-w-4xl w-full backdrop-blur-xl rounded-b-2xl lg:my-16 drop-shadow-2xl">
  <!-- Banner -->
  <div class="text-center px-8 py-4 bg-neutral-300 text-neutral-700 lg:rounded-t-lg flex flex-row gap-8 items-center justify-between">

    <div class="flex flex-row gap-8 justify-center">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div class="p-3 rounded-full bg-neutral-100 hover:bg-white hover:shadow transition hover:cursor-pointer" on:click={() => history.back()}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <div class="p-3 rounded-full bg-neutral-100 hover:bg-white hover:shadow transition hover:cursor-pointer" on:click={() => goto('/')}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden lg:block">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </div>
    </div>
    <span class="font-serif text-2xl sm:text-4xl">logs / fike / io</span>
  </div>

  <!-- Content -->
  <div class="bg-neutral-100 py-12">
    <slot />
  </div>

  <!-- Footer -->
  <div class="text-center py-4 bg-neutral-300 text-neutral-700 lg:rounded-b-lg flex flex-row gap-8 items-center justify-between px-8">
    <div class="flex flex-row gap-12 justify-center">
      <div class="p-3 rounded-full bg-neutral-100 hover:bg-white hover:shadow transition hover:cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
        </svg>
      </div>
      
    </div>
    <span class="font-serif text-2xl sm:text-4xl">stephen fike 2023</span>
  </div>
</div>