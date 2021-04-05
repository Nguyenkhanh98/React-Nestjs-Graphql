(window["__LOADABLE_LOADED_CHUNKS__"] = window["__LOADABLE_LOADED_CHUNKS__"] || []).push([["components-common-publicRoute"],{

/***/ "./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/instance/index-of */ \"./node_modules/core-js-pure/features/instance/index-of.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/assign */ \"./node_modules/core-js-pure/features/object/assign.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/object/assign.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/get-own-property-symbols */ \"./node_modules/core-js-pure/features/object/get-own-property-symbols.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js-pure/features/object/keys */ \"./node_modules/core-js-pure/features/object/keys.js\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/core-js/object/keys.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/assign */ \"./node_modules/@babel/runtime-corejs3/core-js/object/assign.js\");\n\nfunction _extends() {\n  module.exports = _extends = _Object$assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  module.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n  return _extends.apply(this, arguments);\n}\n\nmodule.exports = _extends;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/extends.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/objectWithoutProperties.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/objectWithoutProperties.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$getOwnPropertySymbols = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/get-own-property-symbols */ \"./node_modules/@babel/runtime-corejs3/core-js/object/get-own-property-symbols.js\");\n\nvar _indexOfInstanceProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/index-of */ \"./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js\");\n\nvar objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ \"./node_modules/@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose.js\");\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = objectWithoutPropertiesLoose(source, excluded);\n  var key, i;\n\n  if (_Object$getOwnPropertySymbols) {\n    var sourceSymbolKeys = _Object$getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (_indexOfInstanceProperty(excluded).call(excluded, key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutProperties;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/objectWithoutProperties.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs3/core-js/object/keys */ \"./node_modules/@babel/runtime-corejs3/core-js/object/keys.js\");\n\nvar _indexOfInstanceProperty = __webpack_require__(/*! @babel/runtime-corejs3/core-js/instance/index-of */ \"./node_modules/@babel/runtime-corejs3/core-js/instance/index-of.js\");\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n\n  var sourceKeys = _Object$keys(source);\n\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (_indexOfInstanceProperty(excluded).call(excluded, key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutPropertiesLoose;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs3/helpers/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/array/virtual/index-of.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/es/array/virtual/index-of.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../../modules/es.array.index-of */ \"./node_modules/core-js-pure/modules/es.array.index-of.js\");\nvar entryVirtual = __webpack_require__(/*! ../../../internals/entry-virtual */ \"./node_modules/core-js-pure/internals/entry-virtual.js\");\n\nmodule.exports = entryVirtual('Array').indexOf;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/array/virtual/index-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/instance/index-of.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/es/instance/index-of.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var indexOf = __webpack_require__(/*! ../array/virtual/index-of */ \"./node_modules/core-js-pure/es/array/virtual/index-of.js\");\n\nvar ArrayPrototype = Array.prototype;\n\nmodule.exports = function (it) {\n  var own = it.indexOf;\n  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.indexOf) ? indexOf : own;\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/instance/index-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/es/object/assign.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js-pure/es/object/assign.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../../modules/es.object.assign */ \"./node_modules/core-js-pure/modules/es.object.assign.js\");\nvar path = __webpack_require__(/*! ../../internals/path */ \"./node_modules/core-js-pure/internals/path.js\");\n\nmodule.exports = path.Object.assign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/es/object/assign.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/instance/index-of.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js-pure/features/instance/index-of.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/instance/index-of */ \"./node_modules/core-js-pure/es/instance/index-of.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/instance/index-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/object/assign.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/assign.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/assign */ \"./node_modules/core-js-pure/es/object/assign.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/object/assign.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/object/get-own-property-symbols.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/get-own-property-symbols.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/get-own-property-symbols */ \"./node_modules/core-js-pure/es/object/get-own-property-symbols.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/object/get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/features/object/keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js-pure/features/object/keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var parent = __webpack_require__(/*! ../../es/object/keys */ \"./node_modules/core-js-pure/es/object/keys.js\");\n\nmodule.exports = parent;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/features/object/keys.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/array-method-is-strict.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/array-method-is-strict.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/array-method-is-strict.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/internals/object-assign.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js-pure/internals/object-assign.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js-pure/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js-pure/internals/fails.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js-pure/internals/object-keys.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js-pure/internals/object-get-own-property-symbols.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js-pure/internals/object-property-is-enumerable.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js-pure/internals/to-object.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js-pure/internals/indexed-object.js\");\n\nvar nativeAssign = Object.assign;\nvar defineProperty = Object.defineProperty;\n\n// `Object.assign` method\n// https://tc39.es/ecma262/#sec-object.assign\nmodule.exports = !nativeAssign || fails(function () {\n  // should have correct order of operations (Edge bug)\n  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {\n    enumerable: true,\n    get: function () {\n      defineProperty(this, 'b', {\n        value: 3,\n        enumerable: false\n      });\n    }\n  }), { b: 2 })).b !== 1) return true;\n  // should work with symbols and should have deterministic property order (V8 bug)\n  var A = {};\n  var B = {};\n  /* global Symbol -- required for testing */\n  var symbol = Symbol();\n  var alphabet = 'abcdefghijklmnopqrst';\n  A[symbol] = 7;\n  alphabet.split('').forEach(function (chr) { B[chr] = chr; });\n  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;\n}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`\n  var T = toObject(target);\n  var argumentsLength = arguments.length;\n  var index = 1;\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  var propertyIsEnumerable = propertyIsEnumerableModule.f;\n  while (argumentsLength > index) {\n    var S = IndexedObject(arguments[index++]);\n    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);\n    var length = keys.length;\n    var j = 0;\n    var key;\n    while (length > j) {\n      key = keys[j++];\n      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];\n    }\n  } return T;\n} : nativeAssign;\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/internals/object-assign.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.array.index-of.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.array.index-of.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar $indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js-pure/internals/array-includes.js\").indexOf;\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js-pure/internals/array-method-is-strict.js\");\n\nvar nativeIndexOf = [].indexOf;\n\nvar NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;\nvar STRICT_METHOD = arrayMethodIsStrict('indexOf');\n\n// `Array.prototype.indexOf` method\n// https://tc39.es/ecma262/#sec-array.prototype.indexof\n$({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD }, {\n  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {\n    return NEGATIVE_ZERO\n      // convert -0 to +0\n      ? nativeIndexOf.apply(this, arguments) || 0\n      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.array.index-of.js?");

/***/ }),

/***/ "./node_modules/core-js-pure/modules/es.object.assign.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js-pure/modules/es.object.assign.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js-pure/internals/export.js\");\nvar assign = __webpack_require__(/*! ../internals/object-assign */ \"./node_modules/core-js-pure/internals/object-assign.js\");\n\n// `Object.assign` method\n// https://tc39.es/ecma262/#sec-object.assign\n$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {\n  assign: assign\n});\n\n\n//# sourceURL=webpack:///./node_modules/core-js-pure/modules/es.object.assign.js?");

/***/ }),

/***/ "./src/components/common/publicRoute.js":
/*!**********************************************!*\
  !*** ./src/components/common/publicRoute.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/extends */ \"./node_modules/@babel/runtime-corejs3/helpers/extends.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs3/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime-corejs3/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/auth */ \"./src/helpers/auth.js\");\n\n\n\n\n\n\n\nvar PublicRoute = function PublicRoute(_ref) {\n  var Component = _ref.component,\n      rest = _babel_runtime_corejs3_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, [\"component\"]);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], _babel_runtime_corejs3_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rest, {\n    render: function render(props) {\n      return Object(_helpers_auth__WEBPACK_IMPORTED_MODULE_5__[\"isAuth\"])() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Redirect\"], {\n        to: {\n          pathname: '/app/home',\n          state: {\n            from: props.location\n          }\n        }\n      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, props);\n    }\n  }));\n};\n\nPublicRoute.propTypes = {\n  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func]),\n  location: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PublicRoute);\n\n//# sourceURL=webpack:///./src/components/common/publicRoute.js?");

/***/ })

}]);