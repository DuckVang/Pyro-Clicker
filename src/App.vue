<script>
import HelloWorld from './components/HelloWorld.vue'
import FireCanvas from './components/Fire-Canvas.vue'

export default {
  components: {
    HelloWorld,
    FireCanvas
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="left panel">left</div>
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
.wrapper *{
  flex: 1;
}
.panel {
  background-color: blue;
  height: 100vh;
  
}
</style>
