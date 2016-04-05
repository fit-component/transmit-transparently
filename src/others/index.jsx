"use strict";
exports.__esModule = true;
exports["default"] = function (defaultProps, props) {
    var defaultPropsKeys = Object.keys(defaultProps);
    var others = {};
    Object.keys(props).forEach(function (key) {
        if (!defaultPropsKeys.includes(key)) {
            others[key] = props[key];
        }
    });
    return others;
};
