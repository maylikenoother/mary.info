"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-random-values-esm";
exports.ids = ["vendor-chunks/get-random-values-esm"];
exports.modules = {

/***/ "(ssr)/./node_modules/get-random-values-esm/index.cjs":
/*!******************************************************!*\
  !*** ./node_modules/get-random-values-esm/index.cjs ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst { webcrypto } = __webpack_require__(/*! crypto */ \"crypto\");\n// node v15 and later adds support for WebCrypto, so we load it using a conditional export that is only supported by v14 and later\nmodule.exports = typeof webcrypto === \"undefined\" ? __webpack_require__(/*! get-random-values */ \"(ssr)/./node_modules/get-random-values/index.js\") : function getRandomValues(typedArray) {\n    return webcrypto.getRandomValues(typedArray);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LXJhbmRvbS12YWx1ZXMtZXNtL2luZGV4LmNqcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxFQUFFQSxTQUFTLEVBQUUsR0FBR0MsbUJBQU9BLENBQUM7QUFFOUIsa0lBQWtJO0FBQ2xJQyxPQUFPQyxPQUFPLEdBQ1osT0FBT0gsY0FBYyxjQUNqQkMsbUJBQU9BLENBQUMsOEVBQ1IsU0FBU0csZ0JBQWdCQyxVQUFVO0lBQ2pDLE9BQU9MLFVBQVVJLGVBQWUsQ0FBQ0M7QUFDbkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJ5LmluZm8vLi9ub2RlX21vZHVsZXMvZ2V0LXJhbmRvbS12YWx1ZXMtZXNtL2luZGV4LmNqcz81ZDdkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgd2ViY3J5cHRvIH0gPSByZXF1aXJlKCdjcnlwdG8nKVxuXG4vLyBub2RlIHYxNSBhbmQgbGF0ZXIgYWRkcyBzdXBwb3J0IGZvciBXZWJDcnlwdG8sIHNvIHdlIGxvYWQgaXQgdXNpbmcgYSBjb25kaXRpb25hbCBleHBvcnQgdGhhdCBpcyBvbmx5IHN1cHBvcnRlZCBieSB2MTQgYW5kIGxhdGVyXG5tb2R1bGUuZXhwb3J0cyA9XG4gIHR5cGVvZiB3ZWJjcnlwdG8gPT09ICd1bmRlZmluZWQnXG4gICAgPyByZXF1aXJlKCdnZXQtcmFuZG9tLXZhbHVlcycpXG4gICAgOiBmdW5jdGlvbiBnZXRSYW5kb21WYWx1ZXModHlwZWRBcnJheSkge1xuICAgICAgICByZXR1cm4gd2ViY3J5cHRvLmdldFJhbmRvbVZhbHVlcyh0eXBlZEFycmF5KVxuICAgICAgfVxuIl0sIm5hbWVzIjpbIndlYmNyeXB0byIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0UmFuZG9tVmFsdWVzIiwidHlwZWRBcnJheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-random-values-esm/index.cjs\n");

/***/ })

};
;