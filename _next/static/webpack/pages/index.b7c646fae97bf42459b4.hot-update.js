webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/PageSmoothScroll/PageSmoothScroll.tsx":
/*!**************************************************************!*\
  !*** ./src/components/PageSmoothScroll/PageSmoothScroll.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"./node_modules/gsap/dist/ScrollTrigger.js\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var smooth_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! smooth-scrollbar */ \"./node_modules/smooth-scrollbar/index.js\");\n/* harmony import */ var use_mobile_detect_hook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! use-mobile-detect-hook */ \"./node_modules/use-mobile-detect-hook/src/index.js\");\n/* harmony import */ var use_mobile_detect_hook__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(use_mobile_detect_hook__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useSmoothScrollViewport__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useSmoothScrollViewport */ \"./src/hooks/useSmoothScrollViewport.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/a1ex/webdev/sketch-ninjas/sketch-ninjas-website/src/components/PageSmoothScroll/PageSmoothScroll.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Scrollable = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  componentId: \"sc-1ykt2lz-0\"\n})([\"width:100%;height:100vh;overflow:auto;\"]);\n_c = Scrollable;\nvar ScrollableInner = /*#__PURE__*/styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  componentId: \"sc-1ykt2lz-1\"\n})([\"position:relative;overflow:hidden;height:100%;\"]);\n_c2 = ScrollableInner;\n\nvar PageSmoothScroll = function PageSmoothScroll(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useViewport = Object(_hooks_useSmoothScrollViewport__WEBPACK_IMPORTED_MODULE_5__[\"useViewport\"])(),\n      setSmoothScrollViewport = _useViewport.setSmoothScrollViewport,\n      setScrollYPos = _useViewport.setScrollYPos,\n      setScrollBar = _useViewport.setScrollBar;\n\n  var viewportRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var viewportInnerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  var detectMobile = use_mobile_detect_hook__WEBPACK_IMPORTED_MODULE_4___default()();\n  var isMobile = detectMobile.isMobile();\n\n  var updateScrollPosition = function updateScrollPosition(scrollBar) {\n    setScrollYPos(scrollBar.offset.y);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var bodyScrollBar = null;\n    var isSSR = false;\n\n    if (!isSSR) {\n      if (isMobile) {\n        document.querySelector('body').setAttribute('style', 'overflow-x: auto; overflow-y: auto;');\n        document.getElementById('__next').setAttribute('style', 'height: auto;');\n        viewportRef.current.setAttribute('style', 'height: 100%');\n        viewportInnerRef.current.setAttribute('style', 'height: auto; overflow: auto');\n        setSmoothScrollViewport(window);\n      } else {\n        bodyScrollBar = smooth_scrollbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init(viewportRef.current, {\n          // renderByPixels: false,\n          // alwaysShowTracks: false,\n          continuousScrolling: false\n        });\n        gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__[\"ScrollTrigger\"].scrollerProxy(viewportRef.current, {\n          scrollTop: function scrollTop(value) {\n            if (arguments.length) {\n              bodyScrollBar.scrollTop = value;\n            }\n\n            return bodyScrollBar.scrollTop;\n          }\n        });\n        setSmoothScrollViewport(viewportRef.current);\n        setScrollBar(bodyScrollBar);\n        bodyScrollBar.addListener(updateScrollPosition);\n        bodyScrollBar.addListener(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__[\"ScrollTrigger\"].update);\n      }\n    }\n\n    return function () {\n      if (!isSSR && !isMobile) {\n        smooth_scrollbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"].destroy(viewportRef.current);\n        bodyScrollBar.removeListener(updateScrollPosition);\n        bodyScrollBar.removeListener(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_2__[\"ScrollTrigger\"].update);\n        setScrollYPos(0);\n        setSmoothScrollViewport(null);\n      }\n    };\n  }, [viewportRef, isMobile]);\n  return __jsx(Scrollable, {\n    ref: viewportRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 5\n    }\n  }, __jsx(ScrollableInner, {\n    ref: viewportInnerRef,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }\n  }, children));\n};\n\n_s(PageSmoothScroll, \"qEe4271Z3cEvarJ48fYeBzHjIdA=\", false, function () {\n  return [_hooks_useSmoothScrollViewport__WEBPACK_IMPORTED_MODULE_5__[\"useViewport\"], use_mobile_detect_hook__WEBPACK_IMPORTED_MODULE_4___default.a];\n});\n\n_c3 = PageSmoothScroll;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PageSmoothScroll);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Scrollable\");\n$RefreshReg$(_c2, \"ScrollableInner\");\n$RefreshReg$(_c3, \"PageSmoothScroll\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZVNtb290aFNjcm9sbC9QYWdlU21vb3RoU2Nyb2xsLnRzeD84YWU4Il0sIm5hbWVzIjpbIlNjcm9sbGFibGUiLCJzdHlsZWQiLCJkaXYiLCJTY3JvbGxhYmxlSW5uZXIiLCJQYWdlU21vb3RoU2Nyb2xsIiwiY2hpbGRyZW4iLCJ1c2VWaWV3cG9ydCIsInNldFNtb290aFNjcm9sbFZpZXdwb3J0Iiwic2V0U2Nyb2xsWVBvcyIsInNldFNjcm9sbEJhciIsInZpZXdwb3J0UmVmIiwidXNlUmVmIiwidmlld3BvcnRJbm5lclJlZiIsImRldGVjdE1vYmlsZSIsInVzZU1vYmlsZURldGVjdCIsImlzTW9iaWxlIiwidXBkYXRlU2Nyb2xsUG9zaXRpb24iLCJzY3JvbGxCYXIiLCJvZmZzZXQiLCJ5IiwidXNlRWZmZWN0IiwiYm9keVNjcm9sbEJhciIsImlzU1NSIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW50Iiwid2luZG93IiwiU2Nyb2xsQmFyIiwiaW5pdCIsImNvbnRpbnVvdXNTY3JvbGxpbmciLCJTY3JvbGxUcmlnZ2VyIiwic2Nyb2xsZXJQcm94eSIsInNjcm9sbFRvcCIsInZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYWRkTGlzdGVuZXIiLCJ1cGRhdGUiLCJkZXN0cm95IiwicmVtb3ZlTGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSxJQUFNQSxVQUFVLGdCQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQSw4Q0FBaEI7S0FBTUYsVTtBQU1OLElBQU1HLGVBQWUsZ0JBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBLHNEQUFyQjtNQUFNQyxlOztBQU1OLElBQU1DLGdCQUE0QixHQUFHLFNBQS9CQSxnQkFBK0IsT0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUNQLFFBQXpDLENBREYsQ0FERjtBQUtELENBM0VEOztHQUFNRCxnQjtVQUtBRSwwRSxFQUtpQlEsNkQ7OztNQVZqQlYsZ0I7QUE2RVNBLCtFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUGFnZVNtb290aFNjcm9sbC9QYWdlU21vb3RoU2Nyb2xsLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCB1c2VFZmZlY3QsIHVzZVJlZiwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXInO1xuaW1wb3J0IFNjcm9sbEJhciBmcm9tICdzbW9vdGgtc2Nyb2xsYmFyJztcbmltcG9ydCB1c2VNb2JpbGVEZXRlY3QgZnJvbSAndXNlLW1vYmlsZS1kZXRlY3QtaG9vayc7XG5pbXBvcnQgeyB1c2VWaWV3cG9ydCB9IGZyb20gJ0AvaG9va3MvdXNlU21vb3RoU2Nyb2xsVmlld3BvcnQnO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuY29uc3QgU2Nyb2xsYWJsZSA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbmA7XG5cbmNvbnN0IFNjcm9sbGFibGVJbm5lciA9IHN0eWxlZC5kaXZgXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuYDtcblxuY29uc3QgUGFnZVNtb290aFNjcm9sbDogRkM8SVByb3BzPiA9ICh7IGNoaWxkcmVuIH06IElQcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgc2V0U21vb3RoU2Nyb2xsVmlld3BvcnQsXG4gICAgc2V0U2Nyb2xsWVBvcyxcbiAgICBzZXRTY3JvbGxCYXIsXG4gIH0gPSB1c2VWaWV3cG9ydCgpO1xuXG4gIGNvbnN0IHZpZXdwb3J0UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuICBjb25zdCB2aWV3cG9ydElubmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PigpO1xuXG4gIGNvbnN0IGRldGVjdE1vYmlsZSA9IHVzZU1vYmlsZURldGVjdCgpO1xuXG4gIGNvbnN0IGlzTW9iaWxlID0gZGV0ZWN0TW9iaWxlLmlzTW9iaWxlKCk7XG5cbiAgY29uc3QgdXBkYXRlU2Nyb2xsUG9zaXRpb24gPSAoc2Nyb2xsQmFyOiBhbnkpID0+IHtcbiAgICBzZXRTY3JvbGxZUG9zKHNjcm9sbEJhci5vZmZzZXQueSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYm9keVNjcm9sbEJhciA9IG51bGw7XG4gICAgY29uc3QgaXNTU1IgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcblxuICAgIGlmICghaXNTU1IpIHtcbiAgICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbiAgICAgICAgICAuc2V0QXR0cmlidXRlKCdzdHlsZScsICdvdmVyZmxvdy14OiBhdXRvOyBvdmVyZmxvdy15OiBhdXRvOycpO1xuICAgICAgICBkb2N1bWVudFxuICAgICAgICAgIC5nZXRFbGVtZW50QnlJZCgnX19uZXh0JylcbiAgICAgICAgICAuc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6IGF1dG87Jyk7XG4gICAgICAgIHZpZXdwb3J0UmVmLmN1cnJlbnQuc2V0QXR0cmlidXRlKCdzdHlsZScsICdoZWlnaHQ6IDEwMCUnKTtcbiAgICAgICAgdmlld3BvcnRJbm5lclJlZi5jdXJyZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAnc3R5bGUnLFxuICAgICAgICAgICdoZWlnaHQ6IGF1dG87IG92ZXJmbG93OiBhdXRvJyxcbiAgICAgICAgKTtcbiAgICAgICAgc2V0U21vb3RoU2Nyb2xsVmlld3BvcnQod2luZG93KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJvZHlTY3JvbGxCYXIgPSBTY3JvbGxCYXIuaW5pdCh2aWV3cG9ydFJlZi5jdXJyZW50LCB7XG4gICAgICAgICAgLy8gcmVuZGVyQnlQaXhlbHM6IGZhbHNlLFxuICAgICAgICAgIC8vIGFsd2F5c1Nob3dUcmFja3M6IGZhbHNlLFxuICAgICAgICAgIGNvbnRpbnVvdXNTY3JvbGxpbmc6IGZhbHNlLFxuICAgICAgICB9KTtcblxuICAgICAgICBTY3JvbGxUcmlnZ2VyLnNjcm9sbGVyUHJveHkodmlld3BvcnRSZWYuY3VycmVudCwge1xuICAgICAgICAgIHNjcm9sbFRvcCh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgYm9keVNjcm9sbEJhci5zY3JvbGxUb3AgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBib2R5U2Nyb2xsQmFyLnNjcm9sbFRvcDtcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRTbW9vdGhTY3JvbGxWaWV3cG9ydCh2aWV3cG9ydFJlZi5jdXJyZW50KTtcbiAgICAgICAgc2V0U2Nyb2xsQmFyKGJvZHlTY3JvbGxCYXIpO1xuXG4gICAgICAgIGJvZHlTY3JvbGxCYXIuYWRkTGlzdGVuZXIodXBkYXRlU2Nyb2xsUG9zaXRpb24pO1xuICAgICAgICBib2R5U2Nyb2xsQmFyLmFkZExpc3RlbmVyKFNjcm9sbFRyaWdnZXIudXBkYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGlmICghaXNTU1IgJiYgIWlzTW9iaWxlKSB7XG4gICAgICAgIFNjcm9sbEJhci5kZXN0cm95KHZpZXdwb3J0UmVmLmN1cnJlbnQpO1xuICAgICAgICBib2R5U2Nyb2xsQmFyIS5yZW1vdmVMaXN0ZW5lcih1cGRhdGVTY3JvbGxQb3NpdGlvbik7XG4gICAgICAgIGJvZHlTY3JvbGxCYXIhLnJlbW92ZUxpc3RlbmVyKFNjcm9sbFRyaWdnZXIudXBkYXRlKTtcbiAgICAgICAgc2V0U2Nyb2xsWVBvcygwKTtcbiAgICAgICAgc2V0U21vb3RoU2Nyb2xsVmlld3BvcnQobnVsbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW3ZpZXdwb3J0UmVmLCBpc01vYmlsZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPFNjcm9sbGFibGUgcmVmPXt2aWV3cG9ydFJlZn0+XG4gICAgICA8U2Nyb2xsYWJsZUlubmVyIHJlZj17dmlld3BvcnRJbm5lclJlZn0+e2NoaWxkcmVufTwvU2Nyb2xsYWJsZUlubmVyPlxuICAgIDwvU2Nyb2xsYWJsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VTbW9vdGhTY3JvbGw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/PageSmoothScroll/PageSmoothScroll.tsx\n");

/***/ })

})