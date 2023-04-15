import { defineStore } from "pinia";

import { ref } from "vue";
import { useStorage } from "@vueuse/core";

export const useStatStore = defineStore("counter", () => {
  const count = useStorage("count", 0 as number);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
