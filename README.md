## Introduction

Loopasync is necessary for async iteration over any collection. **Supported in `Node` as well as in browsers.**

#### **Use it when you have big data and you don't want to block event loop for a long time!**

![](https://2.bp.blogspot.com/-_-oILtOwdFc/T50Bt4Jw0hI/AAAAAAAAADk/IC2cKyC42gA/s1600/animation.gif)


## Install

```sh
npm install loopasync --save
```

Node.js

```js
// ES6 modules
import loopasync from 'loopasync';

// CommonJS modules
const loopasync = require('loopasync');
```

## API

```js
/*
  @param collection - collection for iteration
  @param iteratee - iterates over elements of collection and invokes iteratee for each element and index as a second param
  @param parts - number of parts collection will be split in (default will be calculated for you)
*/
loopasync(collection, iteratee[, parts]);
```

## Usage

```js
const loopasync = require('loopasync');

function testLoopasync() {
  console.log('start');

  const collection = [1, 2, 3, 4];
  const iteratee = console.log;
  const parts = 2;

  loopasync(collection, iteratee, parts);

  console.log('finish');
}

testLoopasync();

/*
// will print:
start
finish
1
2
3
4
*/
```

### Contribution

Feel free to contribute
