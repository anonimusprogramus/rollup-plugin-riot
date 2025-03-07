# Rollup Plugin for Riot

[![Build Status][travis-image]][travis-url]
[![NPM version][npm-version-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]

Compiles tag files within rollup processes.

## Important

If you are using Riot.js < 4.0.0 please check the [v3 branch](https://github.com/riot/rollup-plugin-riot/tree/v3)

## Installation

```bash
npm install rollup-plugin-riot @riotjs/compiler -D
```

Requires riot-compiler v4.x.x and Rollup v0.66 or above.

## Usage

```js
import riot  from 'rollup-plugin-riot'
export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  plugins: [riot()]
}
```

## Options

You can specify some `options`:

```js
import riot  from 'rollup-plugin-riot'
const options = {
  ext: 'html'
}
export default {
  entry: 'src/main.js',
  dest: 'dist/bundle.js',
  plugins: [riot(options)]
}
```

- `ext`: extension of tag file (default is 'tag')
- `skip`: `exclude` on Riot API. Ex. `html`, `css` or `js`
- `include`: a [minimatch](https://www.npmjs.com/package/minimatch) pattern for including files.
- `exclude`: a minimatch pattern for excluding files.compiler/#es6-config-file)).

And other options of `@riotjs/compiler` could be used.

## Recipes

- https://github.com/riot/examples/tree/gh-pages/rollup

[travis-image]:https://img.shields.io/travis/riot/rollup-plugin-riot.svg?style=flat-square
[travis-url]:https://travis-ci.org/riot/rollup-plugin-riot

[license-image]:https://img.shields.io/badge/license-MIT-000000.svg?style=flat-square
[license-url]:LICENSE

[npm-version-image]:https://img.shields.io/npm/v/rollup-plugin-riot.svg?style=flat-square
[npm-downloads-image]:https://img.shields.io/npm/dm/rollup-plugin-riot.svg?style=flat-square
[npm-url]:https://npmjs.org/package/rollup-plugin-riot
