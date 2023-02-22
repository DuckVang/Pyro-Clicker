<script>
import HelloWorld from './components/HelloWorld.vue'
import FireCanvas from './components/Fire-Canvas.vue'
import Button from './components/Button.vue'

export default {
  components: {
    HelloWorld,
    FireCanvas
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="left panel">
      pog
      <Button></Button>
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
