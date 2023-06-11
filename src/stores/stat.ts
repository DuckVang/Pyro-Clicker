import { defineStore } from "pinia";

import { Ref, reactive, ref } from "vue";
import { useStorage } from "@vueuse/core";
import IUpgrade from "../components/Store-Upgrade/IUpgrade";

// const Gasoline: IUpgrade = {
//   type: "firePower",
//   name: "Gasoline",
//   effect: "Amplify flame power",
//   price: useStorage("gasolinePrice", 10),
//   amount: useStorage("gasolineAmount", 1),
// };
// const Lumber: IUpgrade = {
//   type: "helpers",
//   name: "Lumber",
//   effect: "More human workers",
//   price: useStorage("axePrice", 59),
//   amount: useStorage("axeAmount", 1),
// };

export const useStatStore = defineStore("counter", () => {
  // const upgrades: Ref<{ [id: string]: IUpgrade }> = reactive({
  //   gasoline: Gasoline,
  //   lumber: Lumber,
  // });

  const snowFlakes = ref(100);

  const count: Ref<number> = useStorage("count", 0);
  const firePower: Ref<number> = useStorage("firePower", 1);
  const helpers: Ref<number> = useStorage("helpers", 0);

  function increment() {
    count.value += firePower.value;
  }
  function helpersIncrement(fraction: number) {
    count.value += Math.round(helpers.value / fraction);
  }
  function buyUpgrade(amount: number, type: "firePower" | "helpers") {
    if (count.value <= amount) return false;
    count.value -= amount;
    switch (type) {
      case "firePower":
        firePower.value += 1;
        break;
      case "helpers":
        helpers.value += 1;
        break;

      default:
        break;
    }
    return true;
  }
  function setSnowFlakesAmount(amount: number) {
    snowFlakes.value = amount;
  }

  return {
    count,
    increment,
    snowFlakes,
    setSnowFlakesAmount,
    buyUpgrade,
    firePower,
    helpers,
    helpersIncrement,
    // upgrades,
  };
});
