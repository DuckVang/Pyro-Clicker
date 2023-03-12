<script setup>
import { Application, Graphics } from "pixi.js";
import start from "./Fire/firesimulation.js";
import { reactive, onMounted } from "vue";

const data = reactive({
  pixiApp: new Application({ autoResize: true }),
});

const graphics = new Graphics();
data.pixiApp.stage.addChild(graphics);

start(graphics, data.pixiApp.renderer);

onMounted(() => {
  document.querySelector("#Pixi-App").appendChild(data.pixiApp.view);

  window.addEventListener("resize", resize);
  resize();
});

function resize() {
  const parent = data.pixiApp.view.parentNode;
  console.log(parent);
  console.log(parent.clientWidth, parent.clientHeight);
  data.pixiApp.renderer.resize(parent.clientWidth, window.innerHeight);
}
</script>
<template>
  <div id="Pixi-App"></div>
</template>

<style lang="scss">
#Pixi-App {
  flex: 2;
  position: relative;
  overflow: hidden;
  height: 100vh;

  background-color: black;
  border-bottom: double 3px $border1;
  border-top: double 3px $border1;

  & > canvas {
    margin: 0;
    overflow: hidden;
  }
}
</style>
