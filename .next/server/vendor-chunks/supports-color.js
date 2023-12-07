"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/supports-color";
exports.ids = ["vendor-chunks/supports-color"];
exports.modules = {

/***/ "(rsc)/./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst os = __webpack_require__(/*! os */ \"os\");\nconst tty = __webpack_require__(/*! tty */ \"tty\");\nconst hasFlag = __webpack_require__(/*! has-flag */ \"(rsc)/./node_modules/has-flag/index.js\");\nconst { env } = process;\nlet forceColor;\nif (hasFlag(\"no-color\") || hasFlag(\"no-colors\") || hasFlag(\"color=false\") || hasFlag(\"color=never\")) {\n    forceColor = 0;\n} else if (hasFlag(\"color\") || hasFlag(\"colors\") || hasFlag(\"color=true\") || hasFlag(\"color=always\")) {\n    forceColor = 1;\n}\nif (\"FORCE_COLOR\" in env) {\n    if (env.FORCE_COLOR === \"true\") {\n        forceColor = 1;\n    } else if (env.FORCE_COLOR === \"false\") {\n        forceColor = 0;\n    } else {\n        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);\n    }\n}\nfunction translateLevel(level) {\n    if (level === 0) {\n        return false;\n    }\n    return {\n        level,\n        hasBasic: true,\n        has256: level >= 2,\n        has16m: level >= 3\n    };\n}\nfunction supportsColor(haveStream, streamIsTTY) {\n    if (forceColor === 0) {\n        return 0;\n    }\n    if (hasFlag(\"color=16m\") || hasFlag(\"color=full\") || hasFlag(\"color=truecolor\")) {\n        return 3;\n    }\n    if (hasFlag(\"color=256\")) {\n        return 2;\n    }\n    if (haveStream && !streamIsTTY && forceColor === undefined) {\n        return 0;\n    }\n    const min = forceColor || 0;\n    if (env.TERM === \"dumb\") {\n        return min;\n    }\n    if (process.platform === \"win32\") {\n        // Windows 10 build 10586 is the first Windows release that supports 256 colors.\n        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.\n        const osRelease = os.release().split(\".\");\n        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {\n            return Number(osRelease[2]) >= 14931 ? 3 : 2;\n        }\n        return 1;\n    }\n    if (\"CI\" in env) {\n        if ([\n            \"TRAVIS\",\n            \"CIRCLECI\",\n            \"APPVEYOR\",\n            \"GITLAB_CI\",\n            \"GITHUB_ACTIONS\",\n            \"BUILDKITE\"\n        ].some((sign)=>sign in env) || env.CI_NAME === \"codeship\") {\n            return 1;\n        }\n        return min;\n    }\n    if (\"TEAMCITY_VERSION\" in env) {\n        return /^(9\\.(0*[1-9]\\d*)\\.|\\d{2,}\\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;\n    }\n    if (env.COLORTERM === \"truecolor\") {\n        return 3;\n    }\n    if (\"TERM_PROGRAM\" in env) {\n        const version = parseInt((env.TERM_PROGRAM_VERSION || \"\").split(\".\")[0], 10);\n        switch(env.TERM_PROGRAM){\n            case \"iTerm.app\":\n                return version >= 3 ? 3 : 2;\n            case \"Apple_Terminal\":\n                return 2;\n        }\n    }\n    if (/-256(color)?$/i.test(env.TERM)) {\n        return 2;\n    }\n    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {\n        return 1;\n    }\n    if (\"COLORTERM\" in env) {\n        return 1;\n    }\n    return min;\n}\nfunction getSupportLevel(stream) {\n    const level = supportsColor(stream, stream && stream.isTTY);\n    return translateLevel(level);\n}\nmodule.exports = {\n    supportsColor: getSupportLevel,\n    stdout: translateLevel(supportsColor(true, tty.isatty(1))),\n    stderr: translateLevel(supportsColor(true, tty.isatty(2)))\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxLQUFLQyxtQkFBT0EsQ0FBQztBQUNuQixNQUFNQyxNQUFNRCxtQkFBT0EsQ0FBQztBQUNwQixNQUFNRSxVQUFVRixtQkFBT0EsQ0FBQztBQUV4QixNQUFNLEVBQUNHLEdBQUcsRUFBQyxHQUFHQztBQUVkLElBQUlDO0FBQ0osSUFBSUgsUUFBUSxlQUNYQSxRQUFRLGdCQUNSQSxRQUFRLGtCQUNSQSxRQUFRLGdCQUFnQjtJQUN4QkcsYUFBYTtBQUNkLE9BQU8sSUFBSUgsUUFBUSxZQUNsQkEsUUFBUSxhQUNSQSxRQUFRLGlCQUNSQSxRQUFRLGlCQUFpQjtJQUN6QkcsYUFBYTtBQUNkO0FBRUEsSUFBSSxpQkFBaUJGLEtBQUs7SUFDekIsSUFBSUEsSUFBSUcsV0FBVyxLQUFLLFFBQVE7UUFDL0JELGFBQWE7SUFDZCxPQUFPLElBQUlGLElBQUlHLFdBQVcsS0FBSyxTQUFTO1FBQ3ZDRCxhQUFhO0lBQ2QsT0FBTztRQUNOQSxhQUFhRixJQUFJRyxXQUFXLENBQUNDLE1BQU0sS0FBSyxJQUFJLElBQUlDLEtBQUtDLEdBQUcsQ0FBQ0MsU0FBU1AsSUFBSUcsV0FBVyxFQUFFLEtBQUs7SUFDekY7QUFDRDtBQUVBLFNBQVNLLGVBQWVDLEtBQUs7SUFDNUIsSUFBSUEsVUFBVSxHQUFHO1FBQ2hCLE9BQU87SUFDUjtJQUVBLE9BQU87UUFDTkE7UUFDQUMsVUFBVTtRQUNWQyxRQUFRRixTQUFTO1FBQ2pCRyxRQUFRSCxTQUFTO0lBQ2xCO0FBQ0Q7QUFFQSxTQUFTSSxjQUFjQyxVQUFVLEVBQUVDLFdBQVc7SUFDN0MsSUFBSWIsZUFBZSxHQUFHO1FBQ3JCLE9BQU87SUFDUjtJQUVBLElBQUlILFFBQVEsZ0JBQ1hBLFFBQVEsaUJBQ1JBLFFBQVEsb0JBQW9CO1FBQzVCLE9BQU87SUFDUjtJQUVBLElBQUlBLFFBQVEsY0FBYztRQUN6QixPQUFPO0lBQ1I7SUFFQSxJQUFJZSxjQUFjLENBQUNDLGVBQWViLGVBQWVjLFdBQVc7UUFDM0QsT0FBTztJQUNSO0lBRUEsTUFBTVYsTUFBTUosY0FBYztJQUUxQixJQUFJRixJQUFJaUIsSUFBSSxLQUFLLFFBQVE7UUFDeEIsT0FBT1g7SUFDUjtJQUVBLElBQUlMLFFBQVFpQixRQUFRLEtBQUssU0FBUztRQUNqQyxnRkFBZ0Y7UUFDaEYsMkVBQTJFO1FBQzNFLE1BQU1DLFlBQVl2QixHQUFHd0IsT0FBTyxHQUFHQyxLQUFLLENBQUM7UUFDckMsSUFDQ0MsT0FBT0gsU0FBUyxDQUFDLEVBQUUsS0FBSyxNQUN4QkcsT0FBT0gsU0FBUyxDQUFDLEVBQUUsS0FBSyxPQUN2QjtZQUNELE9BQU9HLE9BQU9ILFNBQVMsQ0FBQyxFQUFFLEtBQUssUUFBUSxJQUFJO1FBQzVDO1FBRUEsT0FBTztJQUNSO0lBRUEsSUFBSSxRQUFRbkIsS0FBSztRQUNoQixJQUFJO1lBQUM7WUFBVTtZQUFZO1lBQVk7WUFBYTtZQUFrQjtTQUFZLENBQUN1QixJQUFJLENBQUNDLENBQUFBLE9BQVFBLFFBQVF4QixRQUFRQSxJQUFJeUIsT0FBTyxLQUFLLFlBQVk7WUFDM0ksT0FBTztRQUNSO1FBRUEsT0FBT25CO0lBQ1I7SUFFQSxJQUFJLHNCQUFzQk4sS0FBSztRQUM5QixPQUFPLGdDQUFnQzBCLElBQUksQ0FBQzFCLElBQUkyQixnQkFBZ0IsSUFBSSxJQUFJO0lBQ3pFO0lBRUEsSUFBSTNCLElBQUk0QixTQUFTLEtBQUssYUFBYTtRQUNsQyxPQUFPO0lBQ1I7SUFFQSxJQUFJLGtCQUFrQjVCLEtBQUs7UUFDMUIsTUFBTTZCLFVBQVV0QixTQUFTLENBQUNQLElBQUk4QixvQkFBb0IsSUFBSSxFQUFDLEVBQUdULEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1FBRXpFLE9BQVFyQixJQUFJK0IsWUFBWTtZQUN2QixLQUFLO2dCQUNKLE9BQU9GLFdBQVcsSUFBSSxJQUFJO1lBQzNCLEtBQUs7Z0JBQ0osT0FBTztRQUVUO0lBQ0Q7SUFFQSxJQUFJLGlCQUFpQkgsSUFBSSxDQUFDMUIsSUFBSWlCLElBQUksR0FBRztRQUNwQyxPQUFPO0lBQ1I7SUFFQSxJQUFJLDhEQUE4RFMsSUFBSSxDQUFDMUIsSUFBSWlCLElBQUksR0FBRztRQUNqRixPQUFPO0lBQ1I7SUFFQSxJQUFJLGVBQWVqQixLQUFLO1FBQ3ZCLE9BQU87SUFDUjtJQUVBLE9BQU9NO0FBQ1I7QUFFQSxTQUFTMEIsZ0JBQWdCQyxNQUFNO0lBQzlCLE1BQU14QixRQUFRSSxjQUFjb0IsUUFBUUEsVUFBVUEsT0FBT0MsS0FBSztJQUMxRCxPQUFPMUIsZUFBZUM7QUFDdkI7QUFFQTBCLE9BQU9DLE9BQU8sR0FBRztJQUNoQnZCLGVBQWVtQjtJQUNmSyxRQUFRN0IsZUFBZUssY0FBYyxNQUFNZixJQUFJd0MsTUFBTSxDQUFDO0lBQ3REQyxRQUFRL0IsZUFBZUssY0FBYyxNQUFNZixJQUFJd0MsTUFBTSxDQUFDO0FBQ3ZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyeS5pbmZvLy4vbm9kZV9tb2R1bGVzL3N1cHBvcnRzLWNvbG9yL2luZGV4LmpzPzdiYjkiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpO1xuY29uc3QgdHR5ID0gcmVxdWlyZSgndHR5Jyk7XG5jb25zdCBoYXNGbGFnID0gcmVxdWlyZSgnaGFzLWZsYWcnKTtcblxuY29uc3Qge2Vudn0gPSBwcm9jZXNzO1xuXG5sZXQgZm9yY2VDb2xvcjtcbmlmIChoYXNGbGFnKCduby1jb2xvcicpIHx8XG5cdGhhc0ZsYWcoJ25vLWNvbG9ycycpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPWZhbHNlJykgfHxcblx0aGFzRmxhZygnY29sb3I9bmV2ZXInKSkge1xuXHRmb3JjZUNvbG9yID0gMDtcbn0gZWxzZSBpZiAoaGFzRmxhZygnY29sb3InKSB8fFxuXHRoYXNGbGFnKCdjb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj10cnVlJykgfHxcblx0aGFzRmxhZygnY29sb3I9YWx3YXlzJykpIHtcblx0Zm9yY2VDb2xvciA9IDE7XG59XG5cbmlmICgnRk9SQ0VfQ09MT1InIGluIGVudikge1xuXHRpZiAoZW52LkZPUkNFX0NPTE9SID09PSAndHJ1ZScpIHtcblx0XHRmb3JjZUNvbG9yID0gMTtcblx0fSBlbHNlIGlmIChlbnYuRk9SQ0VfQ09MT1IgPT09ICdmYWxzZScpIHtcblx0XHRmb3JjZUNvbG9yID0gMDtcblx0fSBlbHNlIHtcblx0XHRmb3JjZUNvbG9yID0gZW52LkZPUkNFX0NPTE9SLmxlbmd0aCA9PT0gMCA/IDEgOiBNYXRoLm1pbihwYXJzZUludChlbnYuRk9SQ0VfQ09MT1IsIDEwKSwgMyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpIHtcblx0aWYgKGxldmVsID09PSAwKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRsZXZlbCxcblx0XHRoYXNCYXNpYzogdHJ1ZSxcblx0XHRoYXMyNTY6IGxldmVsID49IDIsXG5cdFx0aGFzMTZtOiBsZXZlbCA+PSAzXG5cdH07XG59XG5cbmZ1bmN0aW9uIHN1cHBvcnRzQ29sb3IoaGF2ZVN0cmVhbSwgc3RyZWFtSXNUVFkpIHtcblx0aWYgKGZvcmNlQ29sb3IgPT09IDApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0xNm0nKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPWZ1bGwnKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPXRydWVjb2xvcicpKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MjU2JykpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmIChoYXZlU3RyZWFtICYmICFzdHJlYW1Jc1RUWSAmJiBmb3JjZUNvbG9yID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGNvbnN0IG1pbiA9IGZvcmNlQ29sb3IgfHwgMDtcblxuXHRpZiAoZW52LlRFUk0gPT09ICdkdW1iJykge1xuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuXHRcdC8vIFdpbmRvd3MgMTAgYnVpbGQgMTA1ODYgaXMgdGhlIGZpcnN0IFdpbmRvd3MgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDI1NiBjb2xvcnMuXG5cdFx0Ly8gV2luZG93cyAxMCBidWlsZCAxNDkzMSBpcyB0aGUgZmlyc3QgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDE2bS9UcnVlQ29sb3IuXG5cdFx0Y29uc3Qgb3NSZWxlYXNlID0gb3MucmVsZWFzZSgpLnNwbGl0KCcuJyk7XG5cdFx0aWYgKFxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVswXSkgPj0gMTAgJiZcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMl0pID49IDEwNTg2XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTQ5MzEgPyAzIDogMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ0knIGluIGVudikge1xuXHRcdGlmIChbJ1RSQVZJUycsICdDSVJDTEVDSScsICdBUFBWRVlPUicsICdHSVRMQUJfQ0knLCAnR0lUSFVCX0FDVElPTlMnLCAnQlVJTERLSVRFJ10uc29tZShzaWduID0+IHNpZ24gaW4gZW52KSB8fCBlbnYuQ0lfTkFNRSA9PT0gJ2NvZGVzaGlwJykge1xuXHRcdFx0cmV0dXJuIDE7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1pbjtcblx0fVxuXG5cdGlmICgnVEVBTUNJVFlfVkVSU0lPTicgaW4gZW52KSB7XG5cdFx0cmV0dXJuIC9eKDlcXC4oMCpbMS05XVxcZCopXFwufFxcZHsyLH1cXC4pLy50ZXN0KGVudi5URUFNQ0lUWV9WRVJTSU9OKSA/IDEgOiAwO1xuXHR9XG5cblx0aWYgKGVudi5DT0xPUlRFUk0gPT09ICd0cnVlY29sb3InKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoJ1RFUk1fUFJPR1JBTScgaW4gZW52KSB7XG5cdFx0Y29uc3QgdmVyc2lvbiA9IHBhcnNlSW50KChlbnYuVEVSTV9QUk9HUkFNX1ZFUlNJT04gfHwgJycpLnNwbGl0KCcuJylbMF0sIDEwKTtcblxuXHRcdHN3aXRjaCAoZW52LlRFUk1fUFJPR1JBTSkge1xuXHRcdFx0Y2FzZSAnaVRlcm0uYXBwJzpcblx0XHRcdFx0cmV0dXJuIHZlcnNpb24gPj0gMyA/IDMgOiAyO1xuXHRcdFx0Y2FzZSAnQXBwbGVfVGVybWluYWwnOlxuXHRcdFx0XHRyZXR1cm4gMjtcblx0XHRcdC8vIE5vIGRlZmF1bHRcblx0XHR9XG5cdH1cblxuXHRpZiAoLy0yNTYoY29sb3IpPyQvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAyO1xuXHR9XG5cblx0aWYgKC9ec2NyZWVufF54dGVybXxednQxMDB8XnZ0MjIwfF5yeHZ0fGNvbG9yfGFuc2l8Y3lnd2lufGxpbnV4L2kudGVzdChlbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ09MT1JURVJNJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdHJldHVybiBtaW47XG59XG5cbmZ1bmN0aW9uIGdldFN1cHBvcnRMZXZlbChzdHJlYW0pIHtcblx0Y29uc3QgbGV2ZWwgPSBzdXBwb3J0c0NvbG9yKHN0cmVhbSwgc3RyZWFtICYmIHN0cmVhbS5pc1RUWSk7XG5cdHJldHVybiB0cmFuc2xhdGVMZXZlbChsZXZlbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRzdXBwb3J0c0NvbG9yOiBnZXRTdXBwb3J0TGV2ZWwsXG5cdHN0ZG91dDogdHJhbnNsYXRlTGV2ZWwoc3VwcG9ydHNDb2xvcih0cnVlLCB0dHkuaXNhdHR5KDEpKSksXG5cdHN0ZGVycjogdHJhbnNsYXRlTGV2ZWwoc3VwcG9ydHNDb2xvcih0cnVlLCB0dHkuaXNhdHR5KDIpKSlcbn07XG4iXSwibmFtZXMiOlsib3MiLCJyZXF1aXJlIiwidHR5IiwiaGFzRmxhZyIsImVudiIsInByb2Nlc3MiLCJmb3JjZUNvbG9yIiwiRk9SQ0VfQ09MT1IiLCJsZW5ndGgiLCJNYXRoIiwibWluIiwicGFyc2VJbnQiLCJ0cmFuc2xhdGVMZXZlbCIsImxldmVsIiwiaGFzQmFzaWMiLCJoYXMyNTYiLCJoYXMxNm0iLCJzdXBwb3J0c0NvbG9yIiwiaGF2ZVN0cmVhbSIsInN0cmVhbUlzVFRZIiwidW5kZWZpbmVkIiwiVEVSTSIsInBsYXRmb3JtIiwib3NSZWxlYXNlIiwicmVsZWFzZSIsInNwbGl0IiwiTnVtYmVyIiwic29tZSIsInNpZ24iLCJDSV9OQU1FIiwidGVzdCIsIlRFQU1DSVRZX1ZFUlNJT04iLCJDT0xPUlRFUk0iLCJ2ZXJzaW9uIiwiVEVSTV9QUk9HUkFNX1ZFUlNJT04iLCJURVJNX1BST0dSQU0iLCJnZXRTdXBwb3J0TGV2ZWwiLCJzdHJlYW0iLCJpc1RUWSIsIm1vZHVsZSIsImV4cG9ydHMiLCJzdGRvdXQiLCJpc2F0dHkiLCJzdGRlcnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/supports-color/index.js\n");

/***/ })

};
;