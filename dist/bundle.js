/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("let page = null\r\nlet appHtml = null\r\nlet appEl = document.getElementById('app')\r\n//check\r\nfunction renderMainPage() {\r\n    appHtml = `<div class=\"container\">\r\n    <div class=\"cards\">\r\n<div class=\"modal difficulty-level\">\r\n <h1 class=\"modal__header\">\r\n     Выбери <br>\r\n     сложность\r\n </h1>\r\n <div class=\"difficulty-level__flex-container\">\r\n     <div class=\"difficulty-level__levels\" id=\"easy\">\r\n         1\r\n     </div>\r\n     <div class=\"difficulty-level__levels\" id=\"medium\">\r\n         2\r\n     </div>\r\n     <div class=\"difficulty-level__levels\" id=\"hard\">\r\n         3\r\n     </div>\r\n </div>\r\n <button class=\"difficulty-level__button button\" id=\"start-game-button\">\r\n      Старт\r\n </button>\r\n</div>\r\n</div>\r\n</div>`\r\n\r\n    appEl.innerHTML = appHtml\r\n}\r\nrenderMainPage()\r\n\r\nfunction renderEasyGame() {\r\n    appHtml = `<h1 class=\"modal__header\">\r\nЛегкий уровень сложности\r\n</h1>`\r\n    appEl.innerHTML = appHtml\r\n}\r\n\r\nfunction renderMediumGame() {\r\n    appHtml = `<h1 class=\"modal__header\">\r\n    Средний уровень сложности\r\n    </h1>`\r\n    appEl.innerHTML = appHtml\r\n}\r\n\r\nfunction renderHardGame() {\r\n    appHtml = `<h1 class=\"modal__header\">\r\n    Тяжелый уровень сложности\r\n    </h1>`\r\n    appEl.innerHTML = appHtml\r\n}\r\n\r\nlet easyLevelGame = document.getElementById('easy')\r\nlet mediumLevelGame = document.getElementById('medium')\r\nlet hardLevelGame = document.getElementById('hard')\r\n\r\nlet gameLevel = null\r\n\r\neasyLevelGame.addEventListener('click', () => {\r\n    gameLevel = 'easy'\r\n    hardLevelGame.classList.remove('background')\r\n    mediumLevelGame.classList.remove('background')\r\n    easyLevelGame.classList.add('background')\r\n    console.log('выбран легкий уровень')\r\n    return\r\n})\r\n\r\nmediumLevelGame.addEventListener('click', () => {\r\n    gameLevel = 'medium'\r\n    easyLevelGame.classList.remove('background')\r\n    hardLevelGame.classList.remove('background')\r\n    mediumLevelGame.classList.add('background')\r\n    console.log('выбран средний уровень')\r\n    return\r\n})\r\n\r\nhardLevelGame.addEventListener('click', () => {\r\n    gameLevel = 'hard'\r\n    easyLevelGame.classList.remove('background')\r\n    mediumLevelGame.classList.remove('background')\r\n    hardLevelGame.classList.add('background')\r\n    console.log('выбран сложный уровень')\r\n    return\r\n})\r\n\r\nlet startGameButton = document.getElementById('start-game-button')\r\n\r\nstartGameButton.addEventListener('click', () => {\r\n    if (gameLevel == 'easy') {\r\n        renderEasyGame()\r\n    }\r\n    if (gameLevel == 'medium') {\r\n        renderMediumGame()\r\n    }\r\n    if (gameLevel == 'hard') {\r\n        renderHardGame()\r\n    }\r\n    // почему-то если здесь просто поставить else, то не работает\r\n    if (gameLevel == null) {\r\n        alert('Выберите уровень сложности игры')\r\n    }\r\n})\r\n\n\n//# sourceURL=webpack://cards/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;