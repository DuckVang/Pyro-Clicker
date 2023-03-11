
import Fire from "./Fire";
import FrameLoop from "./FrameLoop";

export default function start(canvasId) {
    console.log("start")

    let canvas;
    let ctx;
    let world;

    canvas = document.getElementById(canvasId);

    ctx = canvas.getContext("2d");


    world = new Fire();

    new FrameLoop(ctx, world).animate()
}

