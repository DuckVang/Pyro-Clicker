<script setup>
import { Application, Graphics } from "pixi.js";
import start from "./Fire/firesimulation.js";
import { reactive, onMounted } from "vue";

const data = reactive({
  pixiApp: new Application({ autoResize: true }),
});

data.pixiApp.stage.addChild(
  new Graphics().beginFill(0x00eEE0).drawRect(0, 0, 100, 100).endFill()
);

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

  & > canvas {
    margin: 0;
    overflow: hidden;
  }
}
</style>
