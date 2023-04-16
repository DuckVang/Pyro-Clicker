<script setup>
import { Application, Graphics, Sprite, Texture } from "pixi.js";
import start from "./Fire/firesimulation.js";
import { reactive, onMounted, ref } from "vue";
import Fire from "./Fire/fire";
import iceAge from "../../assets/dark-forest.png";

const pixiApp = ref(new Application({ autoResize: true }));

const fire = ref(new Fire(pixiApp.value.renderer.width, pixiApp.value.renderer.height));

const graphics = new Graphics();
pixiApp.value.stage.addChild(graphics);

// const iceBackGround = new Sprite(Texture.from(iceAge));
// iceBackGround.position.set(0,100)

// iceBackGround.height = pixiApp.value.renderer.height
// pixiApp.value.stage.addChild(iceBackGround);
start(graphics, pixiApp.value.renderer, fire);


onMounted(() => {
  document.querySelector("#Pixi-App").appendChild(pixiApp.value.view);

  window.addEventListener("resize", () => {
    resize();
  });
  resize();
});

function resize() {
  const parent = pixiApp.value.view.parentNode;

  pixiApp.value.renderer.resize(parent.clientWidth, window.innerHeight);
}
</script>
<template>
  <div id="Pixi-App"></div>
</template>

<style lang="scss">
#Pixi-App {
  flex: 1;
  position: relative;
  overflow: hidden;
  height: 100vh;

  background-color: black;
  border-bottom: double 3px $border1;
  border-top: double 3px $border1;

  & > canvas {
    margin: 0;
    overflow: hidden;
    animation: canvas 4s cubic-bezier(0.17, 0.67, 0.89, 0.32) both;
   
  }
  @keyframes canvas {
    0% {
      background-color: white;
      opacity: 2%;
    }
    50% {
      opacity: 0.5;

    }
    100% {
      opacity: 1;
    }
  }
}
</style>
