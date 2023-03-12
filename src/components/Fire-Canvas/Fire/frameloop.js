

const WAITMS_RUN = 1000 / 60;
const WAITMS_PAUSE = 200;

export default class FrameLoop {
  ctx
  mainobj


  lastTs = new Date();
  s = 0;
  pause;
  frames = 0;


  constructor(ctx, mainobj) {
    this.ctx = ctx;
    this.mainobj = mainobj;

  }


  animate = function () {
    let curTs = new Date() - 0;
    let diff = curTs - this.lastTs;


    this.lastTs = curTs;
    this.s = this.s + diff;
    this.frames++;

    //vykreslení a výpočet
    this.ctx.clear()
    this.mainobj.tick(this.ctx, diff);


    this.mainobj.paint(this.ctx);
    setTimeout(() => {
      console.log("Delayed for 1 second.");
      this.animate()
    }, 0);
  };

};

