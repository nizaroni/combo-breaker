combo-breaker
=============

Break consecutive repetition of a string in Node.js and browsers.


Examples
--------

```js
var comboBreaker = require('combo-breaker'),
    redundant,
    broken
;

redundant = 'I really really really really love pizza.';

broken = comboBreaker(redundant, 'really ');
console.log(broken); // "I really love pizza."

broken = comboBreaker(redundant, 'really ', { keep: 2 });
console.log(broken); // "I really really love pizza."

```


API
---

### comboBreaker(str, combo[, options]) ###

Searches string `str` for consecutive repetitions of `combo` and returns a copy of `str` with the repetitions replaced by a single `combo`. Use `options.keep` (`integer`) to keep more than one (or no) `combo`.


Install
-------

Install with [npm](https://www.npmjs.org/):

```
npm install combo-breaker
```


License
-------

ISC
