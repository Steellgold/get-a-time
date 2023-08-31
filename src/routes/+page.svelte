<script lang="ts">
  import { rndDate } from "$lib";
  import { onMount } from "svelte";

  export let timestamp: number = 0;

  onMount(() => {
    timestamp = rndDate()[1];
  });
</script>

<style>
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
  }
</style>

<div class="flex items-center justify-center mt-10">
  <div class="block max-w-sm px-3 p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
    {#if timestamp !== 0}
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{new Date(timestamp).toLocaleString()}</h5>
      <div class="flex items-center mb-3">
        <span class="mr-2 text-sm text-gray-400">Timestamp (click to copy):</span>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <kbd
          class="inline-block px-2 py-1 text-sm font-bold leading-5 text-white bg-gray-700 rounded-md cursor-pointer hover:bg-gray-600 transition-colors duration-300"
          aria-label="Copy timestamp"
          on:click={() => navigator.clipboard.writeText(timestamp.toString())}
        >
          {timestamp}
        </kbd>
      </div>
    {:else}
      <div class="h-7 rounded-md bg-gray-700 mb-4"></div>
      <div class="flex items-center mb-3 gap-1">
        <div class="w-[45%] h-3 rounded-md bg-gray-700 mb-4"></div>
        <div class="w-[30%] h-3 rounded-md bg-gray-700 mb-4"></div>
      </div>
    {/if}
    <p class="font-normal text-gray-400">
      This is a random time, you can refresh the page to get another one.
    </p>
  </div>
  
  <div class="fixed md:absolute bottom-0 sm:bottom-auto right-0 md:top-0 z-10 gap-4 p-4">
    <a href="https://www.buymeacoffee.com/steellgold" class="hover:opacity-75 transition-opacity duration-300" target="_blank">
      <img class="h-10" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="150" height="40" />
    </a>
  </div>
</div>

<div class="mt-6 text-center text-gray-400">
  <p>Made with ❤️ by <a class="text-gray-200" href="https://github.com/Steellgold">Steellgold</a></p>
</div>