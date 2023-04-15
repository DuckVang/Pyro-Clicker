<script>
import FireCanvas from "./components/Fire-Canvas/index.vue";
import Clicker from "./components/Clicker-Button.vue";
import InfoBox from "./components/Info-Box.vue";
import StoreUpgrade from "./components/Store-Upgrade/index.vue";
import TextOutput from "./components/TextOutput.vue";
import SnowEffect from "./components/Snow-Effect/index.vue";
export default {
  components: {
    FireCanvas,
    Clicker,
    InfoBox,
    StoreUpgrade,
    TextOutput,
    SnowEffect,
  },
};
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
:root{
  font-family: "VT323";
}
#app {
  display: flex;
  flex-direction: row;
  width: 100vw;

  .panel {
    flex: 0.5;
    display: flex;
    padding: 15px;
    border: 3px double $border1;
    flex-direction: column;
    background-color: darken($color1, 10);
    height: 100vh;
   

    &::before {
      z-index: -1;
      top: 2px;
      position: absolute;
      border: 7px solid $border1;
    }
  }
}
</style>
