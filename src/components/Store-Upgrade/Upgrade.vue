<script setup lang="ts">
import gasolineImg from "../../assets/gasoline.png";
import lockImg from "../../assets/lock.png";
import chainImg from "../../assets/chain-lock3.png";
import IUpgrade from "./IUpgrade";
import { PropType, ref } from "vue";
import { useStatStore } from "../../stores/stat";

const statStore = useStatStore();
const props = defineProps({
  img: {
    type: String,
    required: true,
  },
  isLocked: { type: Boolean, required: false, default: false },
  upgrade: {
    type: Object as PropType<IUpgrade>,
    required: true,
    // default: { name: "Default", effect: "Effect", price: 0 } as IUpgrade,
  },
});
const { img, isLocked, upgrade } = props;

const isShaking = ref(false);

function buy() {
  isShaking.value = !statStore.buyUpgrade(upgrade.price, upgrade.type);
  setTimeout(() => {
    isShaking.value = false;
  }, 1000);
}
</script>
<template>
  <div class="upgrade" @click="buy" :class="{ shake: isShaking }">
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
  user-select: none;
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
    cursor: pointer;
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
  &:hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
