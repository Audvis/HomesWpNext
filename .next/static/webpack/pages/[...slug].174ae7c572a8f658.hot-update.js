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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_BlockRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/BlockRenderer */ \"./components/BlockRenderer/index.js\");\n/* harmony import */ var utils_cleanAndTransformBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/cleanAndTransformBlocks */ \"./utils/cleanAndTransformBlocks.js\");\n/* harmony import */ var components_MainMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/MainMenu */ \"./components/MainMenu/index.js\");\n\n\n// import { Page } from \"components/Page\";\n\n\nvar __N_SSG = true;\nfunction page(props) {\n    // console.log(\"props\", props?.blocks);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_MainMenu__WEBPACK_IMPORTED_MODULE_3__.MainMenu, {\n                items: props === null || props === void 0 ? void 0 : props.mainMenuItems,\n                callToActionLabel: props.callToActionLabel,\n                callToActionDestination: props.callToActionDestination\n            }, void 0, false, {\n                fileName: \"/Volumes/T7/proyectos/desarrollo/HomesWpNext/pages/[...slug].js\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_BlockRenderer__WEBPACK_IMPORTED_MODULE_1__.BlockRenderer, {\n                blocks: props === null || props === void 0 ? void 0 : props.blocks\n            }, void 0, false, {\n                fileName: \"/Volumes/T7/proyectos/desarrollo/HomesWpNext/pages/[...slug].js\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Volumes/T7/proyectos/desarrollo/HomesWpNext/pages/[...slug].js\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4uc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRXlEO0FBRXpELDBDQUEwQztBQUM4QjtBQUN6Qjs7QUFHaEMsU0FBU0csSUFBSSxDQUFDQyxLQUFLLEVBQUU7SUFDaEMsdUNBQXVDO0lBRXZDLHFCQUNJLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0gseURBQVE7Z0JBQ1BJLEtBQUssRUFBRUYsS0FBSyxhQUFMQSxLQUFLLFdBQWUsR0FBcEJBLEtBQUFBLENBQW9CLEdBQXBCQSxLQUFLLENBQUVHLGFBQWE7Z0JBQzNCQyxpQkFBaUIsRUFBRUosS0FBSyxDQUFDSSxpQkFBaUI7Z0JBQzFDQyx1QkFBdUIsRUFBRUwsS0FBSyxDQUFDSyx1QkFBdUI7Ozs7O29CQUFHOzBCQUMzRCw4REFBQ1QsbUVBQWE7Z0JBQUNVLE1BQU0sRUFBRU4sS0FBSyxhQUFMQSxLQUFLLFdBQVEsR0FBYkEsS0FBQUEsQ0FBYSxHQUFiQSxLQUFLLENBQUVNLE1BQU07Ozs7O29CQUFHOzs7Ozs7WUFDbkMsQ0FDUjtDQUNMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1suLi5zbHVnXS5qcz9hNjFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiY2xpZW50XCI7XG5pbXBvcnQgeyBCbG9ja1JlbmRlcmVyIH0gZnJvbSBcImNvbXBvbmVudHMvQmxvY2tSZW5kZXJlclwiO1xuaW1wb3J0IHsgZ2V0UGFnZVN0YXRpY1Byb3BzIH0gZnJvbSBcInV0aWxzL2dldFBhZ2VTdGF0aWNQcm9wc1wiO1xuLy8gaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJjb21wb25lbnRzL1BhZ2VcIjtcbmltcG9ydCB7IGNsZWFuQW5kVHJhbnNmb3JtQmxvY2tzIH0gZnJvbSBcInV0aWxzL2NsZWFuQW5kVHJhbnNmb3JtQmxvY2tzXCI7XG5pbXBvcnQgeyBNYWluTWVudSB9IGZyb20gXCJjb21wb25lbnRzL01haW5NZW51XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZShwcm9wcykge1xuICAgIC8vIGNvbnNvbGUubG9nKFwicHJvcHNcIiwgcHJvcHM/LmJsb2Nrcyk7XG4gICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxNYWluTWVudVxuICAgICAgICAgICAgaXRlbXM9e3Byb3BzPy5tYWluTWVudUl0ZW1zfVxuICAgICAgICAgICAgY2FsbFRvQWN0aW9uTGFiZWw9e3Byb3BzLmNhbGxUb0FjdGlvbkxhYmVsfSBcbiAgICAgICAgICAgIGNhbGxUb0FjdGlvbkRlc3RpbmF0aW9uPXtwcm9wcy5jYWxsVG9BY3Rpb25EZXN0aW5hdGlvbn0vPlxuICAgICAgICAgIDxCbG9ja1JlbmRlcmVyIGJsb2Nrcz17cHJvcHM/LmJsb2Nrc30vPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBnZXRQYWdlU3RhdGljUHJvcHM7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICBxdWVyeTogZ3FsYFxuICAgICAgICAgICAgcXVlcnkgQWxsUGFnZXNRdWVyeSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICBub2RlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcyB7XG4gICAgICAgICAgICAgICAgICAgICAgbm9kZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGAsXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcGF0aHM6IFsuLi5kYXRhLnBhZ2VzLm5vZGVzLCAuLi5kYXRhLnByb3BlcnRpZXMubm9kZXNdXG4gICAgICAgIC5maWx0ZXIoKHBhZ2UpID0+IHBhZ2UudXJpICE9PSBcIi9cIilcbiAgICAgICAgLm1hcCgocGFnZSkgPT4gKHtcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHNsdWc6IHBhZ2UudXJpLnN1YnN0cmluZygxLCBwYWdlLnVyaS5sZW5ndGggLSAxKS5zcGxpdChcIi9cIiksXG4gICAgICAgICAgfSxcbiAgICAgICAgfSkpLFxuICAgICAgZmFsbGJhY2s6IGZhbHNlLFxuICAgIH07XG59O1xuIl0sIm5hbWVzIjpbIkJsb2NrUmVuZGVyZXIiLCJjbGVhbkFuZFRyYW5zZm9ybUJsb2NrcyIsIk1haW5NZW51IiwicGFnZSIsInByb3BzIiwiZGl2IiwiaXRlbXMiLCJtYWluTWVudUl0ZW1zIiwiY2FsbFRvQWN0aW9uTGFiZWwiLCJjYWxsVG9BY3Rpb25EZXN0aW5hdGlvbiIsImJsb2NrcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[...slug].js\n");

/***/ })

});