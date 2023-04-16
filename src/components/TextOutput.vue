<script setup>
import { reactive } from "vue";
const data = reactive({
  messages: [
    "So cold",
    "Im hungry",
    "Im not feeling well",
    "This is the end",
    "Im scared",
    "...",
  ],
});
</script>

<template>
  <div class="Text-Box">
    <h1>Text Output</h1>

    <ul>
      <li v-for="(item, index) in data.messages" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
h1 {
  margin: 0;
}
.Text-Box {
  width: 100%;
  max-height: 250px;
  background-color: $color1;

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
  li {
    animation: fadeIn 0.51s cubic-bezier(.17,.67,.89,.32) both;
    animation-fill-mode: both;
    list-style-type: none;
  }

  @for $i from 1 through 7 {
    li:nth-child(#{$i}) {
      animation-delay: 6s + $i * 0.5;
    }
  }
}
@-webkit-keyframes fadeIn {
  0% {
    background-color: white;
    opacity: 0;
    top: 100px;
  }
  50% {
    opacity: 0.5;
    top: 0px;
  }
  100% {
    opacity: 1;
  }
}
</style>
