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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showContact\": () => (/* binding */ showContact)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\n\nfunction showContact() {\n    const contact = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('div', _elements__WEBPACK_IMPORTED_MODULE_0__.content, 'fade', 'Contact Us');\n    const form = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('form', contact);\n    const inputs = ['name', 'email', 'message'];\n    // Append a div for each input item.\n    for (let i = 0; i < inputs.length; i++) {\n        const inputContainer = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('div', form, 'input-container');\n        const label = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('label', inputContainer, 'form-label', inputs[i] + ':');\n        label.setAttribute('for', inputs[i]);\n        // Set type of input el to input, except for message.\n        const typeOfEl = inputs[i] === 'message' ? 'textarea' : 'input';\n        const input = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)(typeOfEl, inputContainer, 'form-input');;\n        input.setAttribute('name', inputs[i]);\n        input.setAttribute('id', inputs[i]);\n    }\n    // Append a submit button.\n    (0,_elements__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('button', form, 'form-btn', 'SUBMIT');\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/elements.js":
/*!*************************!*\
  !*** ./src/elements.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendNewElement\": () => (/* binding */ appendNewElement),\n/* harmony export */   \"loadPage\": () => (/* binding */ loadPage),\n/* harmony export */   \"content\": () => (/* binding */ content)\n/* harmony export */ });\n// Fn to append new elements to parent elements\n// with optional class argument.\nfunction appendNewElement(element, parent, cls, txt) {\n    const el = document.createElement(element);\n    if (cls) {\n        el.classList.add(cls);\n    }\n    if (txt) {\n        el.textContent = txt;\n    }\n    parent.appendChild(el);\n    return el;\n}\n\n// Store the HTML content div in a variable.\nconst content = document.getElementById('content');\n\nfunction loadPage() {\n    // Append the header element and store in variable.\n    const header = appendNewElement('header', content);\n    // Append the hero image to the header.\n    const heroImg = appendNewElement('div', header, 'hero-img');\n    // Append 'Mario's' h1 element to hero img.\n    appendNewElement('h1', heroImg, undefined, \"Mario's\");\n    // Append the nav to the header.\n    const nav = appendNewElement('nav', header);\n    // Append the ul element for links to the nav.\n    const navUl = appendNewElement('ul', nav);\n\n    return navUl;\n}\n\n// Export the funciton and content div.\n\n\n//# sourceURL=webpack://restaurant/./src/elements.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _our_story__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./our-story */ \"./src/our-story.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n// Import show functions from each tab's module.\n\n\n\n\n// Function to clear contents.\nfunction clearContent() {\n    for (let i = 0; i < _elements__WEBPACK_IMPORTED_MODULE_0__.content.children.length; i++) {\n        if (i === 0) { // Skip header el.\n            continue;\n        } else {\n            _elements__WEBPACK_IMPORTED_MODULE_0__.content.removeChild(_elements__WEBPACK_IMPORTED_MODULE_0__.content.childNodes[i]);\n        }\n    }\n    // Remove active-tab class.\n    navUl.childNodes.forEach(tab => tab.classList.remove('active-tab'));\n}\n\n// Function to switch tabs.\nfunction switchTab(e) {\n    clearContent();\n    const tab = e.target;\n    // Add active-tab style to selected tab.\n    tab.classList.add('active-tab');\n    switch (tab.textContent) {\n        case 'Home':\n            showHome();\n            break;\n        case 'Menu':\n            (0,_menu__WEBPACK_IMPORTED_MODULE_1__.showMenu)();\n            break; \n        case 'Our Story':\n            (0,_our_story__WEBPACK_IMPORTED_MODULE_2__.showOurStory)();\n            break;\n        case 'Contact':\n            (0,_contact__WEBPACK_IMPORTED_MODULE_3__.showContact)();\n            break;\n        default:\n            console.log('Something went wrong.');\n    }\n}\n\n// Run loadPage fn and store navUl here.\nconst navUl = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.loadPage)();\n\n// Store the tab names in an array.\nconst tabs = ['Home', 'Menu', 'Our Story', 'Contact'];\n// Apppend an li for each nav link.\nfor (let i = 0; i < tabs.length; i++) {\n    const tab = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('li', navUl, 'tab', tabs[i]);\n    tab.addEventListener('click', switchTab);\n}\n\n// Function to show homepage contents.\nfunction showHome() {\n    //Store copy text in a variable.\n    const copyText = \"At Mario's, we serve only the best. \" +\n    \"We're a family-owned Italian restaurant serving you since 1983.\";\n    // Append div with copy to root div.\n    (0,_elements__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('div', _elements__WEBPACK_IMPORTED_MODULE_0__.content, 'fade', copyText);\n}\n\n// Run showHome on page load.\nshowHome();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMenu\": () => (/* binding */ showMenu)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\n\n// Create a class for menu items.\nclass MenuItem {\n    constructor(name, price, img) {\n        this.name = name;\n        this.price = price;\n        this.img = '../src/menu-items/' + img;\n    }\n}\n\nconst menuItems = [];\n\nmenuItems.push(new MenuItem('spaghetti', 16, 'spaghetti.jpg'),\n               new MenuItem('mushroom risotto', 18, 'mushroom.jpg'),\n               new MenuItem('peach cobbler', 7, 'peach.jpg'),\n               new MenuItem('turtle soup', 8, 'turtle.jpg'),\n               new MenuItem('calamari', 6, 'calamari.jpg'));\n              \n\nfunction showMenu() {\n    // Add menu div.\n    const menu = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('div', _elements__WEBPACK_IMPORTED_MODULE_0__.content, 'menu');\n    // Fade in menu div.\n    menu.classList.add('fade');\n\n    // Apend each menu item to menu div.\n    for (let i = 0; i < menuItems.length; i++) {\n        const item = (0,_elements__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('div', menu, 'menu-item', menuItems[i].name);\n        // Add the menu item's image.\n        const img = document.createElement('img');\n        img.src = menuItems[i].img;\n        item.appendChild(img);\n        // Add the menu item's price.\n        (0,_elements__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('p', item, 'price', '$' + menuItems[i].price);\n    }\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/our-story.js":
/*!**************************!*\
  !*** ./src/our-story.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showOurStory\": () => (/* binding */ showOurStory)\n/* harmony export */ });\n/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements */ \"./src/elements.js\");\n\n\nfunction showOurStory() {\n    const storyText = \"Mario's was founded in 1983.\";\n    (0,_elements__WEBPACK_IMPORTED_MODULE_0__.appendNewElement)('div', _elements__WEBPACK_IMPORTED_MODULE_0__.content, 'fade', storyText);\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/our-story.js?");

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