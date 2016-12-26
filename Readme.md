[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]

# geobounds

Checks if point is in bounds.

## Install

```sh
$ npm install --save geobounds
```

## Usage

```js
var geobounds = require('geobounds');
var bounds = geobounds([
  [[-1, 0], [3, 5]],
  [[100, 20], [115, 80]]
]);

bounds([1, 1]); // true
bounds([4, 1]); // false

```

## License

MIT © [Damian Krzeminski](https://code42day.com)

[npm-image]: https://img.shields.io/npm/v/geobounds.svg
[npm-url]: https://npmjs.org/package/geobounds

[travis-url]: https://travis-ci.org/code42day/geobounds
[travis-image]: https://img.shields.io/travis/code42day/geobounds.svg

[gemnasium-image]: https://img.shields.io/gemnasium/code42day/geobounds.svg
[gemnasium-url]: https://gemnasium.com/code42day/geobounds
