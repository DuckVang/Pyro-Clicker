import Fire from "./fire";
import FrameLoop from "./FrameLoop";

export default function start(graphic, renderer, fire) {
  console.log("start");

  let ctx;
  let world;

  // canvas = document.getElementById(canvasId);

  // ctx = canvas.getContext("2d");
  ctx = graphic;

  world = new Fire(renderer.width, renderer.height);
  //   world = fire;

  new FrameLoop(ctx, world).animate();
}
