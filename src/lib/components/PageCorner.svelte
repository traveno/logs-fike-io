<script lang="ts">
  import { sleep } from "$lib/utils";
  import noMouth from "$lib/assets/no-mouth.png";
  import die from "$lib/assets/die.webp";
  import { arrow, createFloatingActions } from "svelte-floating-ui";
  import { offset } from "@floating-ui/core";
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
    import { writable } from "svelte/store";

  // Control vars
  // Can the user see the corner?
  export let isVisible = false;
  // Can the user interact with the corner?
  let isReactive = false;
  // Is the user hovering? (i.e., interacting)
  let isUserHovering = false;
  // Overall scale of the peel when visible
  let scale = 1.0;
  // Scale of the peel when interacted with
  let interactScale = 3.125 * scale;
  // Size in pixels for width and height
  let cornerSize = 64;

  // Tooltip
  const arrowRef = writable<HTMLElement>();
  const [floatRef, floatContent] = createFloatingActions({
    strategy: "absolute",
    placement: "left",
    middleware: [
      offset(15),
      arrow({ element: arrowRef })
    ],
    onComputed({ placement, middlewareData }) {
      const { x, y } = middlewareData.arrow!;
      const staticSide = {
        top: 'bottom',
        right: 'left',
        bottom: 'top',
        left: 'right',
      }[placement.split('-')[0]];

      Object.assign($arrowRef.style, {
        left: x != null ? `${x}px` : "",
        top: y != null ? `${y}px` : "",
        [staticSide!]: "-6px"
      });
    }
  });

  let tooltipVisible = false;
  let tooltipText = 'roll the dice?';

  // Regarding the content within the page peel
  let content = noMouth;
  let emojiRotation = 12;
  let rocketAnimated = false;

  $: currentCornerSize = isVisible
    ? cornerSize * (isReactive && isUserHovering ? interactScale : scale)
    : 0;
  $: cssCorner = `width: ${currentCornerSize}px; height: ${currentCornerSize}px;`;
  $: if (isVisible) peak();

  async function peak() {
    if ((localStorage.peeked ?? false) === false) {
      localStorage.peeked = true;
      console.log("I was not peeked at");
      await sleep(2000);
      scale = 2.0;
      await sleep(1500);
      scale = 1.0;
      await sleep(600);
    }

    // emojiRotation = 0;
    content = die;
    rocketAnimated = true;
    isReactive = true;
  }

  async function interact() {
    tooltipVisible = false;
    await sleep(500);
    isReactive = false;
  }
</script>

<div class="notrans floating absolute z-20" style="animation-delay: 50ms;">
  
  {#if tooltipVisible}
  
    <div
      
      class="absolute"
      use:floatContent
      in:fade={{ duration: 300, delay: 500 }}
      out:fade={{ duration: 300 }}
    >
      <div class="arrow absolute z-10" bind:this={$arrowRef} />
      <div id="tooltip" class="px-3 py-2 w-max rounded-lg typewriter flex flex-row justify-start">
        <h1 class="!font-mono !text-neutral-100 font-bold text-xl">{tooltipText}</h1>
      </div>
    </div>
  {/if}
</div>


<div class="notrans absolute top-0 right-0 rounded-tr-lg rounded-bl-lg ring-1 ring-black/5 dark:ring-white/5">
  <div
    class="container relative {isReactive ? 'hoverable' : ''}"
    style={cssCorner}
    on:mouseenter={() => isUserHovering = true}
    on:mouseleave={() => isUserHovering = false}
    role="none"
  >
    <div
      class="absolute corner top-0 right-0 left-0 bottom-0 overflow-hidden  z-10"
    >
      <div
        class="graph absolute top-0 right-0 select-none w-72 h-72"
      >
        <div
          class="absolute top-0 right-0 m-6 w-20 h-20 transition duration-500 {isReactive
            ? 'cursor-pointer hover:scale-110 '
            : ''}"
          role="none"
          on:click={() => interact()}
          on:mouseenter={() => tooltipVisible = isUserHovering && isReactive}
          on:mouseleave={() => tooltipVisible = false}
        >
          <div id="content" class="{rocketAnimated ? "floating" : ""}">
            <img
              src={content}
              class="pointer-events-none select-none"
              style="rotate: {emojiRotation}deg;"
              alt="Surprise!"
              use:floatRef
            />
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute curl top-0 right-0 left-0 bottom-0 rounded-bl-lg"
    />
  </div>
</div>



<style lang="postcss">
  .arrow {
    width: 14px;
    height: 14px;
    rotate: 45deg;
    background: linear-gradient(-45deg, #5c7adc, #617cd7 100%);
    border-top: 3px solid;
    border-right: 3px solid;
    @apply border-neutral-100 rounded-tr;
  }

  #tooltip {
    /* background-color: #4a6de5; */
    border: 3px solid;
    background: linear-gradient(to top, #4a6de5, #718adc 100%);
    @apply !text-neutral-100 border-neutral-100;
  }

  .hoverable #content:hover, #tooltip {
    filter: drop-shadow(0 15px 20px rgba(0, 0, 0, 0.35));
  }

  #content.floating {
    transition: all 0.2s ease-in-out;
  }

  .typewriter h1 {
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em solid black; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    /* margin: 0 auto; Gives that scrolling effect as the typing happens */
    letter-spacing: .10em; /* Adjust as needed */
    animation: 
      typing 1.0s 0.5s steps(14, end),
      blink-caret .9s  infinite;
  }

  /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: rgb(245, 245, 245); }
  }

  .floating {
    animation-name: floating;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;

    @keyframes floating {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, -5px);
      }
      100% {
        transform: translate(0, 0px);
      }
    }
  }

  .graph {
    box-shadow: -10px 10px 50px rgba(17, 65, 175, 0.5) inset;
    /* background-color: #f4f4f4; */
    @apply bg-blue-500 heropattern-graphpaper-blue-400/50;
    /* @apply heropattern-graphpaper-blue-400/50; */
  }

  .container {
    transition: all 0.5s ease;

    &.hoverable:hover {
      width: 200px;
      height: 200px;
    }
  }

  .corner {
    mask-image: linear-gradient(
      45deg,
      transparent,
      transparent 50%,
      white 50%,
      white 100%
    );
  }

  .curl {
    /* edge of window */
    background: linear-gradient(
      225deg,
      #ffffff,
      #f3f3f3 45%,
      #000000 50%,
      #b3b3b3 50%,
      #d3d3d3 56%,
      #e6e6e6 62%,
      #f3f3f3 80%,
      #eeeeee 100%
    );
    /* edge of the curled tip */

    :global(.dark) & {
      /* edge of window */
      background: linear-gradient(
        225deg,
        #171717,
        #171717 45%,
        #111111 50%,
        #0a0a0a 50%,
        #1a1a1a 56%,
        #202020 62%,
        #252525 80%,
        #212121 100%
      );
      /* edge of the curled tip */
    }

    transition: all 0.5s ease;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

    /* Hoverable effects both light and dark mode */
    .hoverable:hover & {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      :global(.dark) & {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
      }
    }

    &::before {
      transition: all 0.5s ease;
      /* bottom */
      content: "";
      position: absolute;
      z-index: -1;
      right: -10%;
      bottom: 5.8%;
      width: 80%;
      max-width: 300px;
      max-height: 100px;
      height: 40%;
      box-shadow: 10px 17px 20px rgba(0, 0, 0, 0.15);
      transform: skew(0deg) rotate(10deg);

      /* Dark mode */
      :global(.dark) & {
        box-shadow: 10px 17px 20px rgba(0, 0, 0, 0.5);
      }

      /* Hoverable effects both light and dark mode */
      .hoverable:hover & {
        box-shadow: 10px 17px 35px rgba(0, 0, 0, 0.25);
        :global(.dark) & {
          box-shadow: 10px 17px 35px rgba(0, 0, 0, 0.8);
        }
      }
    }

    &::after {
      transition: all 0.5s ease;
      /* left */
      content: "";
      position: absolute;
      z-index: -1;
      right: auto;
      left: -15.5%;
      bottom: auto;
      top: 3.16%;
      width: 80%;
      max-width: 300px;
      max-height: 100px;
      height: 40%;
      box-shadow: 5px 15px 20px rgba(0, 0, 0, 0.2);
      transform: skew(0deg) rotate(80deg);

      /* Dark mode */
      :global(.dark) & {
        box-shadow: 5px 15px 20px rgba(0, 0, 0, 0.5);
      }

      /* Hoverable effects both light and dark mode */
      .hoverable:hover & {
        box-shadow: 5px 15px 35px rgba(0, 0, 0, 0.25);
        :global(.dark) & {
          box-shadow: 5px 15px 35px rgba(0, 0, 0, 0.8);
        }
      }
    }
  }
</style>
