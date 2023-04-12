<script setup>
import logImg from "../assets/log.png";
import { useStatStore } from "../stores/stat";
const store = useStatStore();
</script>
<template>
  <div class="clicker">
    <button @click="store.increment">
      <div class="container">
        <img :src="logImg" alt="" />
      </div>
    </button>
  </div>
</template>
<style lang="scss" scoped>
.clicker {
  background-color: black;
}

button {
  font-family: "VT323";
  aspect-ratio: 1/1;
  max-width: 100%;
  border: 0;
  background-color: $color1;
  padding: 0;

  &:hover {
    background-color: red($color: #000000);
  }

  &:active {
    .container {
      img {
        scale: 1.2;
        // animation-name: click;
        // animation-direction: normal;
        // animation-duration: 10s;

        // @keyframes click {
        //   0% {
        //     translate: 0, 40px;
        //   }
        //   50% {
        //     translate: 100% -40px;
        //     transition: 0.2s;
        //     rotate: (10deg);
        //     scale: 0.5;
        //   }

        //   100% {
        //     position: 0px 0px;
        //     scale: 0.5;
        //   }
        // }
      }
    }
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #988a6a;
    border: 1px dashed $border1;

    background-color: $color1;
    background-image: url("https://www.transparenttextures.com/patterns/3px-tile.png");

    img {
      filter: grayscale(100%);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
