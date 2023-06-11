import { Ref } from "vue";

interface IUpgrade {
  type: "firePower" | "helpers";
  name: string;
  effect: string;

  price: number
  
  // price: Ref<number>;
  // amount: Ref<number>;
}
export default IUpgrade;
