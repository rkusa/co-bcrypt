# co-bcrypt

Wrap bcrypt with generator goodness.

We can wrap modules with [bcrypt](https://www.npmjs.org/package/bcrypt) compatible APIs, for example:

- [nan-bcrypt](https://www.npmjs.org/package/nan-bcrypt)
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js)

## Install

```
$ npm install co-bcrypt
```

## Setup

Call `wrap()` on bcrypt module instances to make them generator friendly:

```js
// using nan-ified bcrypt (requires node 0.11.13)
var module = require ('nan-bcrypt');

// or the pure js version 
// var module = require ('bcryptjs');

var wrap = require ('co-bcrypt');
var bcrypt = wrap(module);

```

## Example

Simple example:

```js	
// inside co
co(function * (){
	var salt = yield bcrypt.genSalt();
	var hash = yield bcrypt.hash('tobi', salt);
	var compared = yield bcrypt.compare('tobi', hash);
	console.log (salt, hash, compared);
})();
```

## Test

clone the repo, then:

```
$ cd co-bcrypt
$ npm install 
$ npm test
```

## MIT License

Copyright (c) 2014 Markus Ast

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.