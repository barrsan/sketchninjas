webpackHotUpdate_N_E("pages/works/[slug]",{

/***/ "./src/components/PageError/PageError.tsx":
/*!************************************************!*\
  !*** ./src/components/PageError/PageError.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PageTitle */ \"./src/components/PageTitle/index.ts\");\n/* harmony import */ var _components_Buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Buttons */ \"./src/components/Buttons/index.ts\");\n/* harmony import */ var _lib_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/i18n */ \"./src/lib/i18n/index.ts\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/constants */ \"./src/constants/index.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/a1ex/webdev/sketch-ninjas/sketch-ninjas-website/src/components/PageError/PageError.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar pageErrorKeys = _lib_i18n__WEBPACK_IMPORTED_MODULE_4__[\"keys\"].pageErrorKeys;\nvar OOPS = pageErrorKeys.OOPS,\n    ERROR_CODE = pageErrorKeys.ERROR_CODE,\n    PAGE_NOT_FOUND = pageErrorKeys.PAGE_NOT_FOUND,\n    SOMETHING_WENT_WRONG = pageErrorKeys.SOMETHING_WENT_WRONG,\n    BACK_HOME = pageErrorKeys.BACK_HOME;\nvar ERROR_404_IMAGE = '/assets/images/404-error.png';\nvar ERROR_500_IMAGE = '/assets/images/500-error.png';\nvar Wrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  componentId: \"sc-1w9l8c3-0\"\n})([\"display:flex;flex-direction:column;justify-content:center;align-items:center;\"]);\n_c = Wrapper;\nvar Main = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  componentId: \"sc-1w9l8c3-1\"\n})([\"display:flex;flex-direction:column;align-items:center;\"]);\n_c2 = Main;\nvar Message = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  componentId: \"sc-1w9l8c3-2\"\n})([\"font-size:18px;line-height:1.5;text-align:center;color:\", \";\"], _constants__WEBPACK_IMPORTED_MODULE_5__[\"colors\"].BLACK);\n_c3 = Message;\nvar ButtonWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  componentId: \"sc-1w9l8c3-3\"\n})([\"padding:30px 0;width:100%;max-width:262px;\"]);\n_c4 = ButtonWrapper;\nvar ErrorImageWrapper = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  componentId: \"sc-1w9l8c3-4\"\n})([\"margin-bottom:60px;\"]);\n_c5 = ErrorImageWrapper;\nvar ErrorImage = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img.withConfig({\n  componentId: \"sc-1w9l8c3-5\"\n})([\"display:block;width:100%;max-width:840px;\"]);\n_c6 = ErrorImage;\n\nvar PageError = function PageError(_ref) {\n  _s();\n\n  var errorCode = _ref.errorCode;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('en'),\n      currentLanguage = _useState[0],\n      setCurrentLanguage = _useState[1];\n\n  var tTitle = Object(_lib_i18n__WEBPACK_IMPORTED_MODULE_4__[\"translation\"])(OOPS, currentLanguage);\n  var tSubtitle = Object(_lib_i18n__WEBPACK_IMPORTED_MODULE_4__[\"translation\"])(ERROR_CODE, currentLanguage);\n  var tMessage = Object(_lib_i18n__WEBPACK_IMPORTED_MODULE_4__[\"translation\"])(errorCode === 404 ? PAGE_NOT_FOUND : SOMETHING_WENT_WRONG, currentLanguage);\n  var tButtonLabel = Object(_lib_i18n__WEBPACK_IMPORTED_MODULE_4__[\"translation\"])(BACK_HOME, currentLanguage);\n  var errorCodeMessage = \"\".concat(tSubtitle, \": \").concat(errorCode);\n  var imageSrc = errorCode === 404 ? ERROR_404_IMAGE : ERROR_500_IMAGE;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // @ts-ignore\n    var userLang = navigator.language || navigator.userLanguage;\n    setCurrentLanguage(userLang);\n  }, []);\n  return __jsx(Wrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 7\n    }\n  }, __jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__[\"PageTitle\"], {\n    title: tTitle,\n    subtitle: errorCodeMessage,\n    isErrorPage: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }), __jsx(Main, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 9\n    }\n  }, __jsx(ErrorImageWrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 11\n    }\n  }, __jsx(ErrorImage, {\n    src: imageSrc,\n    alt: errorCodeMessage,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  })), __jsx(Message, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 11\n    }\n  }, tMessage), __jsx(ButtonWrapper, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 11\n    }\n  }, __jsx(_components_Buttons__WEBPACK_IMPORTED_MODULE_3__[\"SecondaryButton\"], {\n    block: true,\n    asLink: true,\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, tButtonLabel)))));\n};\n\n_s(PageError, \"cMCHjbyjwnsHFUd9PeCD7soxopg=\");\n\n_c7 = PageError;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageError);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"Wrapper\");\n$RefreshReg$(_c2, \"Main\");\n$RefreshReg$(_c3, \"Message\");\n$RefreshReg$(_c4, \"ButtonWrapper\");\n$RefreshReg$(_c5, \"ErrorImageWrapper\");\n$RefreshReg$(_c6, \"ErrorImage\");\n$RefreshReg$(_c7, \"PageError\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZUVycm9yL1BhZ2VFcnJvci50c3g/YWZjZCJdLCJuYW1lcyI6WyJwYWdlRXJyb3JLZXlzIiwia2V5cyIsIk9PUFMiLCJFUlJPUl9DT0RFIiwiUEFHRV9OT1RfRk9VTkQiLCJTT01FVEhJTkdfV0VOVF9XUk9ORyIsIkJBQ0tfSE9NRSIsIkVSUk9SXzQwNF9JTUFHRSIsIkVSUk9SXzUwMF9JTUFHRSIsIldyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJNYWluIiwiTWVzc2FnZSIsInAiLCJjb2xvcnMiLCJCTEFDSyIsIkJ1dHRvbldyYXBwZXIiLCJFcnJvckltYWdlV3JhcHBlciIsIkVycm9ySW1hZ2UiLCJpbWciLCJQYWdlRXJyb3IiLCJlcnJvckNvZGUiLCJ1c2VTdGF0ZSIsImN1cnJlbnRMYW5ndWFnZSIsInNldEN1cnJlbnRMYW5ndWFnZSIsInRUaXRsZSIsInQiLCJ0U3VidGl0bGUiLCJ0TWVzc2FnZSIsInRCdXR0b25MYWJlbCIsImVycm9yQ29kZU1lc3NhZ2UiLCJpbWFnZVNyYyIsInVzZUVmZmVjdCIsInVzZXJMYW5nIiwibmF2aWdhdG9yIiwibGFuZ3VhZ2UiLCJ1c2VyTGFuZ3VhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBTVFBLGEsR0FBa0JDLDhDLENBQWxCRCxhO0lBRU5FLEksR0FLRUYsYSxDQUxGRSxJO0lBQ0FDLFUsR0FJRUgsYSxDQUpGRyxVO0lBQ0FDLGMsR0FHRUosYSxDQUhGSSxjO0lBQ0FDLG9CLEdBRUVMLGEsQ0FGRkssb0I7SUFDQUMsUyxHQUNFTixhLENBREZNLFM7QUFHRixJQUFNQyxlQUFlLEdBQUcsOEJBQXhCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLDhCQUF4QjtBQUVBLElBQU1DLE9BQU8sZ0JBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBLHFGQUFiO0tBQU1GLE87QUFPTixJQUFNRyxJ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ZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBQYWdlVGl0bGUgfSBmcm9tICdAL2NvbXBvbmVudHMvUGFnZVRpdGxlJztcbmltcG9ydCB7IFNlY29uZGFyeUJ1dHRvbiB9IGZyb20gJ0AvY29tcG9uZW50cy9CdXR0b25zJztcbmltcG9ydCB7IHRyYW5zbGF0aW9uIGFzIHQsIGtleXMgfSBmcm9tICdAL2xpYi9pMThuJztcbmltcG9ydCB7IGNvbG9ycyB9IGZyb20gJ0AvY29uc3RhbnRzJztcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGVycm9yQ29kZTogbnVtYmVyO1xufVxuXG5jb25zdCB7IHBhZ2VFcnJvcktleXMgfSA9IGtleXM7XG5jb25zdCB7XG4gIE9PUFMsXG4gIEVSUk9SX0NPREUsXG4gIFBBR0VfTk9UX0ZPVU5ELFxuICBTT01FVEhJTkdfV0VOVF9XUk9ORyxcbiAgQkFDS19IT01FLFxufSA9IHBhZ2VFcnJvcktleXM7XG5cbmNvbnN0IEVSUk9SXzQwNF9JTUFHRSA9ICcvYXNzZXRzL2ltYWdlcy80MDQtZXJyb3IucG5nJztcbmNvbnN0IEVSUk9SXzUwMF9JTUFHRSA9ICcvYXNzZXRzL2ltYWdlcy81MDAtZXJyb3IucG5nJztcblxuY29uc3QgV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgTWFpbiA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5jb25zdCBNZXNzYWdlID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogJHtjb2xvcnMuQkxBQ0t9O1xuYDtcblxuY29uc3QgQnV0dG9uV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDMwcHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMjYycHg7XG5gO1xuXG5jb25zdCBFcnJvckltYWdlV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG5gO1xuXG5jb25zdCBFcnJvckltYWdlID0gc3R5bGVkLmltZ2BcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDg0MHB4O1xuYDtcblxuY29uc3QgUGFnZUVycm9yOiBGQzxJUHJvcHM+ID0gKHsgZXJyb3JDb2RlIH06IElQcm9wcykgPT4ge1xuICBjb25zdCBbY3VycmVudExhbmd1YWdlLCBzZXRDdXJyZW50TGFuZ3VhZ2VdID0gdXNlU3RhdGUoJ2VuJyk7XG5cbiAgY29uc3QgdFRpdGxlID0gdChPT1BTLCBjdXJyZW50TGFuZ3VhZ2UpO1xuICBjb25zdCB0U3VidGl0bGUgPSB0KEVSUk9SX0NPREUsIGN1cnJlbnRMYW5ndWFnZSk7XG4gIGNvbnN0IHRNZXNzYWdlID0gdChcbiAgICBlcnJvckNvZGUgPT09IDQwNCA/IFBBR0VfTk9UX0ZPVU5EIDogU09NRVRISU5HX1dFTlRfV1JPTkcsXG4gICAgY3VycmVudExhbmd1YWdlLFxuICApO1xuICBjb25zdCB0QnV0dG9uTGFiZWwgPSB0KEJBQ0tfSE9NRSwgY3VycmVudExhbmd1YWdlKTtcblxuICBjb25zdCBlcnJvckNvZGVNZXNzYWdlID0gYCR7dFN1YnRpdGxlfTogJHtlcnJvckNvZGV9YDtcbiAgY29uc3QgaW1hZ2VTcmMgPSBlcnJvckNvZGUgPT09IDQwNCA/IEVSUk9SXzQwNF9JTUFHRSA6IEVSUk9SXzUwMF9JTUFHRTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCB1c2VyTGFuZyA9IG5hdmlnYXRvci5sYW5ndWFnZSB8fCBuYXZpZ2F0b3IudXNlckxhbmd1YWdlO1xuICAgIHNldEN1cnJlbnRMYW5ndWFnZSh1c2VyTGFuZyk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT17dFRpdGxlfSBzdWJ0aXRsZT17ZXJyb3JDb2RlTWVzc2FnZX0gaXNFcnJvclBhZ2UgLz5cbiAgICAgICAgPE1haW4+XG4gICAgICAgICAgPEVycm9ySW1hZ2VXcmFwcGVyPlxuICAgICAgICAgICAgPEVycm9ySW1hZ2Ugc3JjPXtpbWFnZVNyY30gYWx0PXtlcnJvckNvZGVNZXNzYWdlfSAvPlxuICAgICAgICAgIDwvRXJyb3JJbWFnZVdyYXBwZXI+XG4gICAgICAgICAgPE1lc3NhZ2U+e3RNZXNzYWdlfTwvTWVzc2FnZT5cbiAgICAgICAgICA8QnV0dG9uV3JhcHBlcj5cbiAgICAgICAgICAgIDxTZWNvbmRhcnlCdXR0b24gYmxvY2sgYXNMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIHt0QnV0dG9uTGFiZWx9XG4gICAgICAgICAgICA8L1NlY29uZGFyeUJ1dHRvbj5cbiAgICAgICAgICA8L0J1dHRvbldyYXBwZXI+XG4gICAgICAgIDwvTWFpbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvV3JhcHBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VFcnJvcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/PageError/PageError.tsx\n");

/***/ })

})