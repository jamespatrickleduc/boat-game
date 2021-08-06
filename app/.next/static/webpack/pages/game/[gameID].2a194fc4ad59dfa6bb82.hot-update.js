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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_pleduc_Projects_boat_game_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/constants */ \"../constants/constants.js\");\n/* harmony import */ var _contexts_gameContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/gameContext */ \"./contexts/gameContext.js\");\n/* harmony import */ var _styles_Location_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Location.module.css */ \"./styles/Location.module.css\");\n/* harmony import */ var _styles_Location_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Location_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/pleduc/Projects/boat-game/app/components/Location/Location.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar F = _constants_constants__WEBPACK_IMPORTED_MODULE_3__.TYPES.FISH;\nvar L = _constants_constants__WEBPACK_IMPORTED_MODULE_3__.TYPES.LOCATION;\n\nvar Location = function Location(_ref) {\n  _s();\n\n  var name = _ref.name;\n\n  var _useGameContext = (0,_contexts_gameContext__WEBPACK_IMPORTED_MODULE_4__.useGameContext)(),\n      gameState = _useGameContext.gameState;\n\n  var players = gameState.players,\n      locations = gameState.locations;\n  var occupants = Object.entries(players).map(function (_ref2) {\n    var _ref3 = (0,_Users_pleduc_Projects_boat_game_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref2, 2),\n        key = _ref3[0],\n        value = _ref3[1];\n\n    if (value.location === name) return key;\n    return false;\n  }) || [];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Location_module_css__WEBPACK_IMPORTED_MODULE_5___default().location),\n    children: locations && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [_constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCATION[name].name, Object.entries(locations[name]).map(function (_ref4, k) {\n        var _ref5 = (0,_Users_pleduc_Projects_boat_game_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref4, 2),\n            fish = _ref5[0],\n            stock = _ref5[1];\n\n        var _LOCATION$name$fish$F = _constants_constants__WEBPACK_IMPORTED_MODULE_3__.LOCATION[name].fish[F[fish]],\n            max = _LOCATION$name$fish$F.max,\n            regen = _LOCATION$name$fish$F.regen;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [_constants_constants__WEBPACK_IMPORTED_MODULE_3__.FISH[F[fish]].name, \" stock: \", stock, \"/\", max, \" +\", regen]\n        }, k, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 15\n        }, _this);\n      }), occupants]\n    }, void 0, true)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Location, \"ToPhDMT6exH0hIv+GrAmnxxP6s0=\", false, function () {\n  return [_contexts_gameContext__WEBPACK_IMPORTED_MODULE_4__.useGameContext];\n});\n\n_c = Location;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Location);\n\nvar _c;\n\n$RefreshReg$(_c, \"Location\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Mb2NhdGlvbi9Mb2NhdGlvbi5qcz80ZmM0Il0sIm5hbWVzIjpbIkYiLCJUWVBFUyIsIkwiLCJMb2NhdGlvbiIsIm5hbWUiLCJ1c2VHYW1lQ29udGV4dCIsImdhbWVTdGF0ZSIsInBsYXllcnMiLCJsb2NhdGlvbnMiLCJvY2N1cGFudHMiLCJPYmplY3QiLCJlbnRyaWVzIiwibWFwIiwia2V5IiwidmFsdWUiLCJsb2NhdGlvbiIsInN0eWxlcyIsIkxPQ0FUSU9OIiwiayIsImZpc2giLCJzdG9jayIsIm1heCIsInJlZ2VuIiwiRklTSCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsQ0FBQyxHQUFHQyw0REFBVjtBQUNBLElBQU1DLENBQUMsR0FBR0QsZ0VBQVY7O0FBRUEsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSx3QkFDUEMscUVBQWMsRUFEUDtBQUFBLE1BQ3JCQyxTQURxQixtQkFDckJBLFNBRHFCOztBQUFBLE1BRXJCQyxPQUZxQixHQUVFRCxTQUZGLENBRXJCQyxPQUZxQjtBQUFBLE1BRVpDLFNBRlksR0FFRUYsU0FGRixDQUVaRSxTQUZZO0FBSTdCLE1BQU1DLFNBQVMsR0FDYkMsTUFBTSxDQUFDQyxPQUFQLENBQWVKLE9BQWYsRUFBd0JLLEdBQXhCLENBQTRCLGlCQUFrQjtBQUFBO0FBQUEsUUFBaEJDLEdBQWdCO0FBQUEsUUFBWEMsS0FBVzs7QUFDNUMsUUFBSUEsS0FBSyxDQUFDQyxRQUFOLEtBQW1CWCxJQUF2QixFQUE2QixPQUFPUyxHQUFQO0FBQzdCLFdBQU8sS0FBUDtBQUNELEdBSEQsS0FHTSxFQUpSO0FBTUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVHLDZFQUFoQjtBQUFBLGNBQ0dSLFNBQVMsaUJBQ1I7QUFBQSxpQkFDR1MsMERBQVEsQ0FBQ2IsSUFBRCxDQUFSLENBQWVBLElBRGxCLEVBRUdNLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSCxTQUFTLENBQUNKLElBQUQsQ0FBeEIsRUFBZ0NRLEdBQWhDLENBQW9DLGlCQUFnQk0sQ0FBaEIsRUFBc0I7QUFBQTtBQUFBLFlBQXBCQyxJQUFvQjtBQUFBLFlBQWRDLEtBQWM7O0FBQUEsb0NBQ2xDSCwwREFBUSxDQUFDYixJQUFELENBQVIsQ0FBZWUsSUFBZixDQUFvQm5CLENBQUMsQ0FBQ21CLElBQUQsQ0FBckIsQ0FEa0M7QUFBQSxZQUNqREUsR0FEaUQseUJBQ2pEQSxHQURpRDtBQUFBLFlBQzVDQyxLQUQ0Qyx5QkFDNUNBLEtBRDRDO0FBRXpELDRCQUNFO0FBQUEscUJBQ0dDLHNEQUFJLENBQUN2QixDQUFDLENBQUNtQixJQUFELENBQUYsQ0FBSixDQUFjZixJQURqQixjQUMrQmdCLEtBRC9CLE9BQ3VDQyxHQUR2QyxRQUM4Q0MsS0FEOUM7QUFBQSxXQUFVSixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFLRCxPQVBBLENBRkgsRUFVR1QsU0FWSDtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBNUJEOztHQUFNTixRO1VBQ2tCRSxpRTs7O0tBRGxCRixRO0FBOEJOLCtEQUFlQSxRQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Mb2NhdGlvbi9Mb2NhdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRZUEVTLCBMT0NBVElPTiwgRklTSCB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB1c2VHYW1lQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9nYW1lQ29udGV4dFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvTG9jYXRpb24ubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBGID0gVFlQRVMuRklTSDtcbmNvbnN0IEwgPSBUWVBFUy5MT0NBVElPTjtcblxuY29uc3QgTG9jYXRpb24gPSAoeyBuYW1lIH0pID0+IHtcbiAgY29uc3QgeyBnYW1lU3RhdGUgfSA9IHVzZUdhbWVDb250ZXh0KCk7XG4gIGNvbnN0IHsgcGxheWVycywgbG9jYXRpb25zIH0gPSBnYW1lU3RhdGU7XG5cbiAgY29uc3Qgb2NjdXBhbnRzID1cbiAgICBPYmplY3QuZW50cmllcyhwbGF5ZXJzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaWYgKHZhbHVlLmxvY2F0aW9uID09PSBuYW1lKSByZXR1cm4ga2V5O1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pIHx8IFtdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2NhdGlvbn0+XG4gICAgICB7bG9jYXRpb25zICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICB7TE9DQVRJT05bbmFtZV0ubmFtZX1cbiAgICAgICAgICB7T2JqZWN0LmVudHJpZXMobG9jYXRpb25zW25hbWVdKS5tYXAoKFtmaXNoLCBzdG9ja10sIGspID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgbWF4LCByZWdlbiB9ID0gTE9DQVRJT05bbmFtZV0uZmlzaFtGW2Zpc2hdXTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtrfT5cbiAgICAgICAgICAgICAgICB7RklTSFtGW2Zpc2hdXS5uYW1lfSBzdG9jazoge3N0b2NrfS97bWF4fSAre3JlZ2VufVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAge29jY3VwYW50c31cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb247XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Location/Location.js\n");

/***/ })

});