"use strict";
exports.id = 905;
exports.ids = [905];
exports.modules = {

/***/ 7131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    uri: process.env.WP_GRAPHQL_URL,
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ 5684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "H": () => (/* reexport */ BlockRenderer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./utils/fonts.js
const getTextAlign = (textAlign = "left")=>{
    const textAlignMap = {
        "left": "text-left",
        "right": "text-right",
        "center": "text-center"
    };
    return `${textAlignMap[textAlign] || ""}`;
};
const getFontSizeForHeading = (level)=>{
    const fontSizeMap = {
        "1": "text-6xl",
        "2": "text-5xl",
        "3": "text-4xl",
        "4": "text-3xl",
        "5": "text2xl",
        "6": "text-xl"
    };
    return `${fontSizeMap[level] || ""}`;
};

;// CONCATENATED MODULE: ./components/Heading/Heading.js


const Heading = ({ textAlign , content , level  })=>{
    const tag = /*#__PURE__*/ external_react_default().createElement(`h${level}`, {
        dangerouslySetInnerHTML: {
            __html: content
        },
        className: `font-heading max-w-5xl mx-auto my-5 ${getTextAlign(textAlign)} ${getFontSizeForHeading(level)}`
    });
    return tag;
};

;// CONCATENATED MODULE: ./components/Heading/index.js


// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Cover/Cover.js


const Cover = ({ children , background  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "h-screen text-white bg-slate-800 relative min-h-[400px] flex justify-center items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                alt: "Cover",
                src: background,
                layout: "fill",
                objectFit: "cover",
                className: "mix-blend-soft-light"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "max-w-5xl z-10",
                children: children
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Cover/index.js


;// CONCATENATED MODULE: ./utils/relativeToAbsoliteUrls.js
const relativeToAbsoluteUrls = (htmlString = "")=>{
    return htmlString.split("http://hot-dang-homes-course.local").join("");
};

;// CONCATENATED MODULE: ./components/Paragraph/Paragraph.js


const Paragraph = ({ textAlign ="left" , content , textColor  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        className: "max-w-5xl mx-auto text-lg",
        style: {
            textAlign: textAlign,
            color: textColor
        },
        dangerouslySetInnerHTML: {
            __html: relativeToAbsoluteUrls(content)
        }
    });
};

;// CONCATENATED MODULE: ./components/Paragraph/index.js


;// CONCATENATED MODULE: ./theme.js
const theme = {
    foreground: "#000000",
    background: "#ffffff",
    primary: "#1a4548",
    secondary: "#ffe2c7",
    tertiary: "#F6F6F6",
    slate: "#1E293B",
    "vivid-green-cyan": "#00d084"
};

;// CONCATENATED MODULE: ./components/BlockRenderer/BlockRenderer.js





const BlockRenderer = ({ blocks  })=>{
    if (!blocks) return null;
    return blocks.map((block)=>{
        switch(block.name){
            case "core/paragraph":
                return /*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
                    textAlign: block.attributes.align,
                    textColor: theme[block.attributes.textColor] || block.attributes?.style?.color?.text,
                    content: block.attributes.content
                }, block.id);
            case "core/heading":
                return /*#__PURE__*/ jsx_runtime_.jsx(Heading, {
                    textAlign: block.attributes.textAlign,
                    level: block.attributes.level,
                    content: block.attributes.content
                }, block.id);
            case "core/cover":
                return /*#__PURE__*/ jsx_runtime_.jsx(Cover, {
                    background: block?.attributes?.url,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(BlockRenderer, {
                        blocks: block.innerBlocks
                    })
                }, block.id);
            default:
                return null;
        }
    });
};

;// CONCATENATED MODULE: ./components/BlockRenderer/index.js



/***/ }),

/***/ 417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* reexport */ MainMenu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/ButtonLink/ButtonLink.js


const ButtonLink = ({ destination , label  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: destination,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "btn",
            children: label
        })
    });
};

;// CONCATENATED MODULE: ./components/ButtonLink/index.js


// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./components/MainMenu/MainMenu.js




const MainMenu = ({ items , callToActionLabel , callToActionDestination ,  })=>{
    console.log("items", items);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "py-4 pl-5 flex text-pink-600",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaHouseUser, {
                        size: 30
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaHeart, {
                        size: 30
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-1 justify-end",
                children: [
                    (items || []).map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "hover:bg-slate-700 cursor-pointer relative group",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: item.destination,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: "p-5 block",
                                            children: item.label
                                        })
                                    })
                                }),
                                !!item.subMenuItems?.length && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-3",
                                    children: item.subMenuItems.map((subMenuItem)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: subMenuItem.destination,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "block whitespace-nowrap p-5 hover:bg-slate-700",
                                                children: subMenuItem.label
                                            })
                                        }, subMenuItem.id)
                                    )
                                })
                            ]
                        }, item.id)
                    ),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "ml-3 my-auto",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonLink, {
                            destination: callToActionDestination,
                            label: callToActionLabel
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/MainMenu/index.js



/***/ }),

/***/ 8658:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ cleanAndTransformBlocks)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);
uuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const cleanAndTransformBlocks = (blocksJSON)=>{
    const blocks = JSON.parse(blocksJSON);
    const assignId = (b)=>{
        b.forEach((block)=>{
            block.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
            if (block.innerBlocks?.length) {
                assignId(block.innerBlocks);
            }
        });
    };
    assignId(blocks);
    return blocks;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ getPageStaticProps)
/* harmony export */ });
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7131);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_cleanAndTransformBlocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8658);
/* harmony import */ var utils_mapMainMenuItems__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([utils_cleanAndTransformBlocks__WEBPACK_IMPORTED_MODULE_2__, utils_mapMainMenuItems__WEBPACK_IMPORTED_MODULE_3__]);
([utils_cleanAndTransformBlocks__WEBPACK_IMPORTED_MODULE_2__, utils_mapMainMenuItems__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getPageStaticProps = async (context)=>{
    // console.log('context',context);
    const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
    // console.log("uri", uri);
    const { data  } = await client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].query */ .Z.query({
        query: _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql` 
        query PageQuery($uri: String!) {
          nodeByUri(uri: $uri) {
            ... on Page {
              id
              title
              blocksJSON
            }
          }
          acfOptionsMainMenu {
            mainMenu {
              callToActionButton{
                label
                destination{
                  ... on Page{
                    uri
                  }
                }
              }
              menuItems {
                menuItem {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
                items {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
              }
            }
          }
        }
        `,
        variables: {
            uri
        }
    });
    const blocks = (0,utils_cleanAndTransformBlocks__WEBPACK_IMPORTED_MODULE_2__/* .cleanAndTransformBlocks */ .u)(data?.nodeByUri?.blocksJSON);
    return {
        props: {
            blocks,
            mainMenuItems: (0,utils_mapMainMenuItems__WEBPACK_IMPORTED_MODULE_3__/* .mapMainMenuItems */ .Z)(data.acfOptionsMainMenu.mainMenu.menuItems),
            callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
            callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8616:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ mapMainMenuItems)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);
uuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const mapMainMenuItems = (menuItems)=>{
    // console.log("menuItems", menuItems);
    return menuItems.map((menuItem)=>({
            id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
            destination: menuItem.menuItem.destination.uri,
            label: menuItem.menuItem.label,
            subMenuItems: (menuItem.items || []).map((subMenuItem)=>({
                    id: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),
                    destination: subMenuItem.destination?.uri,
                    label: subMenuItem.label
                })
            )
        })
    );
// return menuItems
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;