<script setup>
import { reactive } from "vue";
const data = reactive({
  messages: ["Hello pog", "World is shit", "This is isnt daijobu", "Is there something meaningfull", "A catgirl", "Test is a test"],
});
</script>

<template>
  <h1>Text Output</h1>
  <div class="Text-Box">
    <p v-for="(item, index) in data.messages" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<style lang="scss">
h1{
  margin: 0;
}
.Text-Box {
  width: 100%;
  max-height: 250px;
  background-color: $color1;
  border: 1px dashed $border1;
  padding: 10px;
  & > * {
    margin: 0;
  }

  h1 {
    border-bottom: 1px solid $border1;
  }

  h2 {
  }

  .unit {
    font-size: 3em;
  }
}
</style>
