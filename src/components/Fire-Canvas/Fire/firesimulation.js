
import Fire from "./Fire";
import FrameLoop from "./FrameLoop";

export default function start(graphic, renderer) {
    console.log("start")

    let canvas;
    let ctx;
    let world;

    // canvas = document.getElementById(canvasId);

    // ctx = canvas.getContext("2d");
    ctx = graphic

    world = new Fire(renderer.width, renderer.height);

    new FrameLoop(ctx, world).animate()
}

