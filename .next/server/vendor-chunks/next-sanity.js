"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/next-sanity";
exports.ids = ["vendor-chunks/next-sanity"];
exports.modules = {

/***/ "(rsc)/./node_modules/next-sanity/dist/client.js":
/*!*************************************************!*\
  !*** ./node_modules/next-sanity/dist/client.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient)\n/* harmony export */ });\n/* harmony import */ var _sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/preview-kit/client */ \"(rsc)/./node_modules/@sanity/preview-kit/dist/client.js\");\n\n\nfunction createClient(config) {\n    let { // eslint-disable-next-line prefer-const, no-process-env\n    studioUrl = process.env.NEXT_PUBLIC_SANITY_STUDIO_URL, encodeSourceMap = studioUrl ? \"auto\" : false } = config;\n    if (encodeSourceMap === \"auto\" && process.env.NEXT_PUBLIC_VERCEL_ENV === \"preview\") {\n        encodeSourceMap = true;\n    }\n    return (0,_sanity_preview_kit_client__WEBPACK_IMPORTED_MODULE_0__.createClient)({\n        ...config,\n        studioUrl,\n        encodeSourceMap\n    });\n}\n //# sourceMappingURL=client.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC1zYW5pdHkvZGlzdC9jbGllbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUM0RTtBQUM1RSxTQUFTQSxhQUFhRSxNQUFNO0lBQzFCLElBQUksRUFDRix3REFBd0Q7SUFDeERDLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MsNkJBQTZCLEVBQ3JEQyxrQkFBa0JKLFlBQVksU0FBUyxLQUFLLEVBQzdDLEdBQUdEO0lBQ0osSUFBSUssb0JBQW9CLFVBQVVILFFBQVFDLEdBQUcsQ0FBQ0csc0JBQXNCLEtBQUssV0FBVztRQUNsRkQsa0JBQWtCO0lBQ3BCO0lBQ0EsT0FBT04sd0VBQWNBLENBQUM7UUFDcEIsR0FBR0MsTUFBTTtRQUNUQztRQUNBSTtJQUNGO0FBQ0Y7QUFDd0IsQ0FDeEIsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyeS5pbmZvLy4vbm9kZV9tb2R1bGVzL25leHQtc2FuaXR5L2Rpc3QvY2xpZW50LmpzP2Y1NDEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IHsgY3JlYXRlQ2xpZW50IGFzIGNyZWF0ZUNsaWVudCQxIH0gZnJvbSAnQHNhbml0eS9wcmV2aWV3LWtpdC9jbGllbnQnO1xuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KGNvbmZpZykge1xuICBsZXQge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3QsIG5vLXByb2Nlc3MtZW52XG4gICAgc3R1ZGlvVXJsID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1NUVURJT19VUkwsXG4gICAgZW5jb2RlU291cmNlTWFwID0gc3R1ZGlvVXJsID8gXCJhdXRvXCIgOiBmYWxzZVxuICB9ID0gY29uZmlnO1xuICBpZiAoZW5jb2RlU291cmNlTWFwID09PSBcImF1dG9cIiAmJiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WRVJDRUxfRU5WID09PSBcInByZXZpZXdcIikge1xuICAgIGVuY29kZVNvdXJjZU1hcCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUNsaWVudCQxKHtcbiAgICAuLi5jb25maWcsXG4gICAgc3R1ZGlvVXJsLFxuICAgIGVuY29kZVNvdXJjZU1hcFxuICB9KTtcbn1cbmV4cG9ydCB7IGNyZWF0ZUNsaWVudCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpZW50LmpzLm1hcFxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImNyZWF0ZUNsaWVudCQxIiwiY29uZmlnIiwic3R1ZGlvVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NBTklUWV9TVFVESU9fVVJMIiwiZW5jb2RlU291cmNlTWFwIiwiTkVYVF9QVUJMSUNfVkVSQ0VMX0VOViJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next-sanity/dist/client.js\n");

/***/ })

};
;