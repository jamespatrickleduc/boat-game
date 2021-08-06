/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/player/[playerID]",{

/***/ "./pages/player/[playerID].js":
/*!************************************!*\
  !*** ./pages/player/[playerID].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_pleduc_Projects_boat_game_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_gameContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/gameContext */ \"./contexts/gameContext.js\");\n/* harmony import */ var _feathersClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../feathersClient */ \"./feathersClient.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/helpers */ \"./util/helpers.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants/constants */ \"../constants/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/pleduc/Projects/boat-game/app/pages/player/[playerID].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Player = function Player() {\n  _s();\n\n  var _gameState$players;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  var playerID = router.query.playerID;\n\n  var _useGameContext = (0,_contexts_gameContext__WEBPACK_IMPORTED_MODULE_4__.useGameContext)(),\n      gameState = _useGameContext.gameState,\n      initPlayerState = _useGameContext.initPlayerState,\n      buyEquipment = _useGameContext.buyEquipment;\n\n  var playerState = gameState === null || gameState === void 0 ? void 0 : (_gameState$players = gameState.players) === null || _gameState$players === void 0 ? void 0 : _gameState$players[playerID];\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),\n      ready = _useState[0],\n      setReady = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"RIVER\"),\n      location = _useState2[0],\n      setLocation = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"TROUT\"),\n      fish = _useState3[0],\n      setFish = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (!playerID) return;\n    console.log(playerState);\n    initPlayerState(playerID);\n  }, [playerID]);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (Object.keys(gameState).length === 0) return;\n    console.log(gameState);\n    var players = Object.assign({}, gameState.players);\n    players[playerID].ready = !gameState.players[playerID].ready;\n    _feathersClient__WEBPACK_IMPORTED_MODULE_5__.default.service(\"games\").patch(\"123\", {\n      players: players\n    }).then(function (res) {\n      console.log(playerState);\n    });\n  }, [ready]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    style: {\n      margin: 20\n    },\n    children: !!playerState ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__.default, {\n        style: {\n          display: \"inline-block\",\n          padding: 30,\n          margin: 15\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Name:\", playerState.name, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: Object.entries(_constants_constants__WEBPACK_IMPORTED_MODULE_7__.LOCATION).map(function (_ref, i) {\n            var _ref2 = (0,_Users_pleduc_Projects_boat_game_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref, 2),\n                key = _ref2[0],\n                value = _ref2[1];\n\n            var variant = function () {\n              if (value.requirements && !(0,_util_helpers__WEBPACK_IMPORTED_MODULE_6__.includesArray)(playerState.equipment, value.requirements)) return \"disabled\";\n              return key === location ? \"contained\" : \"outlined\";\n            }();\n\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {\n              style: {\n                margin: 10\n              },\n              variant: variant,\n              color: \"primary\",\n              onClick: function onClick() {\n                setLocation(key);\n                setFish(null);\n                setReady(false);\n              },\n              children: value.name\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 19\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: Object.entries(_constants_constants__WEBPACK_IMPORTED_MODULE_7__.LOCATION[location].fish).map(function (_ref3, i) {\n            var _ref4 = (0,_Users_pleduc_Projects_boat_game_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref3, 2),\n                key = _ref4[0],\n                value = _ref4[1];\n\n            var variant = function () {\n              var fish = _constants_constants__WEBPACK_IMPORTED_MODULE_7__.FISH[key];\n              if (fish.requirements && !(0,_util_helpers__WEBPACK_IMPORTED_MODULE_6__.includesArray)(playerState.equipment, fish.requirements)) return \"disabled\";\n              return key === fish ? \"contained\" : \"outlined\";\n            }();\n\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {\n              style: {\n                margin: 10\n              },\n              variant: variant,\n              color: \"primary\",\n              onClick: function onClick() {\n                console.log(\"key\");\n                setFish(key);\n                setReady(false);\n              },\n              children: key\n            }, i, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 21\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {\n            variant: playerState.ready ? \"contained\" : \"outlined\",\n            color: \"primary\",\n            style: {\n              width: 150\n            },\n            onClick: function onClick() {\n              setReady(!ready);\n            },\n            children: playerState.ready ? \"READY\" : \"NOT READY\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__.default, {\n        style: {\n          display: \"inline-block\",\n          padding: 30\n        },\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Gold:\", playerState.gold]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [\"Buy Equipment\", Object.entries(_constants_constants__WEBPACK_IMPORTED_MODULE_7__.EQUIPMENT).map(function (_ref5, i) {\n            var _ref6 = (0,_Users_pleduc_Projects_boat_game_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_ref5, 2),\n                key = _ref6[0],\n                value = _ref6[1];\n\n            var owned = playerState.equipment.includes(key);\n            var canAfford = !owned && playerState.gold >= value.cost;\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              style: {\n                margin: 10\n              },\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__.default, {\n                variant: owned ? \"disabled\" : \"contained\",\n                color: canAfford ? \"primary\" : \"error\",\n                onClick: function onClick() {\n                  buyEquipment(playerID, key);\n                },\n                children: [value.name, \" \", value.cost, \"G\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 129,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 128,\n              columnNumber: 19\n            }, _this);\n          })]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: \"loading\"\n    }, void 0, false)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Player, \"DnzuKGzIYdkrfdHJYdt17dmicI8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter, _contexts_gameContext__WEBPACK_IMPORTED_MODULE_4__.useGameContext];\n});\n\n_c = Player;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);\n\nvar _c;\n\n$RefreshReg$(_c, \"Player\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGxheWVyL1twbGF5ZXJJRF0uanM/ODZiNCJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwbGF5ZXJJRCIsInF1ZXJ5IiwidXNlR2FtZUNvbnRleHQiLCJnYW1lU3RhdGUiLCJpbml0UGxheWVyU3RhdGUiLCJidXlFcXVpcG1lbnQiLCJwbGF5ZXJTdGF0ZSIsInBsYXllcnMiLCJ1c2VTdGF0ZSIsInJlYWR5Iiwic2V0UmVhZHkiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwiZmlzaCIsInNldEZpc2giLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImFzc2lnbiIsImNsaWVudCIsInBhdGNoIiwidGhlbiIsInJlcyIsIm1hcmdpbiIsImRpc3BsYXkiLCJwYWRkaW5nIiwibmFtZSIsImVudHJpZXMiLCJMT0NBVElPTiIsIm1hcCIsImkiLCJrZXkiLCJ2YWx1ZSIsInZhcmlhbnQiLCJyZXF1aXJlbWVudHMiLCJpbmNsdWRlc0FycmF5IiwiZXF1aXBtZW50IiwiRklTSCIsIndpZHRoIiwiZ29sZCIsIkVRVUlQTUVOVCIsIm93bmVkIiwiaW5jbHVkZXMiLCJjYW5BZmZvcmQiLCJjb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBOztBQUNuQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBRG1CLE1BRVhDLFFBRlcsR0FFRUYsTUFBTSxDQUFDRyxLQUZULENBRVhELFFBRlc7O0FBQUEsd0JBSWtDRSxxRUFBYyxFQUpoRDtBQUFBLE1BSVhDLFNBSlcsbUJBSVhBLFNBSlc7QUFBQSxNQUlBQyxlQUpBLG1CQUlBQSxlQUpBO0FBQUEsTUFJaUJDLFlBSmpC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QUFFLG1CQUFNO0FBQ2J6Qyw4QkFBWSxDQUFDTCxRQUFELEVBQVdrQyxHQUFYLENBQVo7QUFDRCxpQkFMSDtBQUFBLDJCQU9HQyxLQUFLLENBQUNOLElBUFQsT0FPZ0JNLEtBQUssQ0FBQ1ksSUFQdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERjtBQWFELFdBaEJBLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNFRjtBQUFBLG9CQURELGdCQXFHQztBQUFBO0FBQUE7QUF0R0o7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkdELENBMUlEOztHQUFNbEQsTTtVQUNXRSxrRCxFQUdzQ0csaUU7OztLQUpqREwsTTtBQTRJTiwrREFBZUEsTUFBZiIsImZpbGUiOiIuL3BhZ2VzL3BsYXllci9bcGxheWVySURdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHYW1lQ29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9nYW1lQ29udGV4dFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vZmVhdGhlcnNDbGllbnRcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcbmltcG9ydCB7IGluY2x1ZGVzQXJyYXkgfSBmcm9tIFwiLi4vLi4vdXRpbC9oZWxwZXJzXCI7XG5cbmltcG9ydCB7IExPQ0FUSU9OLCBGSVNILCBFUVVJUE1FTlQgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzL2NvbnN0YW50c1wiO1xuXG5jb25zdCBQbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHBsYXllcklEIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgY29uc3QgeyBnYW1lU3RhdGUsIGluaXRQbGF5ZXJTdGF0ZSwgYnV5RXF1aXBtZW50IH0gPSB1c2VHYW1lQ29udGV4dCgpO1xuICBjb25zdCBwbGF5ZXJTdGF0ZSA9IGdhbWVTdGF0ZT8ucGxheWVycz8uW3BsYXllcklEXTtcblxuICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShcIlJJVkVSXCIpO1xuICBjb25zdCBbZmlzaCwgc2V0RmlzaF0gPSB1c2VTdGF0ZShcIlRST1VUXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwbGF5ZXJJRCkgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKHBsYXllclN0YXRlKTtcbiAgICBpbml0UGxheWVyU3RhdGUocGxheWVySUQpO1xuICB9LCBbcGxheWVySURdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChPYmplY3Qua2V5cyhnYW1lU3RhdGUpLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKGdhbWVTdGF0ZSk7XG4gICAgbGV0IHBsYXllcnMgPSBPYmplY3QuYXNzaWduKHt9LCBnYW1lU3RhdGUucGxheWVycyk7XG4gICAgcGxheWVyc1twbGF5ZXJJRF0ucmVhZHkgPSAhZ2FtZVN0YXRlLnBsYXllcnNbcGxheWVySURdLnJlYWR5O1xuXG4gICAgY2xpZW50XG4gICAgICAuc2VydmljZShcImdhbWVzXCIpXG4gICAgICAucGF0Y2goXCIxMjNcIiwgeyBwbGF5ZXJzIH0pXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYXllclN0YXRlKTtcbiAgICAgIH0pO1xuICB9LCBbcmVhZHldKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAyMCB9fT5cbiAgICAgIHshIXBsYXllclN0YXRlID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIHBhZGRpbmc6IDMwLCBtYXJnaW46IDE1IH19PlxuICAgICAgICAgICAgPGRpdj5OYW1lOntwbGF5ZXJTdGF0ZS5uYW1lfSA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhMT0NBVElPTikubWFwKChba2V5LCB2YWx1ZV0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUucmVxdWlyZW1lbnRzICYmXG4gICAgICAgICAgICAgICAgICAgICFpbmNsdWRlc0FycmF5KHBsYXllclN0YXRlLmVxdWlwbWVudCwgdmFsdWUucmVxdWlyZW1lbnRzKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJkaXNhYmxlZFwiO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gbG9jYXRpb24gPyBcImNvbnRhaW5lZFwiIDogXCJvdXRsaW5lZFwiO1xuICAgICAgICAgICAgICAgIH0pKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17dmFyaWFudH1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0RmlzaChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRSZWFkeShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhMT0NBVElPTltsb2NhdGlvbl0uZmlzaCkubWFwKFxuICAgICAgICAgICAgICAgIChba2V5LCB2YWx1ZV0sIGkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaXNoID0gRklTSFtrZXldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgZmlzaC5yZXF1aXJlbWVudHMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAhaW5jbHVkZXNBcnJheShwbGF5ZXJTdGF0ZS5lcXVpcG1lbnQsIGZpc2gucmVxdWlyZW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiZGlzYWJsZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gZmlzaCA/IFwiY29udGFpbmVkXCIgOiBcIm91dGxpbmVkXCI7XG4gICAgICAgICAgICAgICAgICB9KSgpO1xuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogMTAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXt2YXJpYW50fVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRGaXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZWFkeShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtrZXl9XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB2YXJpYW50PXtwbGF5ZXJTdGF0ZS5yZWFkeSA/IFwiY29udGFpbmVkXCIgOiBcIm91dGxpbmVkXCJ9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTUwIH19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgc2V0UmVhZHkoIXJlYWR5KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BsYXllclN0YXRlLnJlYWR5ID8gXCJSRUFEWVwiIDogXCJOT1QgUkVBRFlcIn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPENhcmQgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgcGFkZGluZzogMzAgfX0+XG4gICAgICAgICAgICA8ZGl2PkdvbGQ6e3BsYXllclN0YXRlLmdvbGR9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBCdXkgRXF1aXBtZW50XG4gICAgICAgICAgICAgIHtPYmplY3QuZW50cmllcyhFUVVJUE1FTlQpLm1hcCgoW2tleSwgdmFsdWVdLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3duZWQgPSBwbGF5ZXJTdGF0ZS5lcXVpcG1lbnQuaW5jbHVkZXMoa2V5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBjYW5BZmZvcmQgPSAhb3duZWQgJiYgcGxheWVyU3RhdGUuZ29sZCA+PSB2YWx1ZS5jb3N0O1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogMTAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtvd25lZCA/IFwiZGlzYWJsZWRcIiA6IFwiY29udGFpbmVkXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NhbkFmZm9yZCA/IFwicHJpbWFyeVwiIDogXCJlcnJvclwifVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1eUVxdWlwbWVudChwbGF5ZXJJRCwga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLm5hbWV9IHt2YWx1ZS5jb3N0fUdcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8PmxvYWRpbmc8Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/player/[playerID].js\n");

/***/ })

});