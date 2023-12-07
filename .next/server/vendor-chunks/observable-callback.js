"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/observable-callback";
exports.ids = ["vendor-chunks/observable-callback"];
exports.modules = {

/***/ "(ssr)/./node_modules/observable-callback/dist/esm/observableCallback.js":
/*!*************************************************************************!*\
  !*** ./node_modules/observable-callback/dist/esm/observableCallback.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   observableCallback: () => (/* binding */ observableCallback)\n/* harmony export */ });\n/* harmony import */ var _barrel_optimize_names_Subject_rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! __barrel_optimize__?names=Subject!=!rxjs */ \"(ssr)/./node_modules/rxjs/dist/esm5/internal/Subject.js\");\n\nvar pass = function(input$) {\n    return input$;\n};\nfunction observableCallback(operator) {\n    if (operator === void 0) {\n        operator = pass;\n    }\n    var subject = new _barrel_optimize_names_Subject_rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();\n    return [\n        subject.pipe(operator),\n        function(arg) {\n            return subject.next(arg);\n        }\n    ];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb2JzZXJ2YWJsZS1jYWxsYmFjay9kaXN0L2VzbS9vYnNlcnZhYmxlQ2FsbGJhY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0I7QUFDL0IsSUFBSUMsT0FBTyxTQUFVQyxNQUFNO0lBQUksT0FBT0E7QUFBUTtBQUN2QyxTQUFTQyxtQkFBbUJDLFFBQVE7SUFDdkMsSUFBSUEsYUFBYSxLQUFLLEdBQUc7UUFBRUEsV0FBV0g7SUFBTTtJQUM1QyxJQUFJSSxVQUFVLElBQUlMLHdFQUFPQTtJQUN6QixPQUFPO1FBQUNLLFFBQVFDLElBQUksQ0FBQ0Y7UUFBVyxTQUFVRyxHQUFHO1lBQUksT0FBT0YsUUFBUUcsSUFBSSxDQUFDRDtRQUFNO0tBQUU7QUFDakYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJ5LmluZm8vLi9ub2RlX21vZHVsZXMvb2JzZXJ2YWJsZS1jYWxsYmFjay9kaXN0L2VzbS9vYnNlcnZhYmxlQ2FsbGJhY2suanM/NTliMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcbnZhciBwYXNzID0gZnVuY3Rpb24gKGlucHV0JCkgeyByZXR1cm4gaW5wdXQkOyB9O1xuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmFibGVDYWxsYmFjayhvcGVyYXRvcikge1xuICAgIGlmIChvcGVyYXRvciA9PT0gdm9pZCAwKSB7IG9wZXJhdG9yID0gcGFzczsgfVxuICAgIHZhciBzdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcbiAgICByZXR1cm4gW3N1YmplY3QucGlwZShvcGVyYXRvciksIGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIHN1YmplY3QubmV4dChhcmcpOyB9XTtcbn1cbiJdLCJuYW1lcyI6WyJTdWJqZWN0IiwicGFzcyIsImlucHV0JCIsIm9ic2VydmFibGVDYWxsYmFjayIsIm9wZXJhdG9yIiwic3ViamVjdCIsInBpcGUiLCJhcmciLCJuZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/observable-callback/dist/esm/observableCallback.js\n");

/***/ })

};
;