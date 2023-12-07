"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/groq";
exports.ids = ["vendor-chunks/groq"];
exports.modules = {

/***/ "(rsc)/./node_modules/groq/lib/groq.js":
/*!***************************************!*\
  !*** ./node_modules/groq/lib/groq.js ***!
  \***************************************/
/***/ ((module) => {

eval("\nfunction groq(strings) {\n    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){\n        keys[_key - 1] = arguments[_key];\n    }\n    const lastIndex = strings.length - 1;\n    return strings.slice(0, lastIndex).reduce((acc, str, i)=>{\n        return acc + str + keys[i];\n    }, \"\") + strings[lastIndex];\n}\nmodule.exports = groq; //# sourceMappingURL=groq.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZ3JvcS9saWIvZ3JvcS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLFNBQVNBLEtBQUtDLE9BQU87SUFDbkIsSUFBSyxJQUFJQyxPQUFPQyxVQUFVQyxNQUFNLEVBQUVDLE9BQU8sSUFBSUMsTUFBTUosT0FBTyxJQUFJQSxPQUFPLElBQUksSUFBSUssT0FBTyxHQUFHQSxPQUFPTCxNQUFNSyxPQUFRO1FBQzFHRixJQUFJLENBQUNFLE9BQU8sRUFBRSxHQUFHSixTQUFTLENBQUNJLEtBQUs7SUFDbEM7SUFDQSxNQUFNQyxZQUFZUCxRQUFRRyxNQUFNLEdBQUc7SUFDbkMsT0FBT0gsUUFBUVEsS0FBSyxDQUFDLEdBQUdELFdBQVdFLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxLQUFLQztRQUNuRCxPQUFPRixNQUFNQyxNQUFNUCxJQUFJLENBQUNRLEVBQUU7SUFDNUIsR0FBRyxNQUFNWixPQUFPLENBQUNPLFVBQVU7QUFDN0I7QUFDQU0sT0FBT0MsT0FBTyxHQUFHZixNQUNqQixnQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJ5LmluZm8vLi9ub2RlX21vZHVsZXMvZ3JvcS9saWIvZ3JvcS5qcz9iMWVhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ3JvcShzdHJpbmdzKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBrZXlzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBrZXlzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuICBjb25zdCBsYXN0SW5kZXggPSBzdHJpbmdzLmxlbmd0aCAtIDE7XG4gIHJldHVybiBzdHJpbmdzLnNsaWNlKDAsIGxhc3RJbmRleCkucmVkdWNlKChhY2MsIHN0ciwgaSkgPT4ge1xuICAgIHJldHVybiBhY2MgKyBzdHIgKyBrZXlzW2ldO1xuICB9LCBcIlwiKSArIHN0cmluZ3NbbGFzdEluZGV4XTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZ3JvcTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdyb3EuanMubWFwXG4iXSwibmFtZXMiOlsiZ3JvcSIsInN0cmluZ3MiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwia2V5cyIsIkFycmF5IiwiX2tleSIsImxhc3RJbmRleCIsInNsaWNlIiwicmVkdWNlIiwiYWNjIiwic3RyIiwiaSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/groq/lib/groq.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/groq/lib/groq.cjs.mjs":
/*!********************************************!*\
  !*** ./node_modules/groq/lib/groq.cjs.mjs ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _groq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./groq.js */ \"(rsc)/./node_modules/groq/lib/groq.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_groq_js__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZ3JvcS9saWIvZ3JvcS5janMubWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRCO0FBRTVCLGlFQUFlQSxxQ0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcnkuaW5mby8uL25vZGVfbW9kdWxlcy9ncm9xL2xpYi9ncm9xLmNqcy5tanM/YTk3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2pzIGZyb20gJy4vZ3JvcS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNqcztcbiJdLCJuYW1lcyI6WyJjanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/groq/lib/groq.cjs.mjs\n");

/***/ })

};
;