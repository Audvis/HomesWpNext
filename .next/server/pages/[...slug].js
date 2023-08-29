"use strict";
(() => {
var exports = {};
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 7083:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ page),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7131);
/* harmony import */ var components_BlockRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5684);
/* harmony import */ var utils_getPageStaticProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8406);
/* harmony import */ var utils_cleanAndTransformBlocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8658);
/* harmony import */ var components_MainMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(417);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_getPageStaticProps__WEBPACK_IMPORTED_MODULE_4__, utils_cleanAndTransformBlocks__WEBPACK_IMPORTED_MODULE_5__]);
([utils_getPageStaticProps__WEBPACK_IMPORTED_MODULE_4__, utils_cleanAndTransformBlocks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





// import { Page } from "components/Page";


function page(props) {
    // console.log("props", props?.blocks);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_MainMenu__WEBPACK_IMPORTED_MODULE_6__/* .MainMenu */ .l, {
                items: props?.mainMenuItems,
                callToActionLabel: props.callToActionLabel,
                callToActionDestination: props.callToActionDestination
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_BlockRenderer__WEBPACK_IMPORTED_MODULE_3__/* .BlockRenderer */ .H, {
                blocks: props?.blocks
            })
        ]
    });
};
const getStaticProps = utils_getPageStaticProps__WEBPACK_IMPORTED_MODULE_4__/* .getPageStaticProps */ .S;
const getStaticPaths = async ({ params  })=>{
    const { data  } = await client__WEBPACK_IMPORTED_MODULE_2__/* ["default"].query */ .Z.query({
        query: _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
            query AllPagesQuery {
                    pages {
                         nodes {
                            uri
                        }
                    }
                    properties {
                      nodes {
                        uri
                      }
                    }
                 }
            `
    });
    return {
        paths: [
            ...data.pages.nodes,
            ...data.properties.nodes
        ].filter((page)=>page.uri !== "/"
        ).map((page)=>({
                params: {
                    slug: page.uri.substring(1, page.uri.length - 1).split("/")
                }
            })
        ),
        fallback: false
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,61,905], () => (__webpack_exec__(7083)));
module.exports = __webpack_exports__;

})();