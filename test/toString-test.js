var test = require("tape"),
    toStr = require("../src/index");


test("toString", function(t) {

    var x = {};
    x.toString = function() {
        return "x";
    };

    t.equal(toStr("foo"), "foo", "returns string for strings");
    t.equal(toStr(null), "", "returns empty string for null");
    t.equal(toStr(undefined), "", "returns empty string for undefined");
    t.equal(toStr(100), "100", "returns string of number for numbers");
    t.equal(toStr(true), "true", "returns string of bool for booleans");
    t.equal(toStr(NaN), "NaN", "returns string of NaN for NaN");
    t.equal(toStr([1, 2]), "1,2", "returns comma separated string for arrays");
    t.equal(toStr(x), "x", "returns result of .toString() for objects");

    t.end();
});
