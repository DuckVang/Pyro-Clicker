<script >
import { Application, Graphics } from "pixi.js";
import start from "./Fire/firesimulation.js";

let pixiApp = new Application({ autoResize: true });

pixiApp.stage.addChild(
  new Graphics().beginFill(0x00e200).drawRect(0, 0, 100, 100).endFill()
);

export default {
  data() {
    return {
      pixiApp: pixiApp,
    };
  },
  mounted() {
    this.$el.appendChild(this.pixiApp.view);
    console.log(this.$el);

    window.addEventListener("resize", this.resize);
    this.resize();
    console.log(this.$el);
  },
  methods: {
    resize() {
      const parent = this.pixiApp.view.parentNode;
      console.log(parent);
      console.log(parent.clientWidth, parent.clientHeight);
      pixiApp.renderer.resize(parent.clientWidth, window.innerHeight);
    },
  },
};
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
