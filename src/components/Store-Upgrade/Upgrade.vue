<script setup lang="ts">
import gasolineImg from "../../assets/gasoline.png";
import lockImg from "../../assets/lock.png";
import chainImg from "../../assets/chain-lock3.png";
import IUpgrade from "./IUpgrade";
import { PropType } from "vue";
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  isLocked: { type: Boolean, required: false, default: false },
  upgrade: {
    type: Object as PropType<IUpgrade>,
    required: false,
    default: { name: "Default", effect: "Effect", price: 0 } as IUpgrade,
  },
});

const { img, isLocked, upgrade } = props;
</script>
<template>
  <div class="upgrade" :class="isLocked ? 'locked' : ''">
    <!-- <img class="lock" v-if="props.isLocked" :src="lockImg" alt="" /> -->

    <div class="icon">
      <img :src="img" alt="" />
    </div>
    <div class="text">
      <div class="name">
        <h1>
          {{ upgrade.name }}
        </h1>
      </div>
      <div class="lower">
        <p>{{ upgrade.effect }}</p>
        <p>{{ upgrade.price }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "node_modules/pixel-borders/src/styles/pixel-borders.scss";

.upgrade {
  position: relative;
  margin-top: 10px;
  padding: 0 5px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: min-content;
  background-color: darken($color1, 10);
  border: 1px dashed $border1;

  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    transition: all 0.8s;
    z-index: 0;
    transform: translateX(-100%);
  }
  &:hover {

    border: solid;
    transition: all 1s;

    &::before {
      transition: all 0.5s;
      transform: translateX(0);
    }
    .text {
      transition: all 1.5s;
      color: black;
    }
    .icon {
      transition: all 10s;
      img {
        filter: grayscale(200%);
      }
    }
  }
  &:active {
    scale: 1;
  }

  .icon {
    z-index: 1;
    height: 3.25em;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      scale: 1.2;
      rotate: 5deg;
      height: 100%;
      width: 100%;
      filter: grayscale(50%);

      /* object-fit: contain; */
    }
  }
  .text {
    z-index: 1;
    flex: 1;
    max-height: 100%;
    margin-left: 10px;
    gap: 0;
    .name {
     line-height: normal;
    }
    .lower {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
