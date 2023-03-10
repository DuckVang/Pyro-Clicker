<script>
import FireCanvas from "./components/Fire-Canvas/Fire-Canvas.vue";
import Clicker from "./components/Clicker-Button.vue";
import InfoBox from "./components/Info-Box.vue";
import StoreUpgrade from "./components/Store-Upgrade/Store-Upgrade.vue";
import TextOutput from "./components/TextOutput.vue";
import SnowEffect from "./components/Snow-Effect/SnowEffect.vue";
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
  <SnowEffect class="Snow"></SnowEffect>
  <div class="left panel">
    <InfoBox></InfoBox>
    <Clicker></Clicker>
    <TextOutput></TextOutput>
  </div>
  <FireCanvas></FireCanvas>
  <div class="right panel">
    <StoreUpgrade></StoreUpgrade>
  </div>
</template>

<style  lang="scss">
#app {
  display: flex;
  flex-direction: row;
  width: 100vw;

   

  .panel {
    flex: 1;
    display: flex;
    padding: 15px;
    border: 3px double $border1;
    flex-direction: column;
    background-color: darken($color1, 10);
    height: 100vh;
    flex: 0.7;

    &::before {
      z-index: -1;
      top: 2px;
      position: absolute;
      border: 7px solid $border1;
    }
  }
}
</style>
