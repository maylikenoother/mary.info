"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/parse-headers";
exports.ids = ["vendor-chunks/parse-headers"];
exports.modules = {

/***/ "(rsc)/./node_modules/parse-headers/parse-headers.js":
/*!*****************************************************!*\
  !*** ./node_modules/parse-headers/parse-headers.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\nvar trim = function(string) {\n    return string.replace(/^\\s+|\\s+$/g, \"\");\n}, isArray = function(arg) {\n    return Object.prototype.toString.call(arg) === \"[object Array]\";\n};\nmodule.exports = function(headers) {\n    if (!headers) return {};\n    var result = {};\n    var headersArr = trim(headers).split(\"\\n\");\n    for(var i = 0; i < headersArr.length; i++){\n        var row = headersArr[i];\n        var index = row.indexOf(\":\"), key = trim(row.slice(0, index)).toLowerCase(), value = trim(row.slice(index + 1));\n        if (typeof result[key] === \"undefined\") {\n            result[key] = value;\n        } else if (isArray(result[key])) {\n            result[key].push(value);\n        } else {\n            result[key] = [\n                result[key],\n                value\n            ];\n        }\n    }\n    return result;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcGFyc2UtaGVhZGVycy9wYXJzZS1oZWFkZXJzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJQSxPQUFPLFNBQVNDLE1BQU07SUFDeEIsT0FBT0EsT0FBT0MsT0FBTyxDQUFDLGNBQWM7QUFDdEMsR0FDSUMsVUFBVSxTQUFTQyxHQUFHO0lBQ3BCLE9BQU9DLE9BQU9DLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUNKLFNBQVM7QUFDakQ7QUFFSkssT0FBT0MsT0FBTyxHQUFHLFNBQVVDLE9BQU87SUFDaEMsSUFBSSxDQUFDQSxTQUNILE9BQU8sQ0FBQztJQUVWLElBQUlDLFNBQVMsQ0FBQztJQUVkLElBQUlDLGFBQWFiLEtBQUtXLFNBQVNHLEtBQUssQ0FBQztJQUVyQyxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUYsV0FBV0csTUFBTSxFQUFFRCxJQUFLO1FBQzFDLElBQUlFLE1BQU1KLFVBQVUsQ0FBQ0UsRUFBRTtRQUN2QixJQUFJRyxRQUFRRCxJQUFJRSxPQUFPLENBQUMsTUFDdEJDLE1BQU1wQixLQUFLaUIsSUFBSUksS0FBSyxDQUFDLEdBQUdILFFBQVFJLFdBQVcsSUFDM0NDLFFBQVF2QixLQUFLaUIsSUFBSUksS0FBSyxDQUFDSCxRQUFRO1FBRWpDLElBQUksT0FBT04sTUFBTSxDQUFDUSxJQUFJLEtBQU0sYUFBYTtZQUN2Q1IsTUFBTSxDQUFDUSxJQUFJLEdBQUdHO1FBQ2hCLE9BQU8sSUFBSXBCLFFBQVFTLE1BQU0sQ0FBQ1EsSUFBSSxHQUFHO1lBQy9CUixNQUFNLENBQUNRLElBQUksQ0FBQ0ksSUFBSSxDQUFDRDtRQUNuQixPQUFPO1lBQ0xYLE1BQU0sQ0FBQ1EsSUFBSSxHQUFHO2dCQUFFUixNQUFNLENBQUNRLElBQUk7Z0JBQUVHO2FBQU87UUFDdEM7SUFDRjtJQUVBLE9BQU9YO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJ5LmluZm8vLi9ub2RlX21vZHVsZXMvcGFyc2UtaGVhZGVycy9wYXJzZS1oZWFkZXJzLmpzPzFlMGIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIHRyaW0gPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJyk7XG59XG4gICwgaXNBcnJheSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmcpID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaGVhZGVycykge1xuICBpZiAoIWhlYWRlcnMpXG4gICAgcmV0dXJuIHt9XG5cbiAgdmFyIHJlc3VsdCA9IHt9XG5cbiAgdmFyIGhlYWRlcnNBcnIgPSB0cmltKGhlYWRlcnMpLnNwbGl0KCdcXG4nKVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaGVhZGVyc0Fyci5sZW5ndGg7IGkrKykge1xuICAgIHZhciByb3cgPSBoZWFkZXJzQXJyW2ldXG4gICAgdmFyIGluZGV4ID0gcm93LmluZGV4T2YoJzonKVxuICAgICwga2V5ID0gdHJpbShyb3cuc2xpY2UoMCwgaW5kZXgpKS50b0xvd2VyQ2FzZSgpXG4gICAgLCB2YWx1ZSA9IHRyaW0ocm93LnNsaWNlKGluZGV4ICsgMSkpXG5cbiAgICBpZiAodHlwZW9mKHJlc3VsdFtrZXldKSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkocmVzdWx0W2tleV0pKSB7XG4gICAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IFsgcmVzdWx0W2tleV0sIHZhbHVlIF1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iXSwibmFtZXMiOlsidHJpbSIsInN0cmluZyIsInJlcGxhY2UiLCJpc0FycmF5IiwiYXJnIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwibW9kdWxlIiwiZXhwb3J0cyIsImhlYWRlcnMiLCJyZXN1bHQiLCJoZWFkZXJzQXJyIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwicm93IiwiaW5kZXgiLCJpbmRleE9mIiwia2V5Iiwic2xpY2UiLCJ0b0xvd2VyQ2FzZSIsInZhbHVlIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/parse-headers/parse-headers.js\n");

/***/ })

};
;