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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nbody {\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\n  height: 100vh;\\n  overflow-y: auto;\\n}\\n\\n/* Form section */\\n.form-section {\\n  height: 80vh;\\n  width: 500px;\\n  overflow: hidden;\\n  margin: 0 auto;\\n}\\n\\nul {\\n  list-style: none;\\n}\\n\\n/* Form */\\n.form-control {\\n  margin: 3rem auto 0;\\n  width: 80%;\\n  height: auto;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: #fff;\\n  border-radius: 5px;\\n  box-shadow: 2px 2px 5px rgba(150, 145, 145, 0.342);\\n}\\n\\n.header-wrap {\\n  border-bottom: 1px solid #ddd;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-between;\\n  width: 100%;\\n}\\n\\n.heading {\\n  padding: 1rem 0.5rem;\\n  color: blue;\\n}\\n\\n/* Form input */\\n.form-input {\\n  padding: 1rem;\\n  display: flex;\\n  column-gap: 1rem;\\n  align-items: center;\\n  justify-content: space-between;\\n  border-bottom: 1px solid #ddd;\\n  padding-bottom: 0.5rem;\\n}\\n\\n.add {\\n  border: none;\\n  background-color: inherit;\\n  outline: none;\\n  font-size: 20px;\\n  cursor: pointer;\\n  color: #888;\\n}\\n\\n.syc {\\n  padding: 1rem;\\n  color: #888;\\n}\\n\\n.syc:hover {\\n  color: blue;\\n  cursor: pointer;\\n}\\n\\n.add:hover {\\n  color: blue;\\n}\\n\\n/* checkbox */\\n.container {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.div1 {\\n  padding: 1rem;\\n  display: flex;\\n  column-gap: 1rem;\\n  align-items: center;\\n  border-bottom: 1px solid #ddd;\\n  padding-bottom: 0.5rem;\\n}\\n\\n.dot {\\n  cursor: move;\\n  color: #888;\\n}\\n\\n.check {\\n  width: 20px;\\n  height: 20px;\\n  cursor: pointer;\\n  background-color: blue;\\n}\\n\\n.label {\\n  width: 100%;\\n}\\n\\n.italics {\\n  border: none;\\n  background-color: inherit;\\n}\\n\\n.italics:focus {\\n  outline: none;\\n  border: none;\\n  background-color: inherit;\\n}\\n\\n.italics:placeholder-shown {\\n  font-style: italic;\\n  font-size: 20px;\\n}\\n\\n/* clear */\\n.clear {\\n  padding: 1rem;\\n  align-items: center;\\n  text-align: center;\\n  text-decoration: none;\\n  background-color: #f4f4f4;\\n}\\n\\n.clear a {\\n  color: #666;\\n  text-decoration: none;\\n}\\n\\n.clear a:hover {\\n  text-decoration: underline;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://set-up-project-with-webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/
  /***/ ((module) => {
  
  eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://set-up-project-with-webpack/./node_modules/css-loader/dist/runtime/api.js?");
  
  /***/ }),
  
  /***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
  /*!**************************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
    \**************************************************************/
  /***/ ((module) => {
  
  eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://set-up-project-with-webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");
  
  /***/ }),
  
  /***/ "./src/style.css":
  /*!***********************!*\
    !*** ./src/style.css ***!
    \***********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://set-up-project-with-webpack/./src/style.css?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/
  /***/ ((module) => {
  
  eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://set-up-project-with-webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
  /*!********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
    \********************************************************************/
  /***/ ((module) => {
  
  eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://set-up-project-with-webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
  /*!**********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
    \**********************************************************************/
  /***/ ((module) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://set-up-project-with-webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
    \**********************************************************************************/
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://set-up-project-with-webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
  /*!***************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
    \***************************************************************/
  /***/ ((module) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://set-up-project-with-webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");
  
  /***/ }),
  
  /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
    \*********************************************************************/
  /***/ ((module) => {
  
  eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://set-up-project-with-webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");
  
  /***/ }),
  
  /***/ "./src/addlist.js":
  /*!************************!*\
    !*** ./src/addlist.js ***!
    \************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _populateList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./populateList.js */ \"./src/populateList.js\");\n\n\n\nconst addNewTask = (input) => {\n  const taskList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)();\n  const task = {\n    index: taskList.length + 1,\n    completed: false,\n    description: input.value,\n  };\n\n  taskList.push(task);\n\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveStorage)(taskList);\n  input.value = '';\n  (0,_populateList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(taskList);\n  return task;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewTask);\n\n\n//# sourceURL=webpack://set-up-project-with-webpack/./src/addlist.js?");
  
  /***/ }),
  
  /***/ "./src/check.js":
  /*!**********************!*\
    !*** ./src/check.js ***!
    \**********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst check = (checkbox, item) => {\n  if (checkbox.checked) {\n    checkbox.nextElementSibling.style.textDecoration = 'line-through';\n    item.completed = true;\n  } else {\n    checkbox.nextElementSibling.style.textDecoration = 'none';\n    item.completed = false;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (check);\n\n\n//# sourceURL=webpack://set-up-project-with-webpack/./src/check.js?");
  
  /***/ }),
  
  /***/ "./src/completed.js":
  /*!**************************!*\
    !*** ./src/completed.js ***!
    \**************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\nconst trashCompleted = () => {\n  const storedTasks = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)();\n\n  const uncompletedTask = storedTasks.filter(\n    (task) => task.completed === false,\n  );\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveStorage)(uncompletedTask);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trashCompleted);\n\n\n//# sourceURL=webpack://set-up-project-with-webpack/./src/completed.js?");
  
  /***/ }),
  
  /***/ "./src/edit.js":
  /*!*********************!*\
    !*** ./src/edit.js ***!
    \*********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\nconst editTask = (text, tasks, task) => {\n  const taskIndex = task.index;\n  const taskToEdit = tasks[taskIndex - 1];\n\n  taskToEdit.description = text.textContent;\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveStorage)(tasks);\n  return taskToEdit;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\n\n\n//# sourceURL=webpack://set-up-project-with-webpack/./src/edit.js?");
  
  /***/ }),
  
  /***/ "./src/index.js":
  /*!**********************!*\
    !*** ./src/index.js ***!
    \**********************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _addlist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addlist.js */ \"./src/addlist.js\");\n/* harmony import */ var _populateList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./populateList.js */ \"./src/populateList.js\");\n/* harmony import */ var _completed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./completed.js */ \"./src/completed.js\");\n\n\n\n\n\nconst addNewTaskInput = document.querySelector('#text');\nconst addNewTaskBtn = document.querySelector('.add');\nconst clearCompletedTask = document.querySelector('.clear');\n\naddNewTaskBtn.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_addlist_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(addNewTaskInput);\n});\n\nclearCompletedTask.addEventListener('click', (e) => {\n  e.preventDefault();\n  (0,_completed_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  (0,_populateList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\ndocument.addEventListener('DOMContentLoaded', (e) => {\n  e.preventDefault();\n  (0,_populateList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://set-up-project-with-webpack/./src/index.js?");
  
  /***/ }),
  
  /***/ "./src/populateList.js":
  /*!*****************************!*\
    !*** ./src/populateList.js ***!
    \*****************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _check_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check.js */ \"./src/check.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ \"./src/edit.js\");\n/* harmony import */ var _trashTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trashTask.js */ \"./src/trashTask.js\");\n\n\n\n\n\nconst populateList = () => {\n  const listContainer = document.querySelector('.container');\n\n  while (listContainer.lastChild) {\n    listContainer.removeChild(listContainer.lastChild);\n  }\n\n  const tasks = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.getStorage)();\n\n  if (tasks != null) {\n    for (let i = 0; i < tasks.length; i += 1) {\n      const list = document.createElement('li');\n      list.classList.add('list');\n      list.id = tasks[i].index;\n      list.draggable = true;\n\n      const listFChild = document.createElement('div');\n      listFChild.classList.add('div1');\n\n      const input = document.createElement('input');\n      input.classList.add('check');\n      input.type = 'checkbox';\n      input.name = 'check1';\n\n      if (tasks[i].completed) {\n        input.checked = true;\n      }\n\n      const label = document.createElement('label');\n      label.contentEditable = true;\n      label.classList.add('label');\n      label.innerHTML = tasks[i].description;\n      label.style.textDecoration = tasks[i].completed === true ? 'line-through' : 'none';\n      label.style.color = '#444';\n\n      const trash = document.createElement('span');\n      trash.innerHTML = \"<i class='fas fa-trash-alt'></i>\";\n      trash.style.display = 'flex';\n      trash.style.cursor = 'pointer';\n      trash.id = tasks.indexOf(tasks[i]);\n\n      list.appendChild(listFChild);\n      listFChild.appendChild(input);\n      listFChild.appendChild(label);\n      listFChild.appendChild(trash);\n      listContainer.appendChild(list);\n\n      label.addEventListener('focus', () => {\n        trash.style.display = 'none';\n        trash.style.color = '#fff';\n        trash.style.cursor = 'pointer';\n        label.style.outline = 'none';\n      });\n\n      label.addEventListener('blur', (e) => {\n        (0,_edit_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(e.target, tasks, tasks[i]);\n        populateList();\n      });\n\n      input.addEventListener('change', (e) => {\n        (0,_check_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target, tasks[i]);\n        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.saveStorage)(tasks);\n      });\n\n      trash.addEventListener('mousedown', (e) => {\n        e.preventDefault();\n        (0,_trashTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(JSON.parse(trash.id));\n        populateList();\n      });\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateList);\n\n\n//# sourceURL=webpack://set-up-project-with-webpack/./src/populateList.js?");
  
  /***/ }),
  
  /***/ "./src/storage.js":
  /*!************************!*\
    !*** ./src/storage.js ***!
    \************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveStorage\": () => (/* binding */ saveStorage),\n/* harmony export */   \"getStorage\": () => (/* binding */ getStorage)\n/* harmony export */ });\nconst saveStorage = (items) => {\n  localStorage.setItem('todo-list', JSON.stringify(items));\n};\n\nconst getStorage = () => {\n  const tasks = localStorage.getItem('todo-list') ? JSON.parse(localStorage.getItem('todo-list')) : [];\n  return tasks;\n};\n\n\n//# sourceURL=webpack://set-up-project-with-webpack/./src/storage.js?");
  
  /***/ }),
  
  /***/ "./src/trashTask.js":
  /*!**************************!*\
    !*** ./src/trashTask.js ***!
    \**************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\nconst trashTask = (taskIndex) => {\n  const storedTasks = (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)();\n\n  const currentTasks = storedTasks.filter(\n    (index) => storedTasks.indexOf(index) !== taskIndex,\n  );\n\n  for (let i = 0; i < currentTasks.length; i += 1) {\n    currentTasks[i].index = currentTasks.indexOf(currentTasks[i]) + 1;\n  }\n\n  (0,_storage_js__WEBPACK_IMPORTED_MODULE_0__.saveStorage)(currentTasks);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trashTask);\n\n\n//# sourceURL=webpack://set-up-project-with-webpack/./src/trashTask.js?");
  
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
  /******/ 			id: moduleId,
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
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	(() => {
  /******/ 		// getDefaultExport function for compatibility with non-harmony modules
  /******/ 		__webpack_require__.n = (module) => {
  /******/ 			var getter = module && module.__esModule ?
  /******/ 				() => (module['default']) :
  /******/ 				() => (module);
  /******/ 			__webpack_require__.d(getter, { a: getter });
  /******/ 			return getter;
  /******/ 		};
  /******/ 	})();
  /******/ 	
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