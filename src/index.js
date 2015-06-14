var isNullOrUndefined = require("core.is_null_or_undefined"),
    isString = require("core.is_string");

module.exports = __toString;

function __toString(value) {

    if (isString(value)) {

        return value;

    } else if (isNullOrUndefined(value)) {

        return "";

    } else {

        return "" + value;

    }
}
