<script lang="ts">
  export let name: string;
</script>

<div class="code-window lg:shadow-lg my-6 md:my-8">
  <div class="rounded-t-lg bg-gradient-to-l bg-neutral-700 relative">
    <div class="flex flex-row gap-2 justify-start items-center fixed translate-y-2 translate-x-2">
      <div class="h-3 w-3 rounded-full bg-red-400"></div>
      <div class="h-3 w-3 rounded-full bg-yellow-400"></div>
      <div class="h-3 w-3 rounded-full bg-green-400"></div>
    </div>
    <div class="text-center text-neutral-200 text-sm py-1">{name}</div>
  </div>
  <slot></slot>
</div>