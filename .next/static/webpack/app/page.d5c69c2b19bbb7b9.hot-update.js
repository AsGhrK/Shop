"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/componetes/Main.js":
/*!********************************!*\
  !*** ./src/componetes/Main.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _app_style_page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/style/page.module.css */ \"(app-pages-browser)/./src/app/style/page.module.css\");\n/* harmony import */ var _app_style_page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_style_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Spinner */ \"(app-pages-browser)/./src/componetes/Spinner.js\");\n/* harmony import */ var _ErrorFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorFetch */ \"(app-pages-browser)/./src/componetes/ErrorFetch.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Main() {\n    _s();\n    const [listProduct, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [listComplete, setListComplete] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [textSearch, setTextSearch] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            try {\n                const resposta = await fetch(\"https://fakestoreapi.com/products/\");\n                const data = await resposta.json();\n                setProduct(data);\n                setListComplete(data);\n            } catch (e) {\n                setIsError(true);\n            }\n        };\n        getProduct();\n    }, []);\n    const orderAz = ()=>{\n        const listAux = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setProduct(listAux);\n    };\n    const orderZa = ()=>{\n        const listAux = [\n            ...listProduct\n        ].sort((a, b)=>b.title.localeCompare(a.title));\n        setProduct(listAux);\n    };\n    const orderPrecoMenor = ()=>{\n        const listAux = [\n            ...listProduct\n        ].sort((a, b)=>a.price - b.price);\n        setProduct(listAux);\n    };\n    const orderPrecoMaior = ()=>{\n        const listAux = [\n            ...listProduct\n        ].sort((a, b)=>b.price - a.price);\n        setProduct(listAux);\n    };\n    const search = (text)=>{\n        setTextSearch(text);\n        if (text.trim() == \"\") {\n            setListProduct(listComplete);\n            return;\n        }\n        const newList = listProduct.filter((product)=>product.title.toUpperCase().trim().includes(textSearch.toUpperCase().trim()));\n        setListProduct(newList);\n    };\n    if (isError == true) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorFetch__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n            lineNumber: 63,\n            columnNumber: 10\n        }, this);\n    }\n    if (listComplete[0] == null) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Spinner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n            lineNumber: 67,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_style_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().filters),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: textSearch,\n                            placeholder: \"Pesquise um produto\",\n                            onChange: (event)=>search(event.target.value)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: orderAz,\n                                children: \"A - Z\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: orderZa,\n                                children: \"Z - A\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: orderPrecoMenor,\n                                children: \"Menor pre\\xe7o\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: orderPrecoMaior,\n                                children: \"Maior pre\\xe7o\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_app_style_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().corpo),\n                children: listProduct.map((products)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_app_style_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: products.title.slice(0, 16) + \"...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                width: 300,\n                                height: 300,\n                                src: products.image\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                                lineNumber: 87,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_app_style_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().preco),\n                                children: [\n                                    \"R$: \",\n                                    products.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: products.description.slice(0, 100) + \"...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: products.category\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                                lineNumber: 90,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, products.id, true, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"NVNcMxKwZijLP4+Zk/ZCFs5Hzg8=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25ldGVzL01haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDOEI7QUFDa0I7QUFDTDtBQUNYO0FBQ007QUFFdkIsU0FBU007O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzdDLE1BQU0sQ0FBQ00sY0FBY0MsZ0JBQWdCLEdBQUdQLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDUSxZQUFZQyxjQUFjLEdBQUdULCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUV2Q0QsZ0RBQVNBLENBQUM7UUFDUixNQUFNYSxhQUFhO1lBQ2pCLElBQUc7Z0JBQ0gsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO2dCQUM3QixNQUFNQyxPQUFPLE1BQU1GLFNBQVNHLElBQUk7Z0JBQ2hDWCxXQUFXVTtnQkFDWFIsZ0JBQWdCUTtZQUNsQixFQUNBLFVBQUs7Z0JBQ0hKLFdBQVc7WUFDYjtRQUNGO1FBQ0VDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTUssVUFBVTtRQUNkLE1BQU1DLFVBQVU7ZUFBSWQ7U0FBWSxDQUFDZSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRUUsS0FBSyxDQUFDQyxhQUFhLENBQUNGLEVBQUVDLEtBQUs7UUFDN0VqQixXQUFXYTtJQUNiO0lBRUEsTUFBTU0sVUFBVTtRQUNkLE1BQU1OLFVBQVU7ZUFBSWQ7U0FBWSxDQUFDZSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUEsRUFBRUMsS0FBSyxDQUFDQyxhQUFhLENBQUNILEVBQUVFLEtBQUs7UUFDN0VqQixXQUFXYTtJQUNiO0lBRUEsTUFBTU8sa0JBQWtCO1FBQ3RCLE1BQU1QLFVBQVU7ZUFBSWQ7U0FBWSxDQUFDZSxJQUFJLENBQUMsQ0FBQ0MsR0FBR0MsSUFBTUQsRUFBRU0sS0FBSyxHQUFHTCxFQUFFSyxLQUFLO1FBQ2pFckIsV0FBV2E7SUFDYjtJQUVBLE1BQU1TLGtCQUFrQjtRQUN0QixNQUFNVCxVQUFVO2VBQUlkO1NBQVksQ0FBQ2UsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1BLEVBQUVLLEtBQUssR0FBR04sRUFBRU0sS0FBSztRQUNqRXJCLFdBQVdhO0lBQ2I7SUFFRCxNQUFNVSxTQUFTLENBQUNDO1FBQ2JwQixjQUFjb0I7UUFFZCxJQUFJQSxLQUFLQyxJQUFJLE1BQU0sSUFBSTtZQUNyQkMsZUFBZXpCO1lBQ2Y7UUFDRjtRQUNDLE1BQU0wQixVQUFVNUIsWUFBWTZCLE1BQU0sQ0FBQyxDQUFDQyxVQUNuQ0EsUUFBUVosS0FBSyxDQUFDYSxXQUFXLEdBQUdMLElBQUksR0FBR00sUUFBUSxDQUFDNUIsV0FBVzJCLFdBQVcsR0FBR0wsSUFBSTtRQUUxRUMsZUFBZUM7SUFDbEI7SUFFRixJQUFHdEIsV0FBVyxNQUFLO1FBQ2pCLHFCQUFPLDhEQUFDUixtREFBVUE7Ozs7O0lBQ3BCO0lBRUUsSUFBSUksWUFBWSxDQUFDLEVBQUUsSUFBSSxNQUFNO1FBQzNCLHFCQUFPLDhEQUFDTCxnREFBT0E7Ozs7O0lBQ2pCO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDb0M7Z0JBQUlDLFdBQVd4QywyRUFBYTs7a0NBQzNCLDhEQUFDdUM7a0NBQ0MsNEVBQUNHOzRCQUFNQyxNQUFLOzRCQUFPQyxPQUFPbEM7NEJBQVltQyxhQUFZOzRCQUFzQkMsVUFBV0MsQ0FBQUEsUUFBU2pCLE9BQU9pQixNQUFNQyxNQUFNLENBQUNKLEtBQUs7Ozs7Ozs7Ozs7O2tDQUV2SCw4REFBQ0w7OzBDQUNDLDhEQUFDVTtnQ0FBT0MsU0FBUy9COzBDQUFTOzs7Ozs7MENBQzFCLDhEQUFDOEI7Z0NBQU9DLFNBQVN4QjswQ0FBUzs7Ozs7OzBDQUMxQiw4REFBQ3VCO2dDQUFPQyxTQUFTdkI7MENBQWlCOzs7Ozs7MENBQ2xDLDhEQUFDc0I7Z0NBQU9DLFNBQVNyQjswQ0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdEMsOERBQUNzQjtnQkFBS1gsV0FBV3hDLHlFQUFXOzBCQUN6Qk0sWUFBWStDLEdBQUcsQ0FBQyxDQUFDQyx5QkFDaEIsOERBQUNmO3dCQUFJQyxXQUFXeEMsd0VBQVU7OzBDQUN4Qiw4REFBQ3dEOzBDQUFJRixTQUFTOUIsS0FBSyxDQUFDaUMsS0FBSyxDQUFDLEdBQUcsTUFBTTs7Ozs7OzBDQUNuQyw4REFBQzFELGtEQUFLQTtnQ0FBQzJELE9BQU87Z0NBQUtDLFFBQVE7Z0NBQUtDLEtBQUtOLFNBQVNPLEtBQUs7Ozs7OzswQ0FDbkQsOERBQUNDO2dDQUFHdEIsV0FBV3hDLHlFQUFXOztvQ0FBRTtvQ0FBS3NELFNBQVMxQixLQUFLOzs7Ozs7OzBDQUMvQyw4REFBQ29DOzBDQUFHVixTQUFTVyxXQUFXLENBQUNSLEtBQUssQ0FBQyxHQUFHLE9BQU87Ozs7OzswQ0FDekMsOERBQUNPOzBDQUFHVixTQUFTWSxRQUFROzs7Ozs7O3VCQUxVWixTQUFTYSxFQUFFOzs7Ozs7Ozs7Ozs7QUFXdEQ7R0F4RndCOUQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmV0ZXMvTWFpbi5qcz85YWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiXHJcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vYXBwL3N0eWxlL3BhZ2UubW9kdWxlLmNzc1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgU3Bpbm5lciBmcm9tIFwiLi9TcGlubmVyXCI7XHJcbmltcG9ydCBFcnJvckZldGNoIGZyb20gXCIuL0Vycm9yRmV0Y2hcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3QgW2xpc3RQcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbGlzdENvbXBsZXRlLCBzZXRMaXN0Q29tcGxldGVdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW3RleHRTZWFyY2gsIHNldFRleHRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIilcclxuICBjb25zdCBbaXNFcnJvciwgc2V0SXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFByb2R1Y3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzcG9zdGEgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cy9cIilcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3Bvc3RhLmpzb24oKTtcclxuICAgICAgc2V0UHJvZHVjdChkYXRhKVxyXG4gICAgICBzZXRMaXN0Q29tcGxldGUoZGF0YSlcclxuICAgIH1cclxuICAgIGNhdGNoe1xyXG4gICAgICBzZXRJc0Vycm9yKHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG4gICAgZ2V0UHJvZHVjdCgpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IG9yZGVyQXogPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0QXV4ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PiBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSkpO1xyXG4gICAgc2V0UHJvZHVjdChsaXN0QXV4KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb3JkZXJaYSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGxpc3RBdXggPSBbLi4ubGlzdFByb2R1Y3RdLnNvcnQoKGEsIGIpID0+IGIudGl0bGUubG9jYWxlQ29tcGFyZShhLnRpdGxlKSk7XHJcbiAgICBzZXRQcm9kdWN0KGxpc3RBdXgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvcmRlclByZWNvTWVub3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0QXV4ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PiBhLnByaWNlIC0gYi5wcmljZSk7XHJcbiAgICBzZXRQcm9kdWN0KGxpc3RBdXgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvcmRlclByZWNvTWFpb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBsaXN0QXV4ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLCBiKSA9PiBiLnByaWNlIC0gYS5wcmljZSk7XHJcbiAgICBzZXRQcm9kdWN0KGxpc3RBdXgpXHJcbiAgfVxyXG5cclxuIGNvbnN0IHNlYXJjaCA9ICh0ZXh0KSA9PiB7XHJcbiAgICBzZXRUZXh0U2VhcmNoKHRleHQpXHJcblxyXG4gICAgaWYgKHRleHQudHJpbSgpID09IFwiXCIpIHtcclxuICAgICAgc2V0TGlzdFByb2R1Y3QobGlzdENvbXBsZXRlKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICAgY29uc3QgbmV3TGlzdCA9IGxpc3RQcm9kdWN0LmZpbHRlcigocHJvZHVjdCkgPT4gIFxyXG4gICAgICBwcm9kdWN0LnRpdGxlLnRvVXBwZXJDYXNlKCkudHJpbSgpLmluY2x1ZGVzKHRleHRTZWFyY2gudG9VcHBlckNhc2UoKS50cmltKCkpXHJcbiAgICAgICk7XHJcbiAgICAgc2V0TGlzdFByb2R1Y3QobmV3TGlzdCk7XHJcbiAgfVxyXG5cclxuaWYoaXNFcnJvciA9PSB0cnVlKXtcclxuICByZXR1cm4gPEVycm9yRmV0Y2gvPlxyXG59XHJcblxyXG4gIGlmIChsaXN0Q29tcGxldGVbMF0gPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIDxTcGlubmVyIC8+XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZpbHRlcnN9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGV4dFNlYXJjaH0gcGxhY2Vob2xkZXI9XCJQZXNxdWlzZSB1bSBwcm9kdXRvXCIgb25DaGFuZ2U9eyhldmVudCA9PiBzZWFyY2goZXZlbnQudGFyZ2V0LnZhbHVlKSl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJBen0+QSAtIFo8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJaYX0+WiAtIEE8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJQcmVjb01lbm9yfT5NZW5vciBwcmXDp288L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJQcmVjb01haW9yfT5NYWlvciBwcmXDp288L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGUuY29ycG99PlxyXG4gICAgICAgIHtsaXN0UHJvZHVjdC5tYXAoKHByb2R1Y3RzKSA9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcmR9IGtleT17cHJvZHVjdHMuaWR9PlxyXG4gICAgICAgICAgICA8aDE+e3Byb2R1Y3RzLnRpdGxlLnNsaWNlKDAsIDE2KSArIFwiLi4uXCJ9PC9oMT5cclxuICAgICAgICAgICAgPEltYWdlIHdpZHRoPXszMDB9IGhlaWdodD17MzAwfSBzcmM9e3Byb2R1Y3RzLmltYWdlfSAvPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZS5wcmVjb30+UiQ6IHtwcm9kdWN0cy5wcmljZX08L2gzPlxyXG4gICAgICAgICAgICA8cD57cHJvZHVjdHMuZGVzY3JpcHRpb24uc2xpY2UoMCwgMTAwKSArIFwiLi4uXCJ9PC9wPlxyXG4gICAgICAgICAgICA8cD57cHJvZHVjdHMuY2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU3Bpbm5lciIsIkVycm9yRmV0Y2giLCJNYWluIiwibGlzdFByb2R1Y3QiLCJzZXRQcm9kdWN0IiwibGlzdENvbXBsZXRlIiwic2V0TGlzdENvbXBsZXRlIiwidGV4dFNlYXJjaCIsInNldFRleHRTZWFyY2giLCJpc0Vycm9yIiwic2V0SXNFcnJvciIsImdldFByb2R1Y3QiLCJyZXNwb3N0YSIsImZldGNoIiwiZGF0YSIsImpzb24iLCJvcmRlckF6IiwibGlzdEF1eCIsInNvcnQiLCJhIiwiYiIsInRpdGxlIiwibG9jYWxlQ29tcGFyZSIsIm9yZGVyWmEiLCJvcmRlclByZWNvTWVub3IiLCJwcmljZSIsIm9yZGVyUHJlY29NYWlvciIsInNlYXJjaCIsInRleHQiLCJ0cmltIiwic2V0TGlzdFByb2R1Y3QiLCJuZXdMaXN0IiwiZmlsdGVyIiwicHJvZHVjdCIsInRvVXBwZXJDYXNlIiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJmaWx0ZXJzIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwibWFpbiIsImNvcnBvIiwibWFwIiwicHJvZHVjdHMiLCJjYXJkIiwiaDEiLCJzbGljZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiaW1hZ2UiLCJoMyIsInByZWNvIiwicCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/componetes/Main.js\n"));

/***/ })

});