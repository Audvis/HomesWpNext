"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[...slug]",{

/***/ "./pages/[...slug].js":
/*!****************************!*\
  !*** ./pages/[...slug].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var components_BlockRenderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/BlockRenderer */ \"./components/BlockRenderer/index.js\");\n/* harmony import */ var components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Page */ \"./components/Page/index.js\");\n/* harmony import */ var utils_cleanAndTransformBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/cleanAndTransformBlocks */ \"./utils/cleanAndTransformBlocks.js\");\n/* harmony import */ var components_MainMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MainMenu */ \"./components/MainMenu/index.js\");\n\n\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4uc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFeUQ7QUFFbEI7QUFDaUM7QUFDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvWy4uLnNsdWddLmpzP2E2MWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCJjbGllbnRcIjtcbmltcG9ydCB7IEJsb2NrUmVuZGVyZXIgfSBmcm9tIFwiY29tcG9uZW50cy9CbG9ja1JlbmRlcmVyXCI7XG5pbXBvcnQgeyBnZXRQYWdlU3RhdGljUHJvcHMgfSBmcm9tIFwidXRpbHMvZ2V0UGFnZVN0YXRpY1Byb3BzXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcImNvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IHsgY2xlYW5BbmRUcmFuc2Zvcm1CbG9ja3MgfSBmcm9tIFwidXRpbHMvY2xlYW5BbmRUcmFuc2Zvcm1CbG9ja3NcIjtcbmltcG9ydCB7IE1haW5NZW51IH0gZnJvbSBcImNvbXBvbmVudHMvTWFpbk1lbnVcIjtcblxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlKHByb3BzKSB7XG4vLyAgICAgLy8gY29uc29sZS5sb2coXCJwcm9wc1wiLCBwcm9wcz8uYmxvY2tzKTtcbiAgIFxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgPE1haW5NZW51XG4vLyAgICAgICAgICAgICBpdGVtcz17cHJvcHM/Lm1haW5NZW51SXRlbXN9XG4vLyAgICAgICAgICAgICBjYWxsVG9BY3Rpb25MYWJlbD17cHJvcHMuY2FsbFRvQWN0aW9uTGFiZWx9IFxuLy8gICAgICAgICAgICAgY2FsbFRvQWN0aW9uRGVzdGluYXRpb249e3Byb3BzLmNhbGxUb0FjdGlvbkRlc3RpbmF0aW9ufS8+XG4vLyAgICAgICAgICAgPEJsb2NrUmVuZGVyZXIgYmxvY2tzPXtwcm9wcz8uYmxvY2tzfS8+XG4vLyAgICAgICAgIDwvZGl2PlxuLy8gICAgICk7XG4vLyB9XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGdldFBhZ2VTdGF0aWNQcm9wcztcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgIHF1ZXJ5OiBncWxgXG4gICAgICAgICAgICBxdWVyeSBBbGxQYWdlc1F1ZXJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzIHtcbiAgICAgICAgICAgICAgICAgICAgICBub2RlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYCxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBwYXRoczogWy4uLmRhdGEucGFnZXMubm9kZXMsIC4uLmRhdGEucHJvcGVydGllcy5ub2Rlc11cbiAgICAgICAgLmZpbHRlcigocGFnZSkgPT4gcGFnZS51cmkgIT09IFwiL1wiKVxuICAgICAgICAubWFwKChwYWdlKSA9PiAoe1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgc2x1ZzogcGFnZS51cmkuc3Vic3RyaW5nKDEsIHBhZ2UudXJpLmxlbmd0aCAtIDEpLnNwbGl0KFwiL1wiKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSksXG4gICAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgfTtcbn07XG4iXSwibmFtZXMiOlsiQmxvY2tSZW5kZXJlciIsIlBhZ2UiLCJjbGVhbkFuZFRyYW5zZm9ybUJsb2NrcyIsIk1haW5NZW51Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[...slug].js\n");

/***/ })

});