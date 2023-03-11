
class Marching_squares {
  "use strict";


  static CONTOURS = [
    [], // 0
    [
      { x: 0, y: 100, yi: -1 },
      { x: 0.5, y: 1, xi: 1 },
      { x: 0, y: 1 },
    ], // 1
    [
      { x: 0.5, xi: -1, y: 1 },
      { x: 1, y: 0.5, yi: -1 },
      { x: 1, y: 1 },
    ], // 2
    [
      { x: 0.0, y: 1 },
      { x: 0, y: 0.5, yi: -1 },
      { x: 1, y: 0.5, yi: -1 },
      { x: 1, y: 1 },
    ], // 3
    [
      { x: 0.5, xi: -1, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 0.5, yi: 1 },
    ], // 4
    [
      { x: 0, y: 1 },
      { x: 0, y: 0.5, yi: -1 },
      { x: 0.5, xi: -1, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 0.5, yi: 1 },
      { x: 0.5, xi: 1, y: 1 },
    ], // 5 saddle point
    [
      { x: 0.5, xi: -1, y: 0 },
      { x: 0.5, xi: -1, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
    ], // 6
    [
      { x: 0, y: 0.5, yi: -1 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: 0.5, xi: -1, y: 0 },
    ], // 7
    [
      { x: 0, y: 0.5, yi: 1 },
      { x: 0.5, xi: 1, y: 0 },
      { x: 0, y: 0 },
    ], // 8
    [
      { x: 0.5, xi: 1, y: 0 },
      { x: 0.5, xi: 1, y: 1 },
      { x: 0, y: 1 },
      { x: 0, y: 0 },
    ], // 9
    [
      { x: 0, y: 0 },
      { x: 0.5, xi: 1, y: 0 },
      { x: 1, y: 0.5, yi: -1 },
      { x: 1, y: 1 },
      { x: 1, y: 0.5, yi: -1 },
      { x: 1, y: 1 },
      { x: 0.5, xi: -1, y: 1 },
      { x: 0, y: 0.5, yi: 1 },
    ], // 10 saddle point
    [
      { x: 0.5, xi: 1, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0.5, yi: -1 },
    ], // 11
    [
      { x: 0.0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 0.5, yi: 1 },
      { x: 0, y: 0.5, yi: 1 },
    ], // 12
    [
      { x: 0.5, xi: 1, y: 1 },
      { x: 0, y: 1 },
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 0.5, yi: 1 },
    ], // 13
    [
      { x: 0, y: 0.5, yi: 1 },
      { x: 0.5, xi: -1, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: 0, y: 0.0 },
    ], // 14
    [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
    ], // 15
  ];

  static isSaddlePoint(point) {
    return point === 5 || point === 10;
  }

  /**
   * Flip point
   */


  static resolveSaddlePointWithAvg(point, avg, threshold) {
    if (avg >= threshold) {
      if (point === 5) {
        return 10;
      }
      if (point === 10) {
        return 5;
      }
    }
    return point;
  }

  static getInterpolatedPoint(point, originalValues, threshold) {
    let o = originalValues;
    let avg = (o[0] + o[1] + o[2] + o[3]) / 4;
    let cont = this.CONTOURS[point];
    let ret = [];
    let c;
    let i;
    let x;
    let y;
    let f;

    function makeF(avg) {
      return Math.min(1, avg / threshold) - 0.5;
    }

    f = makeF(avg);

    function ip(val, intf, f) {
      // interpolate
      if (intf) {
        if (intf > 0) {
          return val + f;
        } else {
          return val - f;
        }
      }
      return val;
    }
    for (i = 0; i < cont.length; i++) {
      c = cont[i];
      if (c.xi) {
        if (c.y === 0) {
          x = ip(c.x, c.xi, makeF((o[0] + o[1]) / 2));
        } else if (c.y === 0.5) {
          x = ip(c.x, c.xi, f);
        } else if (c.y === 1) {
          x = ip(c.x, c.xi, makeF((o[2] + o[3]) / 2));
        } else {
          x = ip(c.x, c.xi, f);
        }
      } else {
        x = ip(c.x, c.xi, f);
      }
      if (c.yi) {
        if (c.x === 0) {
          y = ip(c.y, c.yi, makeF((o[0] + o[3]) / 2));
        } else if (c.x === 0.5) {
          y = ip(c.y, c.yi, f);
        } else if (c.x === 1) {
          y = ip(c.y, c.yi, makeF((o[1] + o[2]) / 2));
        } else {
          y = ip(c.y, c.yi, f);
        }
      } else {
        y = ip(c.y, c.yi, f);
      }

      ret.push({ x: x, y: y });
    }
    if (point === 15) {
      ret[0].fullsquare = true;
    }

    return ret;
  }



  static calculateAllWithInterpolation = function (grid, threshold) {
  
    let x;
    let y;
    let line1;
    let line2;
    let retGrid = [];
    let retLine;
    let point;
    let avg;

    const th = function (val) {
      return val >= threshold ? 1 : 0;
    };

    for (y = 0; y < grid.length - 1; y++) {
      line1 = grid[y];
      line2 = grid[y + 1];
      retLine = [];
      for (x = 0; x < line1.length - 1; x++) {
        point =
          (th(line1[x]) << 3) |
          (th(line1[x + 1]) << 2) |
          (th(line2[x + 1]) << 1) |
          th(line2[x]);
        avg = (line1[x] + line1[x + 1] + line2[x + 1] + line2[x]) / 4;
        point = this.resolveSaddlePointWithAvg(point, avg, threshold);
        retLine.push(
          this.getInterpolatedPoint(
            point,
            [line1[x], line1[x + 1], line2[x + 1], line2[x]],
            threshold
          )
        );
      }
      retGrid.push(retLine);
    }
    return retGrid;
  }
}