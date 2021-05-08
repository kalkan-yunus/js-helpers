"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showPretty = void 0;
var showPretty = function (obj, log) {
    var result = JSON.stringify(obj, null, 2);
    log == "show" && console.log(result);
    return JSON.stringify(result);
};
exports.showPretty = showPretty;
