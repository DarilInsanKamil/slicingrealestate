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

/***/ "./pages/section1/index.js":
/*!*********************************!*\
  !*** ./pages/section1/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _logic_width__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/width */ \"./logic/width.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        display: flex;\\n        justify-content: space-between;\\n        align-items: center;\\n        padding: 0px 100px;\\n        @media(max-width: 768px){\\n            padding: 10px;\\n        }\\n    \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        font-size: \",\n        \";\\n        font-weight: \",\n        \";\\n        color: \",\n        \";\\n        width: \",\n        \";\\n        margin: \",\n        \";\\n    \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        background-color: white;\\n        width: 675px;\\n        padding: 10px 14px;\\n        border-radius: 15px;\\n        display: flex;\\n        align-items: center;\\n        justify-content: space-between;\\n    \"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        display: flex;\\n        align-items: center;\\n    \"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        border: 0;\\n        padding: 13px 41px;\\n        background-color: #203239;\\n        color: white;\\n        font-weight: 700;\\n        border-radius: 10px;\\n        cursor: pointer;\\n        box-shadow: 0px 6px 8px rgba(32, 50, 57, 0.25);\\n    \"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        padding: 13px 5px;\\n        border: 0px;\\n        width: 400px;\\n        margin-left: 10px;\\n        font-size: 17px;\\n        &:focus {\\n            outline: none;\\n        }\\n    \"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        display: flex;\\n        margin: 56px 0px 60px 0px;\\n        justify-content: space-between;\\n    \"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        width: 149px;\\n    \"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n        color:#FF7527;\\n        font-size: \",\n        \";\\n\\n    \"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Section1 = function() {\n    _s();\n    var ref = _slicedToArray((0,_logic_width__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), 1), width = ref[0];\n    var Section = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section(_templateObject());\n    var Text = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p(_templateObject1(), function(props) {\n        return props.sz;\n    }, function(props) {\n        return props.w;\n    }, function(props) {\n        return props.c;\n    }, function(props) {\n        return props.width;\n    }, function(props) {\n        return props.m;\n    });\n    var SeacrhBar = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n    var SectionSearch = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section(_templateObject3());\n    var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject4());\n    var Input = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].input(_templateObject5());\n    var Journey = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject6());\n    var SectionJourney = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section(_templateObject7());\n    var Span = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].span(_templateObject8(), function(props) {\n        return props.sz || \"48px\";\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Section, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                        width: \"777px\",\n                        sz: \"48px\",\n                        w: \"600\",\n                        children: \"Temukan Hunian Keluarga Sesuai Keinginanmu\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                        lineNumber: 73,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                        width: \"544px\",\n                        m: \"24px 0px 56px 0px\",\n                        c: \"rgba(0,0,0, 0.4)\",\n                        sz: \"16px\",\n                        w: \"400\",\n                        children: \"Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SeacrhBar, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionSearch, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        src: \"/location.png\",\n                                        width: 24,\n                                        height: 24,\n                                        alt: \"location\",\n                                        draggable: \"false\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                        type: \"text\",\n                                        placeholder: \"Search location, properties, residental group\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                        lineNumber: 78,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                lineNumber: 76,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Journey, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionJourney, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                        sz: \"48px\",\n                                        w: \"600\",\n                                        children: [\n                                            \"200\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Span, {\n                                                children: \"+\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                                lineNumber: 84,\n                                                columnNumber: 52\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                        c: \"rgba(0,0,0, 0.4)\",\n                                        sz: \"16px\",\n                                        w: \"400\",\n                                        children: \"Residental grup telah bergabung\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionJourney, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                        sz: \"48px\",\n                                        w: \"600\",\n                                        children: [\n                                            \"10\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Span, {\n                                                sz: \"16px\",\n                                                children: \"tahun\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 51\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                        c: \"rgba(0,0,0, 0.4)\",\n                                        sz: \"16px\",\n                                        w: \"400\",\n                                        children: \"Sudah berpengalaman\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                lineNumber: 87,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SectionJourney, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                        sz: \"48px\",\n                                        w: \"600\",\n                                        children: [\n                                            \"999\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Span, {\n                                                children: \"+\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 52\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Text, {\n                                        c: \"rgba(0,0,0, 0.4)\",\n                                        sz: \"16px\",\n                                        w: \"400\",\n                                        children: \"Properti tersedia di berbagai Kota\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                                lineNumber: 91,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/home.png\",\n                width: 451,\n                height: 572,\n                alt: \"home\",\n                draggable: \"false\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n                lineNumber: 97,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\daril\\\\Documents\\\\nextjs\\\\restate\\\\pages\\\\section1\\\\index.js\",\n        lineNumber: 71,\n        columnNumber: 9\n    }, _this));\n};\n_s(Section1, \"tXU6CUZVLCf4QgzhNj8yZ+gmp58=\", false, function() {\n    return [\n        _logic_width__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Section1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Section1);\nvar _c;\n$RefreshReg$(_c, \"Section1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1ksSUFBSTswREFBQyxDQUFDOzs7Ozs7Ozs7Ozs7Z0hBQ2pDaEIsSUFBSTt3Q0FBQ0ssQ0FBQyxFQUFDLENBQWtCO3dDQUFDRixFQUFFLEVBQUMsQ0FBTTt3Q0FBQ0MsQ0FBQyxFQUFDLENBQUs7a0RBQUMsQ0FBK0I7Ozs7Ozs7Ozs7Ozt3R0FFL0VXLGNBQWM7O2dIQUNWZixJQUFJO3dDQUFDRyxFQUFFLEVBQUMsQ0FBTTt3Q0FBQ0MsQ0FBQyxFQUFDLENBQUs7OzRDQUFDLENBQUU7d0hBQUNZLElBQUk7Z0RBQUNiLEVBQUUsRUFBQyxDQUFNOzBEQUFDLENBQUs7Ozs7Ozs7Ozs7OztnSEFDOUNILElBQUk7d0NBQUNLLENBQUMsRUFBQyxDQUFrQjt3Q0FBQ0YsRUFBRSxFQUFDLENBQU07d0NBQUNDLENBQUMsRUFBQyxDQUFLO2tEQUFDLENBQW1COzs7Ozs7Ozs7Ozs7d0dBRW5FVyxjQUFjOztnSEFDVmYsSUFBSTt3Q0FBQ0csRUFBRSxFQUFDLENBQU07d0NBQUNDLENBQUMsRUFBQyxDQUFLOzs0Q0FBQyxDQUFHO3dIQUFDWSxJQUFJOzBEQUFDLENBQUM7Ozs7Ozs7Ozs7OztnSEFDakNoQixJQUFJO3dDQUFDSyxDQUFDLEVBQUMsQ0FBa0I7d0NBQUNGLEVBQUUsRUFBQyxDQUFNO3dDQUFDQyxDQUFDLEVBQUMsQ0FBSztrREFBQyxDQUFrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dGQUkxRlgsbURBQUs7Z0JBQUN5QixHQUFHLEVBQUMsQ0FBVztnQkFBQ3JCLEtBQUssRUFBRSxHQUFHO2dCQUFFc0IsTUFBTSxFQUFFLEdBQUc7Z0JBQUVDLEdBQUcsRUFBQyxDQUFNO2dCQUFDQyxTQUFTLEVBQUMsQ0FBTzs7Ozs7Ozs7Ozs7O0FBR3hGLENBQUM7R0EvRkt6QixRQUFROztRQUNNRCxvREFBYTs7O0tBRDNCQyxRQUFRO0FBaUdkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NlY3Rpb24xL2luZGV4LmpzPzYwOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgdXNlRGV2aWNlU2l6ZSBmcm9tIFwiLi4vLi4vbG9naWMvd2lkdGhcIlxyXG5cclxuY29uc3QgU2VjdGlvbjEgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbd2lkdGhdID0gdXNlRGV2aWNlU2l6ZSgpXHJcblxyXG4gICAgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDEwMHB4O1xyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICBgXHJcbiAgICBjb25zdCBUZXh0ID0gc3R5bGVkLnBgXHJcbiAgICAgICAgZm9udC1zaXplOiAke3Byb3BzID0+IHByb3BzLnN6fTtcclxuICAgICAgICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBwcm9wcy53fTtcclxuICAgICAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5jfTtcclxuICAgICAgICB3aWR0aDogJHtwcm9wcyA9PiBwcm9wcy53aWR0aH07XHJcbiAgICAgICAgbWFyZ2luOiAke3Byb3BzID0+IHByb3BzLm19O1xyXG4gICAgYFxyXG4gICAgY29uc3QgU2VhY3JoQmFyID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNjc1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGBcclxuICAgIGNvbnN0IFNlY3Rpb25TZWFyY2ggPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBgXHJcbiAgICBjb25zdCBCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBwYWRkaW5nOiAxM3B4IDQxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMzIzOTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggNnB4IDhweCByZ2JhKDMyLCA1MCwgNTcsIDAuMjUpO1xyXG4gICAgYFxyXG4gICAgY29uc3QgSW5wdXQgPSBzdHlsZWQuaW5wdXRgXHJcbiAgICAgICAgcGFkZGluZzogMTNweCA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICBgXHJcbiAgICBjb25zdCBKb3VybmV5ID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogNTZweCAwcHggNjBweCAwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYFxyXG4gICAgY29uc3QgU2VjdGlvbkpvdXJuZXkgPSBzdHlsZWQuc2VjdGlvbmBcclxuICAgICAgICB3aWR0aDogMTQ5cHg7XHJcbiAgICBgXHJcbiAgICBjb25zdCBTcGFuID0gc3R5bGVkLnNwYW5gXHJcbiAgICAgICAgY29sb3I6I0ZGNzUyNztcclxuICAgICAgICBmb250LXNpemU6ICR7cHJvcHMgPT4gcHJvcHMuc3ogfHwgXCI0OHB4XCJ9O1xyXG5cclxuICAgIGBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgd2lkdGg9XCI3NzdweFwiIHN6PVwiNDhweFwiIHc9XCI2MDBcIj5UZW11a2FuIEh1bmlhbiBLZWx1YXJnYSBTZXN1YWkgS2VpbmdpbmFubXU8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCB3aWR0aD1cIjU0NHB4XCIgbT1cIjI0cHggMHB4IDU2cHggMHB4XCIgYz1cInJnYmEoMCwwLDAsIDAuNClcIiBzej1cIjE2cHhcIiB3PVwiNDAwXCI+TWVueWVkaWFrYW4gaHVuaWFuIGJhZ2kga2VsdWFyZ2EgYW5kYSBkZW5nYW4gdmFyaWFuIHBpbGloYW4gZGFuIGxva2FzaSB5YW5nIHN0cmF0ZWdpcyBkaSBrb3RhIGFuZGEgZGVuZ2FuIGNhcmEgeWFuZyBsZWJpaCBtdWRhaC48L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8U2VhY3JoQmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uU2VhcmNoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2xvY2F0aW9uLnBuZ1wiIHdpZHRoPXsyNH0gaGVpZ2h0PXsyNH0gYWx0PVwibG9jYXRpb25cIiBkcmFnZ2FibGU9XCJmYWxzZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGxvY2F0aW9uLCBwcm9wZXJ0aWVzLCByZXNpZGVudGFsIGdyb3VwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25TZWFyY2g+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbj5TZWFyY2g8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvU2VhY3JoQmFyPlxyXG4gICAgICAgICAgICAgICAgPEpvdXJuZXk+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25Kb3VybmV5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzej1cIjQ4cHhcIiB3PVwiNjAwXCI+MjAwPFNwYW4+KzwvU3Bhbj48L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGM9XCJyZ2JhKDAsMCwwLCAwLjQpXCIgc3o9XCIxNnB4XCIgdz1cIjQwMFwiPlJlc2lkZW50YWwgZ3J1cCB0ZWxhaCBiZXJnYWJ1bmc8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uSm91cm5leT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbkpvdXJuZXk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHN6PVwiNDhweFwiIHc9XCI2MDBcIj4xMDxTcGFuIHN6PVwiMTZweFwiPnRhaHVuPC9TcGFuPjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYz1cInJnYmEoMCwwLDAsIDAuNClcIiBzej1cIjE2cHhcIiB3PVwiNDAwXCI+U3VkYWggYmVycGVuZ2FsYW1hbjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb25Kb3VybmV5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uSm91cm5leT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3o9XCI0OHB4XCIgdz1cIjYwMFwiPjk5OTxTcGFuPis8L1NwYW4+PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjPVwicmdiYSgwLDAsMCwgMC40KVwiIHN6PVwiMTZweFwiIHc9XCI0MDBcIj5Qcm9wZXJ0aSB0ZXJzZWRpYSBkaSBiZXJiYWdhaSBLb3RhPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbkpvdXJuZXk+XHJcbiAgICAgICAgICAgICAgICA8L0pvdXJuZXk+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9ob21lLnBuZ1wiIHdpZHRoPXs0NTF9IGhlaWdodD17NTcyfSBhbHQ9XCJob21lXCIgZHJhZ2dhYmxlPVwiZmFsc2VcIiAvPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbjEiXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZWQiLCJ1c2VEZXZpY2VTaXplIiwiU2VjdGlvbjEiLCJ3aWR0aCIsIlNlY3Rpb24iLCJzZWN0aW9uIiwiVGV4dCIsInAiLCJwcm9wcyIsInN6IiwidyIsImMiLCJtIiwiU2VhY3JoQmFyIiwiZGl2IiwiU2VjdGlvblNlYXJjaCIsIkJ1dHRvbiIsImJ1dHRvbiIsIklucHV0IiwiaW5wdXQiLCJKb3VybmV5IiwiU2VjdGlvbkpvdXJuZXkiLCJTcGFuIiwic3BhbiIsInNyYyIsImhlaWdodCIsImFsdCIsImRyYWdnYWJsZSIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/section1/index.js\n");

/***/ })

});