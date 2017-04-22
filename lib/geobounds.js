var insidePolygon = require('point-in-polygon');

module.exports = bounds;

function between(a, b, c) {
  return a <= b && b <= c;
}

function insideRectangle(ll, rect) {
  var sw = rect[0], ne = rect[1];
  return between(sw[0], ll[0], ne[0]) && between(sw[1], ll[1], ne[1]);
}

function inside(ll, shape) {
    if (shape.length > 2) {
        return insidePolygon(ll, shape);
    }
    return insideRectangle(ll, shape);
}

// range is Array of rectangles [ [SW.lon, SW.lat], [NE.lon, NE.lat] ]
function bounds(range) {
  var bnds;
  if (range) {
    return function (ll) {
      return ll && range.some(inside.bind(null, ll));
    };
  }
  range = [];
  bnds = function (ll) {
    return range.length === 2 && insideRectangle(ll, range);
  };
  bnds.extend = function (ll) {
    var r;
    if (!range.length) {
      range.push(ll);
      range.push(ll);
    }
    else {
      r = range[0];
      range[0] = [Math.min(ll[0], r[0]), Math.min(ll[1], r[1])];
      r = range[1];
      range[1] = [Math.max(ll[0], r[0]), Math.max(ll[1], r[1])];
    }
  };
  bnds.get = function () {
    return [ range ];
  };
  return bnds;
}
