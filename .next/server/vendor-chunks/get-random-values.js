"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-random-values";
exports.ids = ["vendor-chunks/get-random-values"];
exports.modules = {

/***/ "(ssr)/./node_modules/get-random-values/index.js":
/*!*************************************************!*\
  !*** ./node_modules/get-random-values/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar window = __webpack_require__(/*! global/window */ \"(ssr)/./node_modules/global/window.js\");\nvar nodeCrypto = __webpack_require__(/*! crypto */ \"crypto\");\nfunction getRandomValues(buf) {\n    if (window.crypto && window.crypto.getRandomValues) {\n        return window.crypto.getRandomValues(buf);\n    }\n    if (typeof window.msCrypto === \"object\" && typeof window.msCrypto.getRandomValues === \"function\") {\n        return window.msCrypto.getRandomValues(buf);\n    }\n    if (nodeCrypto.randomBytes) {\n        if (!(buf instanceof Uint8Array)) {\n            throw new TypeError(\"expected Uint8Array\");\n        }\n        if (buf.length > 65536) {\n            var e = new Error();\n            e.code = 22;\n            e.message = \"Failed to execute 'getRandomValues' on 'Crypto': The \" + \"ArrayBufferView's byte length (\" + buf.length + \") exceeds the \" + \"number of bytes of entropy available via this API (65536).\";\n            e.name = \"QuotaExceededError\";\n            throw e;\n        }\n        var bytes = nodeCrypto.randomBytes(buf.length);\n        buf.set(bytes);\n        return buf;\n    } else {\n        throw new Error(\"No secure random number generator available.\");\n    }\n}\nmodule.exports = getRandomValues;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LXJhbmRvbS12YWx1ZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBLFNBQVNDLG1CQUFPQSxDQUFDO0FBQ3JCLElBQUlDLGFBQWFELG1CQUFPQSxDQUFDO0FBRXpCLFNBQVNFLGdCQUFnQkMsR0FBRztJQUMxQixJQUFJSixPQUFPSyxNQUFNLElBQUlMLE9BQU9LLE1BQU0sQ0FBQ0YsZUFBZSxFQUFFO1FBQ2xELE9BQU9ILE9BQU9LLE1BQU0sQ0FBQ0YsZUFBZSxDQUFDQztJQUN2QztJQUNBLElBQUksT0FBT0osT0FBT00sUUFBUSxLQUFLLFlBQVksT0FBT04sT0FBT00sUUFBUSxDQUFDSCxlQUFlLEtBQUssWUFBWTtRQUNoRyxPQUFPSCxPQUFPTSxRQUFRLENBQUNILGVBQWUsQ0FBQ0M7SUFDekM7SUFDQSxJQUFJRixXQUFXSyxXQUFXLEVBQUU7UUFDMUIsSUFBSSxDQUFFSCxDQUFBQSxlQUFlSSxVQUFTLEdBQUk7WUFDaEMsTUFBTSxJQUFJQyxVQUFVO1FBQ3RCO1FBQ0EsSUFBSUwsSUFBSU0sTUFBTSxHQUFHLE9BQU87WUFDdEIsSUFBSUMsSUFBSSxJQUFJQztZQUNaRCxFQUFFRSxJQUFJLEdBQUc7WUFDVEYsRUFBRUcsT0FBTyxHQUFHLDBEQUNWLG9DQUFxQ1YsSUFBSU0sTUFBTSxHQUFHLG1CQUNsRDtZQUNGQyxFQUFFSSxJQUFJLEdBQUc7WUFDVCxNQUFNSjtRQUNSO1FBQ0EsSUFBSUssUUFBUWQsV0FBV0ssV0FBVyxDQUFDSCxJQUFJTSxNQUFNO1FBQzdDTixJQUFJYSxHQUFHLENBQUNEO1FBQ1IsT0FBT1o7SUFDVCxPQUNLO1FBQ0gsTUFBTSxJQUFJUSxNQUFNO0lBQ2xCO0FBQ0Y7QUFFQU0sT0FBT0MsT0FBTyxHQUFHaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJ5LmluZm8vLi9ub2RlX21vZHVsZXMvZ2V0LXJhbmRvbS12YWx1ZXMvaW5kZXguanM/MWZhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgd2luZG93ID0gcmVxdWlyZSgnZ2xvYmFsL3dpbmRvdycpO1xudmFyIG5vZGVDcnlwdG8gPSByZXF1aXJlKCdjcnlwdG8nKTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tVmFsdWVzKGJ1Zikge1xuICBpZiAod2luZG93LmNyeXB0byAmJiB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgIHJldHVybiB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhidWYpO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygd2luZG93Lm1zQ3J5cHRvLmdldFJhbmRvbVZhbHVlcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB3aW5kb3cubXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGJ1Zik7XG4gIH1cbiAgaWYgKG5vZGVDcnlwdG8ucmFuZG9tQnl0ZXMpIHtcbiAgICBpZiAoIShidWYgaW5zdGFuY2VvZiBVaW50OEFycmF5KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgVWludDhBcnJheScpO1xuICAgIH1cbiAgICBpZiAoYnVmLmxlbmd0aCA+IDY1NTM2KSB7XG4gICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgZS5jb2RlID0gMjI7XG4gICAgICBlLm1lc3NhZ2UgPSAnRmFpbGVkIHRvIGV4ZWN1dGUgXFwnZ2V0UmFuZG9tVmFsdWVzXFwnIG9uIFxcJ0NyeXB0b1xcJzogVGhlICcgK1xuICAgICAgICAnQXJyYXlCdWZmZXJWaWV3XFwncyBieXRlIGxlbmd0aCAoJyArIGJ1Zi5sZW5ndGggKyAnKSBleGNlZWRzIHRoZSAnICtcbiAgICAgICAgJ251bWJlciBvZiBieXRlcyBvZiBlbnRyb3B5IGF2YWlsYWJsZSB2aWEgdGhpcyBBUEkgKDY1NTM2KS4nO1xuICAgICAgZS5uYW1lID0gJ1F1b3RhRXhjZWVkZWRFcnJvcic7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgICB2YXIgYnl0ZXMgPSBub2RlQ3J5cHRvLnJhbmRvbUJ5dGVzKGJ1Zi5sZW5ndGgpO1xuICAgIGJ1Zi5zZXQoYnl0ZXMpO1xuICAgIHJldHVybiBidWY7XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBzZWN1cmUgcmFuZG9tIG51bWJlciBnZW5lcmF0b3IgYXZhaWxhYmxlLicpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmFuZG9tVmFsdWVzO1xuIl0sIm5hbWVzIjpbIndpbmRvdyIsInJlcXVpcmUiLCJub2RlQ3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiYnVmIiwiY3J5cHRvIiwibXNDcnlwdG8iLCJyYW5kb21CeXRlcyIsIlVpbnQ4QXJyYXkiLCJUeXBlRXJyb3IiLCJsZW5ndGgiLCJlIiwiRXJyb3IiLCJjb2RlIiwibWVzc2FnZSIsIm5hbWUiLCJieXRlcyIsInNldCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-random-values/index.js\n");

/***/ })

};
;