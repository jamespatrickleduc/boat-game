/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game/[gameID]",{

/***/ "./pages/game/[gameID].js":
/*!********************************!*\
  !*** ./pages/game/[gameID].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_GamePlayerSection_GamePlayerSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/GamePlayerSection/GamePlayerSection */ \"./components/GamePlayerSection/GamePlayerSection.js\");\n/* harmony import */ var _styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Game.module.css */ \"./styles/Game.module.css\");\n/* harmony import */ var _styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _contexts_gameContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/gameContext */ \"./contexts/gameContext.js\");\n/* harmony import */ var _components_Environment_Environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Environment/Environment */ \"./components/Environment/Environment.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/pleduc/Projects/boat-game/app/pages/game/[gameID].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Game = function Game() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var gameID = router.query.gameID;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n    height: 0,\n    width: 0\n  }),\n      dimensions = _useState[0],\n      setDimensions = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      scale = _useState2[0],\n      setScale = _useState2[1];\n\n  var _useGameContext = (0,_contexts_gameContext__WEBPACK_IMPORTED_MODULE_4__.useGameContext)(),\n      initGameState = _useGameContext.initGameState,\n      gameState = _useGameContext.gameState;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (!!gameID) {\n      initGameState(gameID);\n    }\n  }, [gameID]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var onResize = function onResize() {\n      var min = Math.min(window.innerHeight, window.innerWidth * (9 / 16));\n      setScale(min * (16 / 9) / 1000);\n      setDimensions({\n        height: min,\n        width: min * (16 / 9)\n      });\n    };\n\n    window.addEventListener(\"resize\", onResize);\n    onResize();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_Game_module_css__WEBPACK_IMPORTED_MODULE_6___default().game),\n    style: {\n      height: dimensions.height,\n      width: dimensions.width\n    },\n    children: [(gameState === null || gameState === void 0 ? void 0 : gameState.players) && Object.keys(gameState.players).map(function (name) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GamePlayerSection_GamePlayerSection__WEBPACK_IMPORTED_MODULE_3__.default, {\n        id: \"one\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 18\n      }, _this);\n    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Environment_Environment__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Game, \"4jkTKgEV+E1mi9UlQFKcLNgMoZg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter, _contexts_gameContext__WEBPACK_IMPORTED_MODULE_4__.useGameContext];\n});\n\n_c = Game;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\nvar _c;\n\n$RefreshReg$(_c, \"Game\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS9bZ2FtZUlEXS5qcz9hNDFmIl0sIm5hbWVzIjpbIkdhbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJnYW1lSUQiLCJxdWVyeSIsInVzZVN0YXRlIiwiaGVpZ2h0Iiwid2lkdGgiLCJkaW1lbnNpb25zIiwic2V0RGltZW5zaW9ucyIsInNjYWxlIiwic2V0U2NhbGUiLCJ1c2VHYW1lQ29udGV4dCIsImluaXRHYW1lU3RhdGUiLCJnYW1lU3RhdGUiLCJ1c2VFZmZlY3QiLCJvblJlc2l6ZSIsIm1pbiIsIk1hdGgiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGVzIiwicGxheWVycyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURpQixNQUVUQyxNQUZTLEdBRUVGLE1BQU0sQ0FBQ0csS0FGVCxDQUVURCxNQUZTOztBQUFBLGtCQUdtQkUsK0NBQVEsQ0FBQztBQUFFQyxVQUFNLEVBQUUsQ0FBVjtBQUFhQyxTQUFLLEVBQUU7QUFBcEIsR0FBRCxDQUgzQjtBQUFBLE1BR1ZDLFVBSFU7QUFBQSxNQUdFQyxhQUhGOztBQUFBLG1CQUlTSiwrQ0FBUSxDQUFDLENBQUQsQ0FKakI7QUFBQSxNQUlWSyxLQUpVO0FBQUEsTUFJSEMsUUFKRzs7QUFBQSx3QkFNb0JDLHFFQUFjLEVBTmxDO0FBQUEsTUFNVEMsYUFOUyxtQkFNVEEsYUFOUztBQUFBLE1BTU1DLFNBTk4sbUJBTU1BLFNBTk47O0FBUWpCQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUMsQ0FBQ1osTUFBTixFQUFjO0FBQ1pVLG1CQUFhLENBQUNWLE1BQUQsQ0FBYjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNBLE1BQUQsQ0FKTSxDQUFUO0FBTUFZLGtEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsVUFBTUMsR0FBRyxHQUFHQyxJQUFJLENBQUNELEdBQUwsQ0FBU0UsTUFBTSxDQUFDQyxXQUFoQixFQUE2QkQsTUFBTSxDQUFDRSxVQUFQLElBQXFCLElBQUksRUFBekIsQ0FBN0IsQ0FBWjtBQUNBVixjQUFRLENBQUVNLEdBQUcsSUFBSSxLQUFLLENBQVQsQ0FBSixHQUFtQixJQUFwQixDQUFSO0FBRUFSLG1CQUFhLENBQUM7QUFDWkgsY0FBTSxFQUFFVyxHQURJO0FBRVpWLGFBQUssRUFBRVUsR0FBRyxJQUFJLEtBQUssQ0FBVDtBQUZFLE9BQUQsQ0FBYjtBQUlELEtBUkQ7O0FBVUFFLFVBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NOLFFBQWxDO0FBQ0FBLFlBQVE7QUFDVCxHQWJRLEVBYU4sRUFiTSxDQUFUO0FBZUEsc0JBQ0U7QUFDRSxhQUFTLEVBQUVPLHFFQURiO0FBRUUsU0FBSyxFQUFFO0FBQUVqQixZQUFNLEVBQUVFLFVBQVUsQ0FBQ0YsTUFBckI7QUFBNkJDLFdBQUssRUFBRUMsVUFBVSxDQUFDRDtBQUEvQyxLQUZUO0FBQUEsZUFJRyxDQUFBTyxTQUFTLFNBQVQsSUFBQUEsU0FBUyxXQUFULFlBQUFBLFNBQVMsQ0FBRVUsT0FBWCxLQUNDQyxNQUFNLENBQUNDLElBQVAsQ0FBWVosU0FBUyxDQUFDVSxPQUF0QixFQUErQkcsR0FBL0IsQ0FBbUMsVUFBQ0MsSUFBRCxFQUFVO0FBQzNDLDBCQUFPLDhEQUFDLG9GQUFEO0FBQW1CLFVBQUUsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxLQUZELENBTEosZUFRRSw4REFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQXpDRDs7R0FBTTVCLEk7VUFDV0Usa0QsRUFLc0JVLGlFOzs7S0FOakNaLEk7QUEyQ04sK0RBQWVBLElBQWYiLCJmaWxlIjoiLi9wYWdlcy9nYW1lL1tnYW1lSURdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgR2FtZVBsYXllclNlY3Rpb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvR2FtZVBsYXllclNlY3Rpb24vR2FtZVBsYXllclNlY3Rpb25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9HYW1lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZUdhbWVDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2dhbWVDb250ZXh0XCI7XG5pbXBvcnQgRW52aXJvbm1lbnQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRW52aXJvbm1lbnQvRW52aXJvbm1lbnRcIjtcblxuY29uc3QgR2FtZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZ2FtZUlEIH0gPSByb3V0ZXIucXVlcnk7XG4gIGNvbnN0IFtkaW1lbnNpb25zLCBzZXREaW1lbnNpb25zXSA9IHVzZVN0YXRlKHsgaGVpZ2h0OiAwLCB3aWR0aDogMCB9KTtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCB7IGluaXRHYW1lU3RhdGUsIGdhbWVTdGF0ZSB9ID0gdXNlR2FtZUNvbnRleHQoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghIWdhbWVJRCkge1xuICAgICAgaW5pdEdhbWVTdGF0ZShnYW1lSUQpO1xuICAgIH1cbiAgfSwgW2dhbWVJRF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgb25SZXNpemUgPSAoKSA9PiB7XG4gICAgICBjb25zdCBtaW4gPSBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQsIHdpbmRvdy5pbm5lcldpZHRoICogKDkgLyAxNikpO1xuICAgICAgc2V0U2NhbGUoKG1pbiAqICgxNiAvIDkpKSAvIDEwMDApO1xuXG4gICAgICBzZXREaW1lbnNpb25zKHtcbiAgICAgICAgaGVpZ2h0OiBtaW4sXG4gICAgICAgIHdpZHRoOiBtaW4gKiAoMTYgLyA5KSxcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XG4gICAgb25SZXNpemUoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZ2FtZX1cbiAgICAgIHN0eWxlPXt7IGhlaWdodDogZGltZW5zaW9ucy5oZWlnaHQsIHdpZHRoOiBkaW1lbnNpb25zLndpZHRoIH19XG4gICAgPlxuICAgICAge2dhbWVTdGF0ZT8ucGxheWVycyAmJlxuICAgICAgICBPYmplY3Qua2V5cyhnYW1lU3RhdGUucGxheWVycykubWFwKChuYW1lKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxHYW1lUGxheWVyU2VjdGlvbiBpZD1cIm9uZVwiIC8+O1xuICAgICAgICB9KX1cbiAgICAgIDxFbnZpcm9ubWVudCAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR2FtZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/game/[gameID].js\n");

/***/ })

});