<script lang="ts">
  export let name: string;
</script>

<div class="w-fit tag font-mono text-sm rounded-full px-1.5 bg-blue-200 text-black dark:bg-neutral-700 dark:text-white opacity-75 hover:opacity-100 hover:scale-105 cursor-pointer">
  <div class="flex flex-row items-center">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="icon-bright w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5" />
    </svg>
    <div class="font-extralight text-black dark:text-white">{name}</div>
  </div>
</div>