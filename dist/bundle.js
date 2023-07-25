/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://cards/./style.css?");

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.renderMainPage = exports.appEl = void 0;\n__webpack_require__(/*! ./style.css */ \"./style.css\");\nvar render_game_js_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './render-game.js'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar appHtml = null;\nexports.appEl = document.getElementById('app');\n//check\nfunction renderMainPage() {\n    appHtml = \"<div class=\\\"flex-container\\\">\\n    <div class=\\\"cards\\\">\\n<div class=\\\"modal difficulty-level\\\">\\n <h1 class=\\\"modal__header\\\">\\n     \\u0412\\u044B\\u0431\\u0435\\u0440\\u0438 <br>\\n     \\u0441\\u043B\\u043E\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C\\n </h1>\\n <div class=\\\"difficulty-level__flex-container\\\">\\n     <div class=\\\"difficulty-level__levels\\\" id=\\\"easy\\\">\\n         1\\n     </div>\\n     <div class=\\\"difficulty-level__levels\\\" id=\\\"medium\\\">\\n         2\\n     </div>\\n     <div class=\\\"difficulty-level__levels\\\" id=\\\"hard\\\">\\n         3\\n     </div>\\n </div>\\n <button class=\\\"difficulty-level__button button\\\" id=\\\"start-game-button\\\">\\n      \\u0421\\u0442\\u0430\\u0440\\u0442\\n </button>\\n</div>\\n</div>\\n</div>\";\n    exports.appEl.innerHTML = appHtml;\n    var easyLevelGame = document.getElementById('easy');\n    var mediumLevelGame = document.getElementById('medium');\n    var hardLevelGame = document.getElementById('hard');\n    var gameLevel = null;\n    easyLevelGame.addEventListener('click', function () {\n        gameLevel = 'easy';\n        hardLevelGame.classList.remove('background');\n        mediumLevelGame.classList.remove('background');\n        easyLevelGame.classList.add('background');\n        console.log('выбран легкий уровень');\n        return;\n    });\n    mediumLevelGame.addEventListener('click', function () {\n        gameLevel = 'medium';\n        easyLevelGame.classList.remove('background');\n        hardLevelGame.classList.remove('background');\n        mediumLevelGame.classList.add('background');\n        console.log('выбран средний уровень');\n        return;\n    });\n    hardLevelGame.addEventListener('click', function () {\n        gameLevel = 'hard';\n        easyLevelGame.classList.remove('background');\n        mediumLevelGame.classList.remove('background');\n        hardLevelGame.classList.add('background');\n        console.log('выбран сложный уровень');\n        return;\n    });\n    var startGameButton = document.getElementById('start-game-button');\n    startGameButton.addEventListener('click', function () {\n        if (gameLevel == 'easy') {\n            (0, render_game_js_1.renderEasyGame)();\n        }\n        if (gameLevel == 'medium') {\n            (0, render_game_js_1.renderMediumGame)();\n        }\n        if (gameLevel == 'hard') {\n            (0, render_game_js_1.renderHardGame)();\n        }\n        if (gameLevel == null) {\n            alert('Выберите уровень сложности игры');\n        }\n    });\n}\nexports.renderMainPage = renderMainPage;\nrenderMainPage();\n\n\n//# sourceURL=webpack://cards/./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;