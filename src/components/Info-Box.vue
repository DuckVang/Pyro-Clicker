<script setup>
import { set } from "@vueuse/core";
import { useStatStore } from "../stores/stat";
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

const date = new Date(Date.UTC(2100, 11, 12, 3, 0, 0)).toLocaleString(options);
const store = useStatStore();

setInterval(() => {
  store.helpersIncrement(10);
}, 100);

</script>

<template>
  <div class="Info-Box">
    <h1>Dark ages</h1>

    <div class="stat">
      <h4 class="date">{{ date }}</h4>
      <h4 class="temperature">-45</h4>
    </div>

    <h3>population: ???</h3>
    <h3>helpers: {{ store.helpers }}</h3>
    <h3>fire power: {{ store.firePower }}</h3>

    <h3 class="unit">{{ store.count }}</h3>
  </div>
</template>

<style lang="scss">
.Info-Box {
  width: 100%;
  max-height: 250px;
  background-color: $color1;

  & > * {
    margin: 0;
  }

  .stat {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    .temperature {
      &::after {
        content: "°C";
      }
    }
  }
  h1 {
    border-bottom: 1px solid $border1;
  }

  .unit {
    font-size: 3em;
  }
}
</style>
