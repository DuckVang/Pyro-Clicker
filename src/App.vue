<script>
import HelloWorld from './components/HelloWorld.vue'
import FireCanvas from './components/Fire-Canvas.vue'
import Clicker from './components/Clicker-Button.vue'
import InfoBox from './components/Info-Box.vue'
export default {
  components: {
    HelloWorld,
    FireCanvas,
    Clicker,
    InfoBox
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
    <div class="right panel">right</div>
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
  background-color: blue;
  height: 100vh;

}
</style>
