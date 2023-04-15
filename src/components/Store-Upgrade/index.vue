<script setup lang="ts">
import Upgrade from "./Upgrade.vue";
import gasolineImg from "../../assets/gasoline.png";
import IUpgrade from "./IUpgrade";
import axeImage  from "../../assets/axe.png"
import { effect } from "vue";

const Gasoline: IUpgrade = {
  name: "Gasoline",
  effect: "Amplify flame power",
  price: 99,
};
const Axe: IUpgrade = {
  name: "Axe",
  effect: "More axe power",
  price: 59,
};
</script>
<template>
  <div class="store-upgrade">
    <div class="title">
      <h1>UPGRADES</h1>
      <div class="categories">
        <a href="" class="flame">flame</a>
        <a href="" class="helpers">helpers</a>
        <a href="" class="specials">special</a>
      </div>
    </div>
    <Upgrade :img="gasolineImg" :upgrade="Gasoline"> </Upgrade>
    <Upgrade :img="axeImage" :upgrade="Axe"></Upgrade>
    <Upgrade :img="gasolineImg"></Upgrade>
    <Upgrade :img="gasolineImg" :is-locked="true"></Upgrade>
  </div>
</template>
<style scoped lang="scss">
@import "node_modules/pixel-borders/src/styles/pixel-borders.scss";

.store-upgrade {
  display: flex;
  flex-direction: column;
  background-color: $color1;
  height: 100vh;
  width: 100%;
  overflow: scroll;

  .title {
    align-items: left;

    h1 {
      font-size: 2em;
      border-bottom: 2px dashed grey;
    }
  }
  .categories {
    text-decoration: none;
    z-index: 10;
    display: flex;
    gap: 5px;
    margin-top: 10px;
    & > * {
      &:link {
        text-decoration: unset;
      }
      &:hover {
        transition: all 0.3s;
        transform: translateY(-10%);
        border-color: rgb(255, 255, 255);
      }
      color: white;
      font-size: large;
      border: 1px solid grey;
      padding: 0 6px;
    }
  }
}
</style>
