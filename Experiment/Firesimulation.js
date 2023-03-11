


function start(canvasId) {
    console.log("start")
    let canvas;
    let ctx;
    let world;

    canvas = document.getElementById(canvasId);


    ctx = canvas.getContext("2d");

    // world = new Scene(
    //     {
    //         config: defaultConfig,
    //     },
    //     ctx
    // );

    world = new Fire();



    new FrameLoop(ctx, world).animate()
}

