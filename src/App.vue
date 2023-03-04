<script>

import FireCanvas from './components/Fire-Canvas/Fire-Canvas.vue'
import Clicker from './components/Clicker-Button.vue'
import InfoBox from './components/Info-Box.vue'
import StoreUpgrade from './components/Store-Upgrade/Store-Upgrade.vue'

export default {
  components: {

    FireCanvas,
    Clicker,
    InfoBox,
    StoreUpgrade
  }
}

</script>

<template>
  <div class="wrapper">
    <div class="left panel">
      <InfoBox></InfoBox>
      <Clicker></Clicker>
    </div>
    <FireCanvas></FireCanvas>
    <div class="right panel">
      <StoreUpgrade></StoreUpgrade>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: row;
  width: 100vw;

  &>* {
    flex: 1;
  }

  

  .panel {
    display: flex;
    padding: 10px;
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
