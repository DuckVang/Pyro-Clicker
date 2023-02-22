<script>

import FireCanvas from './components/Fire-Canvas.vue'
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
    <div class="right panel">right

      <StoreUpgrade></StoreUpgrade>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  width: 100vw;

}

.wrapper * {
  flex: 1;
}

.panel {
  display: flex;
  flex-direction: column;
  background-color: $color1.darken(1);
  height: 100vh;

}
</style>
