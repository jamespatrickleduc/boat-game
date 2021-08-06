/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/gameContext.js":
/*!*********************************!*\
  !*** ./contexts/gameContext.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GameContextProvider\": function() { return /* binding */ GameContextProvider; },\n/* harmony export */   \"useGameContext\": function() { return /* binding */ useGameContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _feathersClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../feathersClient */ \"./feathersClient.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/constants */ \"../constants/constants.js\");\n\nvar _jsxFileName = \"/Users/pleduc/Projects/boat-game/app/contexts/gameContext.js\";\n\n\n\nconst GameContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst GameContextProvider = ({\n  children\n}) => {\n  const {\n    0: gameState,\n    1: setGameState\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n\n  const initGameState = gameID => {\n    _feathersClient__WEBPACK_IMPORTED_MODULE_2__.default.service(\"games\").watch().get(gameID).subscribe(res => {\n      console.log(res);\n      setGameState(res);\n    });\n  };\n\n  const initPlayerState = playerID => {\n    _feathersClient__WEBPACK_IMPORTED_MODULE_2__.default.service(\"games\").watch().get(\"123\").subscribe(res => {\n      console.log(res);\n      setGameState(res);\n    });\n  };\n\n  const togglePlayerReady = playerID => {};\n\n  const buyEquipment = (playerID, equipment) => {\n    const players = gameState.players;\n    if (players[playerID].gold < _constants_constants__WEBPACK_IMPORTED_MODULE_3__.EQUIPMENT[equipment].cost) return;\n    if (players[playerID].equipment.includes(equipment)) return;\n    players[playerID].gold -= _constants_constants__WEBPACK_IMPORTED_MODULE_3__.EQUIPMENT[equipment].cost;\n    players[playerID].equipment = [equipment, ...players[playerID].equipment];\n    _feathersClient__WEBPACK_IMPORTED_MODULE_2__.default.service(\"games\").patch(\"123\", {\n      players\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GameContext.Provider, {\n    value: {\n      gameState,\n      initGameState,\n      initPlayerState,\n      buyEquipment\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, undefined);\n};\nconst useGameContext = () => {\n  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(GameContext);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2F0LWdhbWUvLi9jb250ZXh0cy9nYW1lQ29udGV4dC5qcz9hMjUxIl0sIm5hbWVzIjpbIkdhbWVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkdhbWVDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImdhbWVTdGF0ZSIsInNldEdhbWVTdGF0ZSIsInVzZVN0YXRlIiwiaW5pdEdhbWVTdGF0ZSIsImdhbWVJRCIsImNsaWVudCIsIndhdGNoIiwiZ2V0Iiwic3Vic2NyaWJlIiwicmVzIiwiY29uc29sZSIsImxvZyIsImluaXRQbGF5ZXJTdGF0ZSIsInBsYXllcklEIiwidG9nZ2xlUGxheWVyUmVhZHkiLCJidXlFcXVpcG1lbnQiLCJlcXVpcG1lbnQiLCJwbGF5ZXJzIiwiZ29sZCIsIkVRVUlQTUVOVCIsImNvc3QiLCJpbmNsdWRlcyIsInBhdGNoIiwidXNlR2FtZUNvbnRleHQiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxnQkFBR0Msb0RBQWEsQ0FBQyxFQUFELENBQWpDO0FBRU8sTUFBTUMsbUJBQW1CLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDbkQsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQywrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7O0FBRUEsUUFBTUMsYUFBYSxHQUFJQyxNQUFELElBQVk7QUFDaENDLGdFQUFBLENBQ1csT0FEWCxFQUVHQyxLQUZILEdBR0dDLEdBSEgsQ0FHT0gsTUFIUCxFQUlHSSxTQUpILENBSWNDLEdBQUQsSUFBUztBQUNsQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQVIsa0JBQVksQ0FBQ1EsR0FBRCxDQUFaO0FBQ0QsS0FQSDtBQVFELEdBVEQ7O0FBV0EsUUFBTUcsZUFBZSxHQUFJQyxRQUFELElBQWM7QUFDcENSLGdFQUFBLENBQ1csT0FEWCxFQUVHQyxLQUZILEdBR0dDLEdBSEgsQ0FHTyxLQUhQLEVBSUdDLFNBSkgsQ0FJY0MsR0FBRCxJQUFTO0FBQ2xCQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBUixrQkFBWSxDQUFDUSxHQUFELENBQVo7QUFDRCxLQVBIO0FBUUQsR0FURDs7QUFXQSxRQUFNSyxpQkFBaUIsR0FBSUQsUUFBRCxJQUFjLENBQUUsQ0FBMUM7O0FBRUEsUUFBTUUsWUFBWSxHQUFHLENBQUNGLFFBQUQsRUFBV0csU0FBWCxLQUF5QjtBQUM1QyxVQUFNQyxPQUFPLEdBQUdqQixTQUFTLENBQUNpQixPQUExQjtBQUNBLFFBQUlBLE9BQU8sQ0FBQ0osUUFBRCxDQUFQLENBQWtCSyxJQUFsQixHQUF5QkMsMkRBQVMsQ0FBQ0gsU0FBRCxDQUFULENBQXFCSSxJQUFsRCxFQUF3RDtBQUN4RCxRQUFJSCxPQUFPLENBQUNKLFFBQUQsQ0FBUCxDQUFrQkcsU0FBbEIsQ0FBNEJLLFFBQTVCLENBQXFDTCxTQUFyQyxDQUFKLEVBQXFEO0FBRXJEQyxXQUFPLENBQUNKLFFBQUQsQ0FBUCxDQUFrQkssSUFBbEIsSUFBMEJDLDJEQUFTLENBQUNILFNBQUQsQ0FBVCxDQUFxQkksSUFBL0M7QUFDQUgsV0FBTyxDQUFDSixRQUFELENBQVAsQ0FBa0JHLFNBQWxCLEdBQThCLENBQUNBLFNBQUQsRUFBWSxHQUFHQyxPQUFPLENBQUNKLFFBQUQsQ0FBUCxDQUFrQkcsU0FBakMsQ0FBOUI7QUFFQVgsZ0VBQUEsQ0FBZSxPQUFmLEVBQXdCaUIsS0FBeEIsQ0FBOEIsS0FBOUIsRUFBcUM7QUFBRUw7QUFBRixLQUFyQztBQUNELEdBVEQ7O0FBV0Esc0JBQ0UsOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFDRSxTQUFLLEVBQUU7QUFBRWpCLGVBQUY7QUFBYUcsbUJBQWI7QUFBNEJTLHFCQUE1QjtBQUE2Q0c7QUFBN0MsS0FEVDtBQUFBLGNBR0doQjtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBN0NNO0FBK0NBLE1BQU13QixjQUFjLEdBQUcsTUFBTTtBQUNsQyxTQUFPQyxpREFBVSxDQUFDNUIsV0FBRCxDQUFqQjtBQUNELENBRk0iLCJmaWxlIjoiLi9jb250ZXh0cy9nYW1lQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vZmVhdGhlcnNDbGllbnRcIjtcbmltcG9ydCB7IEVRVUlQTUVOVCB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzXCI7XG5cbmNvbnN0IEdhbWVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5cbmV4cG9ydCBjb25zdCBHYW1lQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbZ2FtZVN0YXRlLCBzZXRHYW1lU3RhdGVdID0gdXNlU3RhdGUoe30pO1xuXG4gIGNvbnN0IGluaXRHYW1lU3RhdGUgPSAoZ2FtZUlEKSA9PiB7XG4gICAgY2xpZW50XG4gICAgICAuc2VydmljZShcImdhbWVzXCIpXG4gICAgICAud2F0Y2goKVxuICAgICAgLmdldChnYW1lSUQpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgc2V0R2FtZVN0YXRlKHJlcyk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBpbml0UGxheWVyU3RhdGUgPSAocGxheWVySUQpID0+IHtcbiAgICBjbGllbnRcbiAgICAgIC5zZXJ2aWNlKFwiZ2FtZXNcIilcbiAgICAgIC53YXRjaCgpXG4gICAgICAuZ2V0KFwiMTIzXCIpXG4gICAgICAuc3Vic2NyaWJlKChyZXMpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgc2V0R2FtZVN0YXRlKHJlcyk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVQbGF5ZXJSZWFkeSA9IChwbGF5ZXJJRCkgPT4ge307XG5cbiAgY29uc3QgYnV5RXF1aXBtZW50ID0gKHBsYXllcklELCBlcXVpcG1lbnQpID0+IHtcbiAgICBjb25zdCBwbGF5ZXJzID0gZ2FtZVN0YXRlLnBsYXllcnM7XG4gICAgaWYgKHBsYXllcnNbcGxheWVySURdLmdvbGQgPCBFUVVJUE1FTlRbZXF1aXBtZW50XS5jb3N0KSByZXR1cm47XG4gICAgaWYgKHBsYXllcnNbcGxheWVySURdLmVxdWlwbWVudC5pbmNsdWRlcyhlcXVpcG1lbnQpKSByZXR1cm47XG5cbiAgICBwbGF5ZXJzW3BsYXllcklEXS5nb2xkIC09IEVRVUlQTUVOVFtlcXVpcG1lbnRdLmNvc3Q7XG4gICAgcGxheWVyc1twbGF5ZXJJRF0uZXF1aXBtZW50ID0gW2VxdWlwbWVudCwgLi4ucGxheWVyc1twbGF5ZXJJRF0uZXF1aXBtZW50XTtcblxuICAgIGNsaWVudC5zZXJ2aWNlKFwiZ2FtZXNcIikucGF0Y2goXCIxMjNcIiwgeyBwbGF5ZXJzIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEdhbWVDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17eyBnYW1lU3RhdGUsIGluaXRHYW1lU3RhdGUsIGluaXRQbGF5ZXJTdGF0ZSwgYnV5RXF1aXBtZW50IH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvR2FtZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgdXNlR2FtZUNvbnRleHQgPSAoKSA9PiB7XG4gIHJldHVybiB1c2VDb250ZXh0KEdhbWVDb250ZXh0KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/gameContext.js\n");

/***/ }),

/***/ "./feathersClient.js":
/*!***************************!*\
  !*** ./feathersClient.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _feathersjs_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @feathersjs/client */ \"@feathersjs/client\");\n/* harmony import */ var _feathersjs_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_feathersjs_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @feathersjs/socketio-client */ \"@feathersjs/socketio-client\");\n/* harmony import */ var _feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst rx = __webpack_require__(/*! feathers-reactive */ \"feathers-reactive\");\n\nconst socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()(\"http://192.168.1.169:3030\");\nconst client = _feathersjs_client__WEBPACK_IMPORTED_MODULE_0___default()().configure(_feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_1___default()(socket)).configure(rx({\n  idField: \"id\"\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2F0LWdhbWUvLi9mZWF0aGVyc0NsaWVudC5qcz84NmFmIl0sIm5hbWVzIjpbInJ4IiwicmVxdWlyZSIsInNvY2tldCIsImlvIiwiY2xpZW50IiwiZmVhdGhlcnMiLCJjb25maWd1cmUiLCJzb2NrZXRpbyIsImlkRmllbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsRUFBRSxHQUFHQyxtQkFBTyxDQUFDLDRDQUFELENBQWxCOztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsdURBQUUsQ0FBQywyQkFBRCxDQUFqQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MseURBQVEsR0FDcEJDLFNBRFksQ0FDRkMsa0VBQVEsQ0FBQ0wsTUFBRCxDQUROLEVBRVpJLFNBRlksQ0FHWE4sRUFBRSxDQUFDO0FBQ0RRLFNBQU8sRUFBRTtBQURSLENBQUQsQ0FIUyxDQUFmO0FBUUEsK0RBQWVKLE1BQWYiLCJmaWxlIjoiLi9mZWF0aGVyc0NsaWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZWF0aGVycyBmcm9tIFwiQGZlYXRoZXJzanMvY2xpZW50XCI7XG5pbXBvcnQgc29ja2V0aW8gZnJvbSBcIkBmZWF0aGVyc2pzL3NvY2tldGlvLWNsaWVudFwiO1xuaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XG5jb25zdCByeCA9IHJlcXVpcmUoXCJmZWF0aGVycy1yZWFjdGl2ZVwiKTtcbmNvbnN0IHNvY2tldCA9IGlvKFwiaHR0cDovLzE5Mi4xNjguMS4xNjk6MzAzMFwiKTtcbmNvbnN0IGNsaWVudCA9IGZlYXRoZXJzKClcbiAgLmNvbmZpZ3VyZShzb2NrZXRpbyhzb2NrZXQpKVxuICAuY29uZmlndXJlKFxuICAgIHJ4KHtcbiAgICAgIGlkRmllbGQ6IFwiaWRcIixcbiAgICB9KVxuICApO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./feathersClient.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_gameContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/gameContext */ \"./contexts/gameContext.js\");\n\nvar _jsxFileName = \"/Users/pleduc/Projects/boat-game/app/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_gameContext__WEBPACK_IMPORTED_MODULE_2__.GameContextProvider, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2F0LWdhbWUvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFLDhEQUFDLHNFQUFEO0FBQUEsMkJBQ0UsOERBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRUQsK0RBQWVGLEtBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBHYW1lQ29udGV4dFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL2dhbWVDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxHYW1lQ29udGV4dFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvR2FtZUNvbnRleHRQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function() {



/***/ }),

/***/ "../constants/constants.js":
/*!*********************************!*\
  !*** ../constants/constants.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TYPES\": function() { return /* binding */ TYPES; },\n/* harmony export */   \"EQUIPMENT\": function() { return /* binding */ EQUIPMENT; },\n/* harmony export */   \"FISH\": function() { return /* binding */ FISH; },\n/* harmony export */   \"LOCATION\": function() { return /* binding */ LOCATION; }\n/* harmony export */ });\nconst TYPES = {\n  EQUIPMENT: {\n    LOBSTERPOT: \"LOBSTERPOT\",\n    NET: \"NET\",\n    STRONGOARS: \"STRONGOARS\",\n  },\n  FISH: {\n    TROUT: \"TROUT\",\n    LOBSTER: \"LOBSTER\",\n    SQUID: \"SQUID\",\n    TUNA: \"TUNA\",\n  },\n  LOCATION: {\n    RIVER: \"RIVER\",\n    SHOAL: \"SHOAL\",\n    DEEP: \"DEEP\",\n  },\n};\n\nconst E = TYPES.EQUIPMENT;\nconst EQUIPMENT = {\n  [E.LOBSTERPOT]: {\n    name: \"Lobster Pot\",\n    cost: 5,\n  },\n  [E.NET]: {\n    name: \"Net\",\n    cost: 5,\n  },\n  [E.STRONGOARS]: {\n    name: \"Strong Oars\",\n    cost: 7,\n  },\n};\n\nconst F = TYPES.FISH;\nconst FISH = {\n  [F.TROUT]: {\n    name: \"Trout\",\n    gold: 1,\n  },\n  [F.LOBSTER]: {\n    name: \"Lobster\",\n    gold: 2,\n    requirements: [E.LOBSTERPOT],\n  },\n  [F.SQUID]: {\n    name: \"Squid\",\n    gold: 1,\n    requirements: [E.NET],\n  },\n  [F.TUNA]: {\n    name: \"Tuna\",\n    gold: 3,\n  },\n};\n\nconst L = TYPES.LOCATION;\nconst LOCATION = {\n  [L.RIVER]: {\n    name: \"River\",\n    fish: {\n      [F.TROUT]: {\n        max: 14,\n        regen: 7,\n      },\n    },\n  },\n  [L.SHOAL]: {\n    name: \"Shoal\",\n    fish: {\n      [F.TROUT]: {\n        max: 10,\n        regen: 5,\n      },\n      [F.LOBSTER]: {\n        max: 10,\n        regen: 5,\n      },\n    },\n  },\n  [L.DEEP]: {\n    name: \"Deep\",\n    requirements: [E.STRONGOARS],\n    fish: {\n      [F.SQUID]: {\n        max: 10,\n        regen: 5,\n      },\n      [F.TUNA]: {\n        max: 10,\n        regen: 5,\n      },\n    },\n  },\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2F0LWdhbWUvLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcz82ZDIwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJmaWxlIjoiLi4vY29uc3RhbnRzL2NvbnN0YW50cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBUWVBFUyA9IHtcbiAgRVFVSVBNRU5UOiB7XG4gICAgTE9CU1RFUlBPVDogXCJMT0JTVEVSUE9UXCIsXG4gICAgTkVUOiBcIk5FVFwiLFxuICAgIFNUUk9OR09BUlM6IFwiU1RST05HT0FSU1wiLFxuICB9LFxuICBGSVNIOiB7XG4gICAgVFJPVVQ6IFwiVFJPVVRcIixcbiAgICBMT0JTVEVSOiBcIkxPQlNURVJcIixcbiAgICBTUVVJRDogXCJTUVVJRFwiLFxuICAgIFRVTkE6IFwiVFVOQVwiLFxuICB9LFxuICBMT0NBVElPTjoge1xuICAgIFJJVkVSOiBcIlJJVkVSXCIsXG4gICAgU0hPQUw6IFwiU0hPQUxcIixcbiAgICBERUVQOiBcIkRFRVBcIixcbiAgfSxcbn07XG5cbmNvbnN0IEUgPSBUWVBFUy5FUVVJUE1FTlQ7XG5leHBvcnQgY29uc3QgRVFVSVBNRU5UID0ge1xuICBbRS5MT0JTVEVSUE9UXToge1xuICAgIG5hbWU6IFwiTG9ic3RlciBQb3RcIixcbiAgICBjb3N0OiA1LFxuICB9LFxuICBbRS5ORVRdOiB7XG4gICAgbmFtZTogXCJOZXRcIixcbiAgICBjb3N0OiA1LFxuICB9LFxuICBbRS5TVFJPTkdPQVJTXToge1xuICAgIG5hbWU6IFwiU3Ryb25nIE9hcnNcIixcbiAgICBjb3N0OiA3LFxuICB9LFxufTtcblxuY29uc3QgRiA9IFRZUEVTLkZJU0g7XG5leHBvcnQgY29uc3QgRklTSCA9IHtcbiAgW0YuVFJPVVRdOiB7XG4gICAgbmFtZTogXCJUcm91dFwiLFxuICAgIGdvbGQ6IDEsXG4gIH0sXG4gIFtGLkxPQlNURVJdOiB7XG4gICAgbmFtZTogXCJMb2JzdGVyXCIsXG4gICAgZ29sZDogMixcbiAgICByZXF1aXJlbWVudHM6IFtFLkxPQlNURVJQT1RdLFxuICB9LFxuICBbRi5TUVVJRF06IHtcbiAgICBuYW1lOiBcIlNxdWlkXCIsXG4gICAgZ29sZDogMSxcbiAgICByZXF1aXJlbWVudHM6IFtFLk5FVF0sXG4gIH0sXG4gIFtGLlRVTkFdOiB7XG4gICAgbmFtZTogXCJUdW5hXCIsXG4gICAgZ29sZDogMyxcbiAgfSxcbn07XG5cbmNvbnN0IEwgPSBUWVBFUy5MT0NBVElPTjtcbmV4cG9ydCBjb25zdCBMT0NBVElPTiA9IHtcbiAgW0wuUklWRVJdOiB7XG4gICAgbmFtZTogXCJSaXZlclwiLFxuICAgIGZpc2g6IHtcbiAgICAgIFtGLlRST1VUXToge1xuICAgICAgICBtYXg6IDE0LFxuICAgICAgICByZWdlbjogNyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgW0wuU0hPQUxdOiB7XG4gICAgbmFtZTogXCJTaG9hbFwiLFxuICAgIGZpc2g6IHtcbiAgICAgIFtGLlRST1VUXToge1xuICAgICAgICBtYXg6IDEwLFxuICAgICAgICByZWdlbjogNSxcbiAgICAgIH0sXG4gICAgICBbRi5MT0JTVEVSXToge1xuICAgICAgICBtYXg6IDEwLFxuICAgICAgICByZWdlbjogNSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgW0wuREVFUF06IHtcbiAgICBuYW1lOiBcIkRlZXBcIixcbiAgICByZXF1aXJlbWVudHM6IFtFLlNUUk9OR09BUlNdLFxuICAgIGZpc2g6IHtcbiAgICAgIFtGLlNRVUlEXToge1xuICAgICAgICBtYXg6IDEwLFxuICAgICAgICByZWdlbjogNSxcbiAgICAgIH0sXG4gICAgICBbRi5UVU5BXToge1xuICAgICAgICBtYXg6IDEwLFxuICAgICAgICByZWdlbjogNSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../constants/constants.js\n");

/***/ }),

/***/ "@feathersjs/client":
/*!*************************************!*\
  !*** external "@feathersjs/client" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@feathersjs/client");;

/***/ }),

/***/ "@feathersjs/socketio-client":
/*!**********************************************!*\
  !*** external "@feathersjs/socketio-client" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@feathersjs/socketio-client");;

/***/ }),

/***/ "feathers-reactive":
/*!************************************!*\
  !*** external "feathers-reactive" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("feathers-reactive");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();