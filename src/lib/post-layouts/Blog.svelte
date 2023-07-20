<script>
  import { convertDate } from "$lib/utils";
  import avatar from '$lib/assets/avatar.jpg';

  /** @type string */
  export let title;
  /** @type string */
  export let date;
  /** @type string[] */
  export let tags;
</script>

<div class="px-4 md:px-8 mx-auto max-w-prose md:text-lg">
  <!-- Heading -->
  <div class="flex flex-col gap-4 py-8">
    <div class="text-3xl sm:text-4xl font-serif text-neutral-900 tracking-tight">{title}</div>
    <div class="flex flex-row justify-start items-center gap-2 sm:gap-4 text-neutral-500">

      
      <div class="w-14 h-14 flex flex-col justify-center select-none pointer-events-none">
        <img src="{avatar}" alt="It's me!" class="aspect-square rounded-full shadow-md" />
      </div>
      <div class="font-extralight sm:text-lg">Published {convertDate(date)}</div>
      
      <div class="grow"></div>

      <div class="flex flex-row justify-center item-center gap-3 text-neutral-500">
        {#each tags as tag}
          <div class="font-mono text-sm rounded-full px-1.5 bg-slate-200 hover:text-neutral-700 transition cursor-pointer">
            <div class="flex flex-row items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
              </svg>
              <div>{tag}</div>
            </div>
          </div>
        {/each}
      </div>
      
      
      


      
      
    </div>

    <!-- <div class="w-1/12 mx-auto h-[1px] bg-neutral-300"></div> -->

    <!-- Social Buttons -->
    <!-- <div class="flex flex-row justify-center items-center gap-2 sm:gap-3 mt-4">
      
      <div class="flex flex-row justify-start items-center gap-4 border border-neutral-300 p-2 rounded-lg bg-neutral-100">
        <div class="cursor-pointer hover:text-blue-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        </div>
        <div class="cursor-pointer hover:text-blue-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </div>
        <div class="cursor-pointer hover:text-blue-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </div>
      </div>
    </div> -->
  </div>

  

  

  <!-- Divider -->
  <!-- <div class="w-1/12 mx-auto h-[1px] bg-neutral-300"></div> -->

  <div class="prose md:prose-lg prose-neutral mt-8">
    <slot />
  </div>
</div>
