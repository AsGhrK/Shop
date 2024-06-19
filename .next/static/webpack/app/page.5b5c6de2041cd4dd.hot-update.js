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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _app_style_page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/style/page.module.css */ \"(app-pages-browser)/./src/app/style/page.module.css\");\n/* harmony import */ var _app_style_page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_style_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    const [listProduct, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getProduct = async ()=>{\n            const resposta = await fetch(\"https://fakestoreapi.com/products/\");\n            const data = await resposta.json();\n            setProduct(data);\n        };\n        getProduct();\n    }, []);\n    const orderAz = ()=>{\n        const listAux = [\n            ...listProduct\n        ].sort((a, b)=>a.title.localeCompare(b.title));\n        setProduct(listAux);\n    };\n    const orderZa = ()=>{\n        const listAux = [\n            ...listProduct\n        ].sort((a, b)=>b.title.localeCompare(a.title));\n        setProduct(listAux);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_style_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().filters),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderAz,\n                            children: \"A - Z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                            lineNumber: 33,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderZa,\n                            children: \"Z - A\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: orderPrecoMenor,\n                            children: \"A - Z\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: order,\n                            children: \"Z - A\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_app_style_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().corpo),\n                children: listProduct.map((products)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_app_style_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: products.title.slice(0, 16) + \"...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                width: 300,\n                                height: 300,\n                                src: products.image\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_app_style_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().preco),\n                                children: [\n                                    \"R$: \",\n                                    products.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: products.description.slice(0, 100) + \"...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: products.category\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, products.id, true, {\n                        fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\laboratorio\\\\picolo\\\\Shop\\\\src\\\\componetes\\\\Main.js\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"XVPPeJ5srsfxej8tSwOC+mjg6kQ=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25ldGVzL01haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzhCO0FBQ2tCO0FBQ0w7QUFHNUIsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsYUFBYUMsV0FBVyxHQUFHSCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1LLGFBQWE7WUFDakIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNO1lBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtZQUNoQ0wsV0FBV0k7UUFDYjtRQUNBSDtJQUNGLEdBQUcsRUFBRTtJQUVQLE1BQU1LLFVBQVU7UUFDYixNQUFNQyxVQUFVO2VBQUlSO1NBQVksQ0FBQ1MsSUFBSSxDQUFDLENBQUNDLEdBQUVDLElBQU1ELEVBQUVFLEtBQUssQ0FBQ0MsYUFBYSxDQUFDRixFQUFFQyxLQUFLO1FBQzVFWCxXQUFXTztJQUNkO0lBRUEsTUFBTU0sVUFBVTtRQUNkLE1BQU1OLFVBQVU7ZUFBSVI7U0FBWSxDQUFDUyxJQUFJLENBQUMsQ0FBQ0MsR0FBRUMsSUFBTUEsRUFBRUMsS0FBSyxDQUFDQyxhQUFhLENBQUNILEVBQUVFLEtBQUs7UUFDNUVYLFdBQVdPO0lBQ2I7SUFFRSxxQkFDRTs7MEJBQ0EsOERBQUNPO2dCQUFJQyxXQUFXcEIsMkVBQWE7MEJBQzdCLDRFQUFDbUI7O3NDQUNHLDhEQUFDRzs0QkFBT0MsU0FBU1o7c0NBQVM7Ozs7OztzQ0FDMUIsOERBQUNXOzRCQUFPQyxTQUFTTDtzQ0FBUzs7Ozs7O3NDQUMxQiw4REFBQ0k7NEJBQU9DLFNBQVNDO3NDQUFpQjs7Ozs7O3NDQUNsQyw4REFBQ0Y7NEJBQU9DLFNBQVNFO3NDQUFPOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHNUIsOERBQUNDO2dCQUFLTixXQUFXcEIseUVBQVc7MEJBQ3pCSSxZQUFZd0IsR0FBRyxDQUFDLENBQUNDLHlCQUNoQiw4REFBQ1Y7d0JBQUlDLFdBQVdwQix3RUFBVTs7MENBQ3hCLDhEQUFDK0I7MENBQUlGLFNBQVNiLEtBQUssQ0FBQ2dCLEtBQUssQ0FBQyxHQUFHLE1BQU07Ozs7OzswQ0FDbkMsOERBQUNqQyxrREFBS0E7Z0NBQUNrQyxPQUFPO2dDQUFLQyxRQUFRO2dDQUFLQyxLQUFLTixTQUFTTyxLQUFLOzs7Ozs7MENBQ25ELDhEQUFDQztnQ0FBR2pCLFdBQVdwQix5RUFBVzs7b0NBQUU7b0NBQUs2QixTQUFTVSxLQUFLOzs7Ozs7OzBDQUMvQyw4REFBQ0M7MENBQUdYLFNBQVNZLFdBQVcsQ0FBQ1QsS0FBSyxDQUFDLEdBQUcsT0FBTzs7Ozs7OzBDQUN6Qyw4REFBQ1E7MENBQUdYLFNBQVNhLFFBQVE7Ozs7Ozs7dUJBTFViLFNBQVNjLEVBQUU7Ozs7Ozs7Ozs7OztBQVdwRDtHQTdDd0J4QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZXRlcy9NYWluLmpzPzlhZTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi9hcHAvc3R5bGUvcGFnZS5tb2R1bGUuY3NzXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICBjb25zdCBbbGlzdFByb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0UHJvZHVjdCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9zdGEgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cy9cIilcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3Bvc3RhLmpzb24oKTtcclxuICAgICAgc2V0UHJvZHVjdChkYXRhKVxyXG4gICAgfVxyXG4gICAgZ2V0UHJvZHVjdCgpXHJcbiAgfSwgW10pXHJcblxyXG5jb25zdCBvcmRlckF6ID0gKCkgPT4ge1xyXG4gICBjb25zdCBsaXN0QXV4ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLGIpID0+IGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKSk7XHJcbiAgIHNldFByb2R1Y3QobGlzdEF1eClcclxufVxyXG5cclxuY29uc3Qgb3JkZXJaYSA9ICgpID0+IHtcclxuICBjb25zdCBsaXN0QXV4ID0gWy4uLmxpc3RQcm9kdWN0XS5zb3J0KChhLGIpID0+IGIudGl0bGUubG9jYWxlQ29tcGFyZShhLnRpdGxlKSk7XHJcbiAgc2V0UHJvZHVjdChsaXN0QXV4KVxyXG59XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZpbHRlcnN9PlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29yZGVyQXp9PkEgLSBaPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvcmRlclphfT5aIC0gQTwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJQcmVjb01lbm9yfT5BIC0gWjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17b3JkZXJ9PlogLSBBPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGUuY29ycG99PlxyXG4gICAgICB7bGlzdFByb2R1Y3QubWFwKChwcm9kdWN0cykgPT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FyZH0ga2V5PXtwcm9kdWN0cy5pZH0+XHJcbiAgICAgICAgICA8aDE+e3Byb2R1Y3RzLnRpdGxlLnNsaWNlKDAsIDE2KSArIFwiLi4uXCJ9PC9oMT5cclxuICAgICAgICAgIDxJbWFnZSB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gc3JjPXtwcm9kdWN0cy5pbWFnZX0gLz5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlLnByZWNvfT5SJDoge3Byb2R1Y3RzLnByaWNlfTwvaDM+XHJcbiAgICAgICAgICA8cD57cHJvZHVjdHMuZGVzY3JpcHRpb24uc2xpY2UoMCwgMTAwKSArIFwiLi4uXCJ9PC9wPlxyXG4gICAgICAgICAgPHA+e3Byb2R1Y3RzLmNhdGVnb3J5fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkltYWdlIiwic3R5bGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1haW4iLCJsaXN0UHJvZHVjdCIsInNldFByb2R1Y3QiLCJnZXRQcm9kdWN0IiwicmVzcG9zdGEiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwib3JkZXJBeiIsImxpc3RBdXgiLCJzb3J0IiwiYSIsImIiLCJ0aXRsZSIsImxvY2FsZUNvbXBhcmUiLCJvcmRlclphIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlsdGVycyIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvcmRlclByZWNvTWVub3IiLCJvcmRlciIsIm1haW4iLCJjb3JwbyIsIm1hcCIsInByb2R1Y3RzIiwiY2FyZCIsImgxIiwic2xpY2UiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImltYWdlIiwiaDMiLCJwcmVjbyIsInByaWNlIiwicCIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/componetes/Main.js\n"));

/***/ })

});