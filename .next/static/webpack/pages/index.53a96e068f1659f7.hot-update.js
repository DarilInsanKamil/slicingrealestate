"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/section4/index.js":
/*!*********************************!*\
  !*** ./pages/section4/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logic_width__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/width */ \"./logic/width.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        padding: 68px 100px;\\n        background-color: white;\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: \",\n        \";\\n        font-weight: \",\n        \";\\n        color: \",\n        \";\\n        width: \",\n        \";\\n        margin: \",\n        \";\\n    \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        display: flex;\\n        justify-content: space-between;\\n    \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: \",\n        \";\\n        font-weight: \",\n        \";\\n        color: \",\n        \";\\n        width: \",\n        \";\\n        margin: \",\n        \";\\n    \"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Section4 = function() {\n    _s();\n    var ref = _slicedToArray((0,_logic_width__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), 1), width = ref[0];\n    var Section = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section(_templateObject());\n    var Text = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p(_templateObject1(), function(props) {\n        return props.sz;\n    }, function(props) {\n        return props.w;\n    }, function(props) {\n        return props.c;\n    }, function(props) {\n        return props.width;\n    }, function(props) {\n        return props.m;\n    });\n    var SectionContent = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n    var Caption = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].figcaption(_templateObject3(), function(props) {\n        return props.sz;\n    }, function(props) {\n        return props.w;\n    }, function(props) {\n        return props.c;\n    }, function(props) {\n        return props.width;\n    }, function(props) {\n        return props.m;\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: width < 768 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"This mobile version\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n            lineNumber: 31,\n            columnNumber: 31\n        }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                    c: \"orange\",\n                    w: \"600\",\n                    children: \"Pilihan Auditor\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                    lineNumber: 34,\n                    columnNumber: 25\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                    sz: \"32px\",\n                    m: \"0px 0px 64px 0px\",\n                    w: \"700\",\n                    children: \"Residen Berbagai Kota\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                    lineNumber: 35,\n                    columnNumber: 25\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionContent, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/image1.png\",\n                                    width: 357,\n                                    height: 454,\n                                    draggable: \"false\",\n                                    alt: \"image1\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Caption, {\n                                    width: \"357px\",\n                                    w: \"600\",\n                                    sz: \"20px\",\n                                    children: \"Magnolia Surabaya\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Caption, {\n                                    width: \"357px\",\n                                    c: \"rgba(0,0,0, 0.55)\",\n                                    children: \"Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                            lineNumber: 37,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/image2.png\",\n                                    width: 357,\n                                    height: 454,\n                                    draggable: \"false\",\n                                    alt: \"image2\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Caption, {\n                                    width: \"357px\",\n                                    w: \"600\",\n                                    sz: \"20px\",\n                                    children: \"Pinang Residence\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                                    lineNumber: 48,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Caption, {\n                                    width: \"357px\",\n                                    c: \"rgba(0,0,0, 0.55)\",\n                                    children: \"Jl. Deplu Raya No.16 RT.5, RW.003 Bintaro, Pesanggrahan, Jakarta Selatan 12330\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                            lineNumber: 46,\n                            columnNumber: 29\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: \"/image3.png\",\n                                    width: 357,\n                                    height: 454,\n                                    draggable: \"false\",\n                                    alt: \"image3\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Caption, {\n                                    width: \"357px\",\n                                    w: \"600\",\n                                    sz: \"20px\",\n                                    children: \"South Grove\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 33\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Caption, {\n                                    width: \"357px\",\n                                    c: \"rgba(0,0,0, 0.55)\",\n                                    children: \"1 No.1, RT.1/RW.1, Lb. Bulus, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12440\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 33\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                            lineNumber: 56,\n                            columnNumber: 29\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n                    lineNumber: 36,\n                    columnNumber: 25\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section4\\\\index.js\",\n            lineNumber: 33,\n            columnNumber: 21\n        }, _this)\n    }, void 0, false));\n};\n_s(Section4, \"tXU6CUZVLCf4QgzhNj8yZ+gmp58=\", false, function() {\n    return [\n        _logic_width__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Section4;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section4);\nvar _c;\n$RefreshReg$(_c, \"Section4\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHO29DQUFFZ0IsTUFBTSxFQUFFLEdBQUc7b0NBQUVDLFNBQVMsRUFBQyxDQUFPO29DQUFDQyxHQUFHLEVBQUMsQ0FBUTs7Ozs7OzRHQUMvRU4sT0FBTztvQ0FBQ1osS0FBSyxFQUFDLENBQU87b0NBQUNPLENBQUMsRUFBQyxDQUFLO29DQUFDRCxFQUFFLEVBQUMsQ0FBTTs4Q0FBQyxDQUV6Qzs7Ozs7OzRHQUNDTSxPQUFPO29DQUFDWixLQUFLLEVBQUMsQ0FBTztvQ0FBQ1EsQ0FBQyxFQUFDLENBQW1COzhDQUFDLENBRzdDOzs7Ozs7Ozs7Ozs7b0dBRUhNLENBQU07OzRHQUNGakIsbURBQUs7b0NBQUNrQixHQUFHLEVBQUMsQ0FBYTtvQ0FBQ2YsS0FBSyxFQUFFLEdBQUc7b0NBQUVnQixNQUFNLEVBQUUsR0FBRztvQ0FBRUMsU0FBUyxFQUFDLENBQU87b0NBQUNDLEdBQUcsRUFBQyxDQUFROzs7Ozs7NEdBQy9FTixPQUFPO29DQUFDWixLQUFLLEVBQUMsQ0FBTztvQ0FBQ08sQ0FBQyxFQUFDLENBQUs7b0NBQUNELEVBQUUsRUFBQyxDQUFNOzhDQUFDLENBRXpDOzs7Ozs7NEdBQ0NNLE9BQU87b0NBQUNaLEtBQUssRUFBQyxDQUFPO29DQUFDUSxDQUFDLEVBQUMsQ0FBbUI7OENBQUMsQ0FFN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaEMsQ0FBQztHQW5FS1QsUUFBUTs7UUFDTUQsb0RBQWE7OztLQUQzQkMsUUFBUTtBQXFFZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zZWN0aW9uNC9pbmRleC5qcz8zMWI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgdXNlRGV2aWNlU2l6ZSBmcm9tIFwiLi4vLi4vbG9naWMvd2lkdGhcIjtcclxuY29uc3QgU2VjdGlvbjQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbd2lkdGhdID0gdXNlRGV2aWNlU2l6ZSgpXHJcbiAgICBjb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICAgICAgcGFkZGluZzogNjhweCAxMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGBcclxuICAgIGNvbnN0IFRleHQgPSBzdHlsZWQucGBcclxuICAgICAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMuc3p9O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAke3Byb3BzID0+IHByb3BzLnd9O1xyXG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLmN9O1xyXG4gICAgICAgIHdpZHRoOiAke3Byb3BzID0+IHByb3BzLndpZHRofTtcclxuICAgICAgICBtYXJnaW46ICR7cHJvcHMgPT4gcHJvcHMubX07XHJcbiAgICBgXHJcbiAgICBjb25zdCBTZWN0aW9uQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBgXHJcbiAgICBjb25zdCBDYXB0aW9uID0gc3R5bGVkLmZpZ2NhcHRpb25gXHJcbiAgICAgICAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnN6fTtcclxuICAgICAgICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBwcm9wcy53fTtcclxuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jfTtcclxuICAgICAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgICAgICAgbWFyZ2luOiAke3Byb3BzID0+IHByb3BzLm19O1xyXG4gICAgYFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCA8IDc2OCA/IDxwPlRoaXMgbW9iaWxlIHZlcnNpb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjPVwib3JhbmdlXCIgdz1cIjYwMFwiPlBpbGloYW4gQXVkaXRvcjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3o9XCIzMnB4XCIgbT1cIjBweCAwcHggNjRweCAwcHhcIiB3PVwiNzAwXCI+UmVzaWRlbiBCZXJiYWdhaSBLb3RhPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2UxLnBuZ1wiIHdpZHRoPXszNTd9IGhlaWdodD17NDU0fSBkcmFnZ2FibGU9XCJmYWxzZVwiIGFsdD1cImltYWdlMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcHRpb24gd2lkdGg9XCIzNTdweFwiIHc9XCI2MDBcIiBzej1cIjIwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTWFnbm9saWEgU3VyYWJheWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcHRpb24gd2lkdGg9XCIzNTdweFwiIGM9XCJyZ2JhKDAsMCwwLCAwLjU1KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKbC4gR2F0b3QgU3Vicm90byBOby5LTS42LDgsIFJULjAwMS9SVy4wMDgsIEphdGFrZSwgS2VjLiBKYXRpdXd1bmcsIEtvdGEgVGFuZ2VyYW5nLCBCYW50ZW4gMTUxMzZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWFnZTIucG5nXCIgd2lkdGg9ezM1N30gaGVpZ2h0PXs0NTR9IGRyYWdnYWJsZT1cImZhbHNlXCIgYWx0PVwiaW1hZ2UyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FwdGlvbiB3aWR0aD1cIjM1N3B4XCIgdz1cIjYwMFwiIHN6PVwiMjBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaW5hbmcgUmVzaWRlbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXB0aW9uIHdpZHRoPVwiMzU3cHhcIiBjPVwicmdiYSgwLDAsMCwgMC41NSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSmwuIERlcGx1IFJheWEgTm8uMTYgUlQuNSwgUlcuMDAzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJpbnRhcm8sIFBlc2FuZ2dyYWhhbiwgSmFrYXJ0YSBTZWxhdGFuIDEyMzMwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXB0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1hZ2UzLnBuZ1wiIHdpZHRoPXszNTd9IGhlaWdodD17NDU0fSBkcmFnZ2FibGU9XCJmYWxzZVwiIGFsdD1cImltYWdlM1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcHRpb24gd2lkdGg9XCIzNTdweFwiIHc9XCI2MDBcIiBzej1cIjIwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU291dGggR3JvdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcHRpb24gd2lkdGg9XCIzNTdweFwiIGM9XCJyZ2JhKDAsMCwwLCAwLjU1KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxIE5vLjEsIFJULjEvUlcuMSwgTGIuIEJ1bHVzLCBLZWMuIENpbGFuZGFrLCBLb3RhIEpha2FydGEgU2VsYXRhbiwgRGFlcmFoIEtodXN1cyBJYnVrb3RhIEpha2FydGEgMTI0NDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8Lz5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb240Il0sIm5hbWVzIjpbInN0eWxlZCIsIkltYWdlIiwidXNlRGV2aWNlU2l6ZSIsIlNlY3Rpb240Iiwid2lkdGgiLCJTZWN0aW9uIiwic2VjdGlvbiIsIlRleHQiLCJwIiwicHJvcHMiLCJzeiIsInciLCJjIiwibSIsIlNlY3Rpb25Db250ZW50IiwiZGl2IiwiQ2FwdGlvbiIsImZpZ2NhcHRpb24iLCJmaWd1cmUiLCJzcmMiLCJoZWlnaHQiLCJkcmFnZ2FibGUiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/section4/index.js\n");

/***/ })

});