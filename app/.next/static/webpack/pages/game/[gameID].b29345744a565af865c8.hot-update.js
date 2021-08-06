/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game/[gameID]",{

/***/ "./components/Location/Location.js":
/*!*****************************************!*\
  !*** ./components/Location/Location.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_pleduc_Projects_boat_game_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/constants */ \"../constants/constants.js\");\n/* harmony import */ var _contexts_gameContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/gameContext */ \"./contexts/gameContext.js\");\n/* harmony import */ var _styles_Location_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Location.module.css */ \"./styles/Location.module.css\");\n/* harmony import */ var _styles_Location_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Location_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/pleduc/Projects/boat-game/app/components/Location/Location.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar F = _constants_constants__WEBPACK_IMPORTED_MODULE_3__.TYPES.FISH;\nvar L = _constants_constants__WEBPACK_IMPORTED_MODULE_3__.TYPES.LOCATION;\n\nvar Location = function Location(_ref) {\n  _s();\n\n  var name = _ref.name;\n\n  var _useGameContext = (0,_contexts_gameContext__WEBPACK_IMPORTED_MODULE_4__.useGameContext)(),\n      gameState = _useGameContext.gameState;\n\n  var locations = gameState.locations;\n  console.log(locations);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Location_module_css__WEBPACK_IMPORTED_MODULE_5___default().location),\n    children: locations && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [_constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCATION[name].name, Object.entries(locations[name]).map(function (_ref2, k) {\n        var _ref3 = (0,_Users_pleduc_Projects_boat_game_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, 2),\n            fish = _ref3[0],\n            stock = _ref3[1];\n\n        var _LOCATION$name$fish$F = _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCATION[name].fish[F[fish]],\n            max = _LOCATION$name$fish$F.max,\n            regen = _LOCATION$name$fish$F.regen;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [_constants_constants__WEBPACK_IMPORTED_MODULE_3__.FISH[F[fish]].name, \" stock: \", stock, \"/\", max, \" +\", regen]\n        }, k, true, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 15\n        }, _this);\n      })]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Location, \"ToPhDMT6exH0hIv+GrAmnxxP6s0=\", false, function () {\n  return [_contexts_gameContext__WEBPACK_IMPORTED_MODULE_4__.useGameContext];\n});\n\n_c = Location;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Location);\n\nvar _c;\n\n$RefreshReg$(_c, \"Location\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2NhdGlvbi9Mb2NhdGlvbi5qcz80ZmM0Il0sIm5hbWVzIjpbIkYiLCJUWVBFUyIsIkwiLCJMb2NhdGlvbiIsIm5hbWUiLCJ1c2VHYW1lQ29udGV4dCIsImdhbWVTdGF0ZSIsImxvY2F0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJMT0NBVElPTiIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJrIiwiZmlzaCIsInN0b2NrIiwibWF4IiwicmVnZW4iLCJGSVNIIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxDQUFDLEdBQUdDLDREQUFWO0FBQ0EsSUFBTUMsQ0FBQyxHQUFHRCxnRUFBVjs7QUFFQSxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFjO0FBQUE7O0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXOztBQUFBLHdCQUNQQyxxRUFBYyxFQURQO0FBQUEsTUFDckJDLFNBRHFCLG1CQUNyQkEsU0FEcUI7O0FBQUEsTUFFckJDLFNBRnFCLEdBRVBELFNBRk8sQ0FFckJDLFNBRnFCO0FBRzdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FBWjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFRyw2RUFBaEI7QUFBQSxjQUNHSCxTQUFTLGlCQUNSO0FBQUEsaUJBQ0dJLDBEQUFRLENBQUNQLElBQUQsQ0FBUixDQUFlQSxJQURsQixFQUVHUSxNQUFNLENBQUNDLE9BQVAsQ0FBZU4sU0FBUyxDQUFDSCxJQUFELENBQXhCLEVBQWdDVSxHQUFoQyxDQUFvQyxpQkFBZ0JDLENBQWhCLEVBQXNCO0FBQUE7QUFBQSxZQUFwQkMsSUFBb0I7QUFBQSxZQUFkQyxLQUFjOztBQUFBLG9DQUNsQ04sMERBQVEsQ0FBQ1AsSUFBRCxDQUFSLENBQWVZLElBQWYsQ0FBb0JoQixDQUFDLENBQUNnQixJQUFELENBQXJCLENBRGtDO0FBQUEsWUFDakRFLEdBRGlELHlCQUNqREEsR0FEaUQ7QUFBQSxZQUM1Q0MsS0FENEMseUJBQzVDQSxLQUQ0QztBQUV6RCw0QkFDRTtBQUFBLHFCQUNHQyxzREFBSSxDQUFDcEIsQ0FBQyxDQUFDZ0IsSUFBRCxDQUFGLENBQUosQ0FBY1osSUFEakIsY0FDK0JhLEtBRC9CLE9BQ3VDQyxHQUR2QyxRQUM4Q0MsS0FEOUM7QUFBQSxXQUFVSixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFLRCxPQVBBLENBRkg7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlCRCxDQXJCRDs7R0FBTVosUTtVQUNrQkUsaUU7OztLQURsQkYsUTtBQXVCTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTG9jYXRpb24vTG9jYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUWVBFUywgTE9DQVRJT04sIEZJU0ggfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdXNlR2FtZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvZ2FtZUNvbnRleHRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0xvY2F0aW9uLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgRiA9IFRZUEVTLkZJU0g7XG5jb25zdCBMID0gVFlQRVMuTE9DQVRJT047XG5cbmNvbnN0IExvY2F0aW9uID0gKHsgbmFtZSB9KSA9PiB7XG4gIGNvbnN0IHsgZ2FtZVN0YXRlIH0gPSB1c2VHYW1lQ29udGV4dCgpO1xuICBjb25zdCB7IGxvY2F0aW9ucyB9ID0gZ2FtZVN0YXRlO1xuICBjb25zb2xlLmxvZyhsb2NhdGlvbnMpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb259PlxuICAgICAge2xvY2F0aW9ucyAmJiAoXG4gICAgICAgIDw+XG4gICAgICAgICAge0xPQ0FUSU9OW25hbWVdLm5hbWV9XG4gICAgICAgICAge09iamVjdC5lbnRyaWVzKGxvY2F0aW9uc1tuYW1lXSkubWFwKChbZmlzaCwgc3RvY2tdLCBrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IG1heCwgcmVnZW4gfSA9IExPQ0FUSU9OW25hbWVdLmZpc2hbRltmaXNoXV07XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17a30+XG4gICAgICAgICAgICAgICAge0ZJU0hbRltmaXNoXV0ubmFtZX0gc3RvY2s6IHtzdG9ja30ve21heH0gK3tyZWdlbn1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Location/Location.js\n");

/***/ })

});