module.exports = bounds;

function between(a, b, c) {
  return a < b && b < c;
}

function inside(ll, rect) {
  var sw = rect[0], ne = rect[1];
  return between(sw[0], ll[0], ne[0]) && between(sw[1], ll[1], ne[1]);
}

// range is Array of rectangles [ [SW.lon, SW.lat], [NE.lon, NE.lat] ]
function bounds(range) {
  if (range) {
    return function (ll) {
      return ll && range.some(inside.bind(null, ll));
    };
  }
}
