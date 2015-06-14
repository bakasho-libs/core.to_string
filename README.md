[![Build Status](https://travis-ci.org/bakasho-libs/core.to_string.svg?branch=master)](https://travis-ci.org/bakasho-libs/core.to_string)

## core.toString

Convert a value to its string version

```javascript

var toStr = require("core.to_string");

var x = {};
    x.toString = function() { 
      return "x";
    };

toStr("foo"); // returns "foo"
toStr(null);  // returns ""
toStr(x); // returns "x"

```
