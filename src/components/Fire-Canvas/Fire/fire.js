import MarchingSquares from "./marchingsquares";
import { Graphics, utils } from "pixi.js";
function p(n) {
  return {
    key: `l${n}`,
    max: 100,
    min: 0,
  };
}

function c(n) {
  return {
    key: `c${n}`,
    type: "color",
  };
}

export default class Fire {
  properties = [c(1), c(2), c(3), c(4), c(5), p(1), p(2), p(3), p(4), p(5)];

  label = "Fire using marching squares";
  x = -100;
  y = -200;

  height = 100;
  zindex = 1;
  width = 100;
  blocksize = 6;
  burnfactor = 131;
  fuel = 15;

  c1 = "#fffEFF";
  c2 = "#E2F2FF";
  c3 = "#9e9e9e";
  c4 = "#494949";
  c5 = "#000000";

  l1 = 100;
  l2 = 64;
  l3 = 35;
  l4 = 22;
  l5 = 11;
  runsimulation = 1;
  useintensitymodulation = 0;
  dopaint = true;
  optimize_onlysquares = false;
  optimize_rle_squares = true;
  optimize_removedoubles = false;
  optimize_batchfill = true;
  debug_drawmesh = false;

  constructor(width, height) {
    this.grid = [];
    this.burnoffset = 0;
    this.mytick = 60;
    this._boost = 0;
    console.log(width, height);

    this.width = width / 8;
    this.height = height / 6;
    console.log(this.width, this.height);
  }

  //wtf is offset
  updateBurnOffset = function () {
    this.mytick = ((this.mytick || 0) + 0.4) % 100;
    if (this.mytick > 85) {
      this.burnoffset += Math.random() * 0.1;
    }
    if (this.mytick < 50) {
      this.burnoffset *= 0.95;
    }
  };

  paint = function (ctx) {
    let i;
    let c;
    let g;
    let line;
    let point;
    let startx;
    let width;
    let l;
    let x;
    let y;
    let grids = [];

    if (!this.dopaint) {
      return;
    }

    // ctx.translate(this.x, this.y);
    ctx.x = this.x;
    ctx.y = this.y;
    //kazdej jednotlivej grid ma svoji barvu

    for (i = 1; i <= 5; i++) {
      l = this[`l${i}`];
      grids.push(
        MarchingSquares.calculateAllWithInterpolation(this.grid, l / 100)
      );
    }

    if (this.optimize_removedoubles) {
      this.erasePaintDoubles(grids);
    }
    //podle poctu barev
    for (i = 5; i > 0; i--) {
      l = this[`l${i}`];
      c = this[`c${i}`];

      // ctx.fillStyle = c;
      // if (this.optimize_batchfill) {
      //     ctx.beginFill(c);
      // }
      g = grids[i - 1];

      for (y = 0; y < g.length; y++) {
        line = g[y];
        for (x = 0; x < line.length; x++) {
          point = line[x];
          if (point && point.length > 0) {
            // RLE squares
            //optimalizace, ani nevim ceho
            if (true) {
              if (point[0].fullsquare) {
                startx = x;
                width = 0;
                while (
                  x < line.length &&
                  line[x] &&
                  line[x][0] &&
                  line[x][0].fullsquare
                ) {
                  x++;
                  width++;
                }
                if (width > 0) {
                  if (startx + width >= line.length) {
                    width = line.length - startx - 1;
                  }
                  this.drawRect(
                    ctx,
                    startx,
                    y,
                    width + 1,
                    1,
                    this.optimize_batchfill,
                    c
                  );
                  continue;
                }
              }
            }

            if (this.optimize_onlysquares) {
              this.drawRect(ctx, x, y, 1, 1, this.optimize_batchfill, c);
            } else {
              //vykresleni tamtech specialnich ctvercu
              // this.drawContour(ctx, point, x, y, this.optimize_batchfill);
              this.drawRect(ctx, x, y, 1, 1, this.optimize_batchfill, c);
            }
          }
        }
      }
      // if (true) {
      //     // ctx.fill();
      // }
    }
    //vykresleni meshu
    if (this.debug_drawmesh) {
      this.drawMesh(ctx, grids[0][0].length, grids[0].length);
    }
    // ctx.translate(-this.x, -this.y);
    ctx.x = -this.x;
    ctx.y = -this.y;
  };

  drawRect = function (ctx, x, y, width, height = 1, dontFill, color) {
    let xoffset;
    let yoffset;
    let b = this.blocksize;
    xoffset = b * x;
    yoffset = b * y;
    // if (!dontFill) {
    //     ctx.beginPath();
    // }
    const colorString = color;
    const colorNumber = parseInt(colorString.slice(1), 16);

    ctx.beginFill(colorNumber);
    ctx.drawRect(xoffset, yoffset, width * b, height * b);

    ctx.endFill();

    // if (!dontFill) {
    //     ctx.fill();
    // }
  };

  boost = function () {
    this._boost += 10;
  };

  tick = function (ctx, diff) {
    var x;
    var y;
    var lower;
    var upper;
    var lastLine;
    var burnfactor =
      (this.burnfactor +
        (this.useintensitymodulation ? this.burnoffset : 0) +
        this._boost) /
      100;
    var fuel = this.fuel / 100;
    var TICK_MS = 20;
    // i dont fcking know what does this change
    if (!this.runsimulation) {
      if (this.grid.length < this.height) {
        this.grid = this.createGrid(this.height);
      }
      return;
    }

    this.ms = (this.ms || 0) + diff;
    //changing burn computation
    function processLine(lower, upper) {
      var n;
      var length = lower.length;
      var sum;
      for (x = 0; x < length; x++) {
        sum = 0;
        n = x - 1;
        sum += (lower[n] || 0) + (lower[n + 1] || 0) + (lower[n + 2] || 0);
        sum += (upper[n] || 0) + (upper[n + 1] || 0) + (upper[n + 2] || 0);
        upper[x] = sum * 0.167 * burnfactor * (0.5 + Math.random() * 0.5);
      }
    }

    if (this.grid.length < this.height) {
      this.grid = this.createGrid(this.height);
    }

    while (this.ms > TICK_MS) {
      for (y = 0; y < this.grid.length - 1; y++) {
        lower = this.grid[y + 1];
        upper = this.grid[y];
        processLine(lower, upper);
      }
      lastLine = this.grid[this.grid.length - 1];
      const newLine = [];
      for (x = 0; x < lastLine.length; x++) {
        newLine.push(0.5 + Math.random() * fuel);
      }

      processLine(newLine, lastLine);
      this.ms = this.ms - TICK_MS;

      if (this.useintensitymodulation) {
        this.updateBurnOffset();
      }
      //dont get it
      if (this._boost > 0) {
        this._boost -= 1;
      }
    }
  };

  createGrid = function (height) {
    let grid = [];
    let i;

    function makeLine(length) {
      let line = [];
      let j;
      for (j = 0; j < length; j++) {
        line.push(0);
      }
      return line;
    }
    for (i = 0; i < height; i++) {
      grid.push(makeLine(this.width));
    }
    return grid;
  };
}
