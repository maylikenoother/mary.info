"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/nano-pubsub";
exports.ids = ["vendor-chunks/nano-pubsub"];
exports.modules = {

/***/ "(ssr)/./node_modules/nano-pubsub/dist/esm/index.js":
/*!****************************************************!*\
  !*** ./node_modules/nano-pubsub/dist/esm/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createPubSub)\n/* harmony export */ });\nfunction createPubSub() {\n    var subscribers = Object.create(null);\n    var nextId = 0;\n    function subscribe(subscriber) {\n        var id = nextId++;\n        subscribers[id] = subscriber;\n        return function unsubscribe() {\n            delete subscribers[id];\n        };\n    }\n    function publish(event) {\n        for(var id in subscribers){\n            subscribers[id](event);\n        }\n    }\n    return {\n        publish: publish,\n        subscribe: subscribe\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbmFuby1wdWJzdWIvZGlzdC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBO0lBQ3BCLElBQUlDLGNBQWNDLE9BQU9DLE1BQU0sQ0FBQztJQUNoQyxJQUFJQyxTQUFTO0lBQ2IsU0FBU0MsVUFBVUMsVUFBVTtRQUN6QixJQUFJQyxLQUFLSDtRQUNUSCxXQUFXLENBQUNNLEdBQUcsR0FBR0Q7UUFDbEIsT0FBTyxTQUFTRTtZQUNaLE9BQU9QLFdBQVcsQ0FBQ00sR0FBRztRQUMxQjtJQUNKO0lBQ0EsU0FBU0UsUUFBUUMsS0FBSztRQUNsQixJQUFLLElBQUlILE1BQU1OLFlBQWE7WUFDeEJBLFdBQVcsQ0FBQ00sR0FBRyxDQUFDRztRQUNwQjtJQUNKO0lBQ0EsT0FBTztRQUNIRCxTQUFTQTtRQUNUSixXQUFXQTtJQUNmO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJ5LmluZm8vLi9ub2RlX21vZHVsZXMvbmFuby1wdWJzdWIvZGlzdC9lc20vaW5kZXguanM/MjVkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQdWJTdWIoKSB7XG4gICAgdmFyIHN1YnNjcmliZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgbmV4dElkID0gMDtcbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUoc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgaWQgPSBuZXh0SWQrKztcbiAgICAgICAgc3Vic2NyaWJlcnNbaWRdID0gc3Vic2NyaWJlcjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKCkge1xuICAgICAgICAgICAgZGVsZXRlIHN1YnNjcmliZXJzW2lkXTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHVibGlzaChldmVudCkge1xuICAgICAgICBmb3IgKHZhciBpZCBpbiBzdWJzY3JpYmVycykge1xuICAgICAgICAgICAgc3Vic2NyaWJlcnNbaWRdKGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwdWJsaXNoOiBwdWJsaXNoLFxuICAgICAgICBzdWJzY3JpYmU6IHN1YnNjcmliZSxcbiAgICB9O1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZVB1YlN1YiIsInN1YnNjcmliZXJzIiwiT2JqZWN0IiwiY3JlYXRlIiwibmV4dElkIiwic3Vic2NyaWJlIiwic3Vic2NyaWJlciIsImlkIiwidW5zdWJzY3JpYmUiLCJwdWJsaXNoIiwiZXZlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/nano-pubsub/dist/esm/index.js\n");

/***/ })

};
;