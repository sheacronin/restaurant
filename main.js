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

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendNewElement\": () => (/* binding */ appendNewElement)\n/* harmony export */ });\n// Fn to append new elements to parent elements\n// with optional class argument.\nfunction appendNewElement(element, parent, cls, txt) {\n    const el = document.createElement(element);\n    if (cls) {\n        el.classList.add(cls);\n    }\n    if (txt) {\n        el.textContent = txt;\n    }\n    parent.appendChild(el);\n    return el;\n}\n\n// Export the funciton.\n\n\n//# sourceURL=webpack://restaurant/./src/elements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.js */ \"./src/elements.js\");\n\n\n// Store the HTML content div in a variable.\nconst content = document.getElementById('content');\n\n// Append the header element and store in variable.\nconst header = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('header', content);\n\n// Append the hero image to the header.\n(0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('div', header, 'hero-img');\n\n// Append the nav to the header.\nconst nav = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('nav', header);\n\n// Append the ul element for links to the nav.\nconst navUl = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('ul', nav);\n\n// Store the link names in an array.\nconst links = ['Home', 'Menu', 'Delivery', 'Our Story'];\n// Apppend an li for each nav link.\nfor (let i = 0; i < links.length; i++) {\n    const li = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('li', navUl, 'nav-link');\n    const a = (0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('a', li, undefined, links[i]);\n    a.href = '#';\n}\n\n// Append 'Mario's' h1 element to header.\n(0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('h1', header, undefined, \"Mario's\");\n\n//Store copy text in a variable.\nconst copyText = \"At Mario's, we serve only the best. \" +\n\"We're a family-owned Italian restaurant serving you since 1972.\";\n// Append div with copy to root div.\n(0,_elements_js__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('div', content, undefined, copyText);\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;