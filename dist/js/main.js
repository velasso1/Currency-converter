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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n/* harmony import */ var _modules_reverseCurrency__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/reverseCurrency */ \"./modules/reverseCurrency.js\");\n/* harmony import */ var _modules_conversion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/conversion */ \"./modules/conversion.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_0__.validation)();\r\n(0,_modules_reverseCurrency__WEBPACK_IMPORTED_MODULE_1__.reverseCur)();\r\n(0,_modules_conversion__WEBPACK_IMPORTED_MODULE_2__.conversion)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/conversion.js":
/*!*******************************!*\
  !*** ./modules/conversion.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conversion\": () => (/* binding */ conversion)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\n\r\n\r\nconst conversion = () => {\r\n\r\n    const converterAria = document.querySelector('.converter-aria');\r\n\r\n    let convertible = document.querySelector('.currency-value');\r\n    let result = document.querySelector('.currency-value-output');\r\n    let selectInput = document.querySelector('.currency');\r\n    let selectOutput = document.querySelector('.currency-output');\r\n    let changeBtn = document.querySelector('.converter-icon');\r\n    let actualDate = document.querySelector('.actual_date');\r\n\r\n    const refreshDate = async () => {\r\n        const date = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.checkDate)();\r\n        actualDate.innerText = `${date.day}.${date.month}.${date.year}`;\r\n    }\r\n\r\n    const convert = async () => {\r\n        let inputIndex = selectInput.selectedIndex;\r\n        let outputIndex = selectOutput.selectedIndex;\r\n\r\n        let inputValue = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getValue)(`${selectInput[inputIndex].getAttribute('value')}`);\r\n        let outputValue = await (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getValue)(`${selectOutput[outputIndex].getAttribute('value')}`);\r\n\r\n        switch (true) {\r\n            case inputIndex === outputIndex:\r\n                result.value = convertible.value;\r\n                return;\r\n\r\n            case outputIndex === 0:\r\n                result.value = (convertible.value * inputValue).toFixed(2);\r\n                return;\r\n\r\n            case inputIndex === 0:\r\n                result.value = (convertible.value / outputValue).toFixed(2);\r\n                return;\r\n\r\n            case outputIndex > 0:\r\n                result.value = ((convertible.value * inputValue) / outputValue).toFixed(2);\r\n                return;\r\n        }\r\n    }\r\n    \r\n    converterAria.addEventListener('click', (e) => {\r\n        if (e.target === changeBtn || e.target === selectInput || e.target === selectOutput) {\r\n            convert();\r\n        }\r\n    })\r\n\r\n    convertible.addEventListener('input', convert);\r\n\r\n    refreshDate();\r\n};\n\n//# sourceURL=webpack:///./modules/conversion.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkDate\": () => (/* binding */ checkDate),\n/* harmony export */   \"getValue\": () => (/* binding */ getValue)\n/* harmony export */ });\n\r\n\r\nconst getValue = async (valute) => {\r\n    let valutes = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');\r\n    let course = await valutes.json();\r\n\r\n    if (valute === 'RUB') {\r\n       return 1;\r\n    }\r\n\r\n    return course.Valute[valute].Value;\r\n}\r\n\r\nconst checkDate = async () => {\r\n    let dating = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');\r\n    let date = await dating.json();\r\n\r\n    let year = date.Timestamp.substr(0, 4);\r\n    let month = date.Timestamp.substr(5, 2);\r\n    let day = date.Timestamp.substr(8, 2);\r\n\r\n    return { year, month, day };\r\n}\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/reverseCurrency.js":
/*!************************************!*\
  !*** ./modules/reverseCurrency.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reverseCur\": () => (/* binding */ reverseCur)\n/* harmony export */ });\n\r\n\r\nconst reverseCur = () => {\r\n    const reverseBtn = document.querySelector('.converter-icon');\r\n    const selectIn = document.querySelector('.currency');\r\n    const selectOutput = document.querySelector('.currency-output');\r\n\r\n    reverseBtn.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        let cache = selectIn.selectedIndex;\r\n        selectIn.selectedIndex = selectOutput.selectedIndex;\r\n        selectOutput.selectedIndex = cache;\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/reverseCurrency.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validation\": () => (/* binding */ validation)\n/* harmony export */ });\n\r\n\r\nconst validation = () => {\r\n    \r\n    const inputFrom = document.querySelector('.currency-value');\r\n\r\n    inputFrom.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/\\D/gi, '');\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/validation.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;