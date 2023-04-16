<script setup>
import FireCanvas from "./components/Fire-Canvas/index.vue";
import Clicker from "./components/Clicker-Button.vue";
import InfoBox from "./components/Info-Box.vue";
import StoreUpgrade from "./components/Store-Upgrade/index.vue";
import TextOutput from "./components/TextOutput.vue";
import SnowEffect from "./components/Snow-Effect/index.vue";
import { useStatStore } from "./stores/stat";

setTimeout(() => {
  useStatStore().setSnowFlakesAmount(100);
}, 5000);
</script>

<template>
  <SnowEffect class="Snow" />

  <div class="left panel">
    <InfoBox />
    <Clicker />
    <TextOutput />
  </div>

  <FireCanvas />

  <div class="right panel">
    <StoreUpgrade />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "VT323";
  src: local("VT323"), url(../font/VT323/VT323-Regular.ttf);
}
:root {
  font-family: "VT323";
}
#app {
  display: flex;
  flex-direction: row;
  width: 100vw;

  animation: panelAnimation 5s cubic-bezier(0.17, 0.67, 0.89, 0.32) both;
  animation-delay: 1s;

  .Snow {
    z-index: 1;
  }

  .panel {
    flex: 0.5;
    display: flex;
    padding: 15px;
    border: 3px double $border1;
    flex-direction: column;
    background-color: darken($color1, 10);
    height: 100vh;

    /* animation: fadeIn 5s cubic-bezier(0.17, 0.67, 0.89, 0.32) both; */

    &::before {
      z-index: -1;
      top: 2px;
      position: absolute;
      border: 7px solid $border1;
    }
  }
}
@keyframes panelAnimation {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
