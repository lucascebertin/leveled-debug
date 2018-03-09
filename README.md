# Leveled-Debug
This lib makes even easier to use the npm Debug adding some severity levels.

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Coverage Status](https://coveralls.io/repos/github/lucascebertin/leveled-debug/badge.svg?branch=master)](https://coveralls.io/github/lucascebertin/leveled-debug?branch=master)


## How to use it
```js
const { createConsoleDebugger } = require('leveled-debug')
const debuggers = createConsoleDebugger('test')
debuggers.log('test')

/*
console outs: test:log test +0ms
*/
```

## Getting started
First, you should be using yarn, if you don't, start installing by
```npm install -g yarn```

Now, run ```yarn``` to restore the dependencies.

If you are the kind of person who like to restart the app on each file save, run ```yarn watch``` and start to code, otherwise ```yarn build```.

## Debugging
For ease debug and inspection, use ```yarn build:dev```, this way, source mapping will be generated inline on your transpiled files.
There is already one `./.vscode/launch.json` configured to use sourceMaps on debug, put some breakpoints on your source files, hit F5 and be happy.

## Testing
Jest is already configured to respect some rules and generate coverage, run ```yarn test```

## Built with
* [VSCode](https://code.visualstudio.com/)
* [Yarn](https://yarnpkg.com/pt-BR/)
* [Babel](https://babeljs.io/)
  * [Exponential operator](https://www.npmjs.com/package/babel-plugin-transform-exponentiation-operator)
  * [Async to bluebird](https://www.npmjs.com/package/babel-plugin-transform-async-to-bluebird)
  * [Object rest spread](https://www.npmjs.com/package/babel-plugin-transform-object-rest-spread)
  * [Import/Export to commonjs](https://www.npmjs.com/package/babel-plugin-transform-es2015-modules-commonjs)
  * [Spread operator](https://www.npmjs.com/package/babel-plugin-transform-es2015-spread)
  * [Destructuring](https://www.npmjs.com/package/babel-plugin-transform-es2015-destructuring)
  * [For-Of](https://www.npmjs.com/package/babel-plugin-transform-es2015-for-of)
  * [Template literals](https://www.npmjs.com/package/babel-plugin-transform-es2015-template-literals)
* [Eslint](https://eslint.org/)
* [Jest](https://facebook.github.io/jest/)



[npm-image]: https://img.shields.io/npm/v/leveled-debug.svg
[npm-url]: https://npmjs.org/package/leveled-debug
[downloads-image]: https://img.shields.io/npm/dm/leveled-debug.svg
[downloads-url]: https://npmjs.org/package/leveled-debug

[travis-image]: https://img.shields.io/travis/expressjs/express/master.svg?label=linux
[travis-url]: https://travis-ci.org/expressjs/express

[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/express/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/express

[coveralls-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master

[gratipay-image-visionmedia]: https://img.shields.io/gratipay/visionmedia.svg
[gratipay-url-visionmedia]: https://gratipay.com/visionmedia/
[gratipay-image-dougwilson]: https://img.shields.io/gratipay/dougwilson.svg
[gratipay-url-dougwilson]: https://gratipay.com/dougwilson/