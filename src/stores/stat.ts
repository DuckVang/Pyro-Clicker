import { defineStore } from "pinia";

import { ref } from "vue";
import { useStorage } from "@vueuse/core";

export const useStatStore = defineStore("counter", () => {
  const count = useStorage("count", 0 as number);
  const snowFlakes = ref(200);
  function increment() {
    count.value++;
  }
  function setSnowFlakesAmount(amount: number) {
    snowFlakes.value = amount;
  }

  return { count, increment, snowFlakes, setSnowFlakesAmount };
});
