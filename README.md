# co-bcrypt

[bcrypt](https://github.com/ncb000gt/node.bcrypt.js/) wrapper for [co](https://github.com/visionmedia/co)

[![NPM][npm]](https://npmjs.org/package/co-bcrypt)

Since **1.0.0**, `co-bcrypt` is using [`bcrypt`](https://github.com/ncb000gt/node.bcrypt.js/) instead of [`bcryptjs`](https://github.com/dcodeIO/bcrypt.js) (a wrapper for bcryptjs: [`co-bcryptjs`](https://github.com/rkusa/co-bcryptjs)).

## Usage

```js
var salt = yield bcrypt.genSalt(10)
var hash = yield bcrypt.hash('B4c0/\/', salt)

if (yield bcrypt.compare('B4c0/\/', hash)) {
  ...
}
```

## MIT License

Copyright (c) 2014 Markus Ast

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[npm]: http://img.shields.io/npm/v/co-bcrypt.svg?style=flat-square