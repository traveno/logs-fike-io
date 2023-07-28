<script lang="ts">
  import { sleep } from "$lib/utils";
  import { onMount } from "svelte";
  import sweatSmile from '$lib/assets/sweat-smile.png';
  import noMouth from '$lib/assets/no-mouth.png';
  import rocket from '$lib/assets/rocket.png';

  export let isVisible = false;

  let scale = 1.0;
  let content = noMouth;
  let rotate = 12;
  let animated = false;

  $: cssSize = `width: ${isVisible ? 64 * scale + 'px' : '0px'}; height: ${isVisible ? 64 * scale + 'px' : '0px'};`;

  onMount(() => {
    setTimeout(() => {
      peak();
    }, 4000);
  });

  async function peak() {
    scale = 2.0;
    await sleep(1500);
    scale = 1.0;
    await sleep(500);
    rotate = 0;
    content = rocket;
    animated = true;
  }
</script>

<div class="notrans absolute top-0 right-0">
  <div class="container relative hover:!w-[200px] hover:!h-[200px]" style="{cssSize}">
    

    <div class="absolute corner top-0 right-0 left-0 bottom-0 overflow-hidden rounded-tr-xl rounded-bl-xl z-10">
      <div class="graph absolute top-0 right-0 select-none w-72 h-72 heropattern-graphpaper-blue-400/50">
        <div class="absolute top-0 right-0 p-5 cursor-pointer -scale-x-100 w-32 h-32" style="rotate: {rotate}deg;">
          <img src={content} class="drop-shadow-lg {animated ? 'floating' : ''}" />
        </div>
      </div>
    </div>

    <div class="absolute curl top-0 right-0 left-0 bottom-0 rounded-bl-xl ring-1 ring-slate-900/5 dark:ring-white/5"></div>
  </div>
</div>


<style lang="postcss">
  .floating { 
    animation-name: floating;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
 
  @keyframes floating {
      0% { transform: translate(0,  0px); }
      50%  { transform: translate(0, -10px); }
      100%   { transform: translate(0, -0px); }   
  }

  .graph {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1) inset;
    background-color: #4A6DE5;
  }

  .container {
    transition: all .5s ease;
  }

  .corner {
    mask-image: linear-gradient(45deg, transparent, transparent 50%, white 50%, white 100%);
  }

  .corner:hover + .curl {
    box-shadow : 0 0 10px rgba(0, 0, 0, .3);
    &::before {
      box-shadow: 10px 17px 35px rgba(0, 0, 0, .25);
    }
    
    &::after {
      box-shadow: 5px 15px 35px rgba(0, 0, 0, .25);
    }
  }

  :global(.dark) {
    .corner:hover + .curl {
      box-shadow : 0 0 10px rgba(0, 0, 0, .6);
      &::before {
        box-shadow: 10px 17px 35px rgba(0, 0, 0, .8);
      }
      
      &::after {
        box-shadow: 5px 15px 35px rgba(0, 0, 0, .8);
      }
    }

    .curl {
      transition: all .5s ease;
      /* edge of window */
      background: 
        linear-gradient(
          225deg, 
          #171717,
          #171717 45%, 
          #111111 50%, 
          #0A0A0A 50%, 
          #1a1a1a 56%, 
          #202020 62%, 
          #252525 80%,
          #2A2A2A 100%
        );
      /* edge of the curled tip */

      &::before {
        box-shadow: 10px 17px 20px rgba(0, 0, 0, .5);
      }
      &::after {
        box-shadow: 5px 15px 20px rgba(0, 0, 0, .5);
      }
    }
  }

  .curl {
    /* edge of window */
    background: 
      linear-gradient(
        225deg, 
        #ffffff,
        #f3f3f3 45%, 
        #000000 50%, 
        #c1c1c1 50%, 
        #d3d3d3 56%, 
        #e6e6e6 62%, 
        #f3f3f3 80%,
        #ffffff 100%
      );
    /* edge of the curled tip */


    transition: all .5s ease;
    box-shadow : 0 0 5px rgba(0, 0, 0, .1);

    &::before {
      transition: all .5s ease;
      /* bottom */
      content: '';
      position: absolute;
      z-index: -1;
      right: -10%;
      bottom: 5.8%;
      width: 80%;
      max-width: 300px;
      max-height: 100px;
      height: 40%;
      box-shadow: 10px 17px 20px rgba(0, 0, 0, .15);
      transform: skew(0deg) rotate(10deg);
    }
    
    &::after {
      transition: all .5s ease;
      /* left */
      content: '';
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
      box-shadow: 5px 15px 20px rgba(0, 0, 0, .2);
      transform: skew(0deg) rotate(80deg);
    }
  }
</style>