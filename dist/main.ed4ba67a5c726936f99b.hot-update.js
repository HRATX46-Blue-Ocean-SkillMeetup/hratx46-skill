webpackHotUpdate("main",{

/***/ "./src/components/Rating.js":
/*!**********************************!*\
  !*** ./src/components/Rating.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './react-star-ratings'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nfunction Rating() {}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rating);\n\n//# sourceURL=webpack:///./src/components/Rating.js?");

/***/ }),

/***/ "./src/components/postingDetailsContainer.js":
/*!***************************************************!*\
  !*** ./src/components/postingDetailsContainer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Location_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Location.js */ \"./src/components/Location.js\");\n/* harmony import */ var _Rating_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rating.js */ \"./src/components/Rating.js\");\n\n\n\n\nfunction PostingDetailsContainer(props) {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: props.photo,\n    alt: \"\"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.activity, \" lesson with \", props.mentor), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Location_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    location: props.location\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Rating_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    rating: props.rating\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostingDetailsContainer);\n\n//# sourceURL=webpack:///./src/components/postingDetailsContainer.js?");

/***/ })

})