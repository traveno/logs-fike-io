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

<div class="lg:px-32 md:px-12 px-4 mx-auto max-w-prose md:text-lg">
  <!-- Heading -->
  <div class="flex flex-col gap-4 py-8">
    <div class="text-3xl sm:text-4xl font-serif text-neutral-900 tracking-tight">{title}</div>
    <div class="flex flex-row justify-start items-center gap-2 sm:gap-4">
      <div class="w-12 h-12 drop-shadow pointer-events-none flex flex-col justify-center">
        <img src="{avatar}" alt="It's me!" class="aspect-square rounded-full" />
      </div>
      <div class="font-extralight sm:text-lg text-neutral-500">Published {convertDate(date)}</div>
      <div class="grow"></div>
      
      <!-- Social Buttons -->
      <div class="p-2 rounded-full border-dashed border border-neutral-400 hover:bg-neutral-300 transition hover:cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-neutral-500">
          <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
        </svg>
      </div>
      <div class="p-2 rounded-full border-dashed border border-neutral-400 hover:bg-neutral-300 transition hover:cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-neutral-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        </svg>
      </div>
      <div class="p-2 rounded-full border-dashed border border-neutral-400 hover:bg-neutral-300 transition hover:cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 stroke-neutral-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
        </svg>
      </div>
    </div>

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

  

  

  <!-- Divider -->
  <div class="w-1/12 mx-auto h-[1px] bg-neutral-300"></div>

  <div class="prose md:prose-lg prose-neutral mt-8">
    <slot />
  </div>
</div>
