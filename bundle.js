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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    /* outline: solid rgb(185, 42, 42); */\n}\n\nbody { \n    margin: 0;\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 3fr 15fr 1fr;\n}\n\n\n/* styling for the top section */\n.title {\n    color: white;\n    font-family: 'Agbalumo';\n}\n\n.top { \n    background-color: rgb(35, 35, 35);\n    font-size: 50px;\n    display: flex;\n    align-items: end;\n    padding: 1rem;\n}\n\n#logo {\n    height: 100px; \n    width: 100px;\n    background-size: cover;\n}\n\n\n\n/* styling for the middle section */\n\n.middle{ \n    display: grid;\n    grid-template-columns: 1fr 4fr;\n}\n\n/* styling for the left middle section */\n\n.left {\n    background-color:rgb(200, 200, 200) ;\n}\n\n#icon {\n    height: 40px;\n    width: 40px;\n    margin: 0px 10px 0px 0px;\n}\n\n.nav-item {\n    display: flex;\n    align-items: center;\n    margin: 5px 0px 5px 0px;\n    border-radius: 10px;\n    padding: 5px;\n}\n\n.nav-item:hover {\n    background-color: rgb(175, 175, 175);\n}\n\n.nav{\n    font-size: 20px;\n    font-family: 'Roboto';\n    font-weight: 400;\n    padding: 20px;\n\n\n}\n\n.projects-nav {\n    font-size: 30px;\n    font-weight: 500;\n    margin: 10px 0px 10px 0px;\n}\n\n#create-project-form {\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n    gap: 1em;\n    \n}\n\n#create-project-form > *{\n    border-radius: 10px;\n    background-color:rgb(240, 240, 240) ;\n\n}\n\n/* styling for the right middle section */\n\n.right { \n    padding: 5% 10%;\n}\n\n.taskCard {  \n    border-radius: 10px;\n    background-size: cover;\n    display: grid;\n    grid-template-columns: 50px 10fr 1fr 1fr;\n    gap: 1em;\n    font-family: 'Roboto';\n    margin: 1em 0px 1em 0px;\n    align-items: center;\n    border: 0.5px solid rgb(200, 200, 200);\n    padding: 1% 3%;\n    height: 70px; \n}\n\n.taskCard:hover, #create-task:hover  {\n    background-color: rgb(240, 240, 240);\n}\n\n#create-task {  \n    border-radius: 10px;\n    background-size: cover;\n    display: flex;\n    /* grid-template-columns: 50px 200px; */\n    gap: 1em;\n    font-family: 'Roboto';\n    margin: 1em 0px 1em 0px;\n    align-items: center;\n    border: 0.5px solid rgb(200, 200, 200);\n    padding: 1% 3%;\n    height: 70px; \n}\n\n#create-task-form {\n    display: grid;\n    grid-template-columns: 8fr 2fr 1fr 1fr;\n    gap: 1em;\n}\n\n#create-task-form > * {\n    border-color: rgb(200, 200, 200);\n    border-radius: 10px;\n}\n\n#input1 {\n    padding: 2px;\n}\n\n.box-header {\n    font-weight: 600;\n}\n\n.emptyCheck, .plus {\n\n    height: 50px;\n    width: 50px;\n\n}\n\n\n\n/* styling for the bottom section */\n\n.bottom {\n    display: flex;\n    background-color: rgb(35, 35, 35);\n    justify-content: center;\n    align-items: center;\n}\n\n.sig {\n    color: white;\n    margin-right: 5px;\n    font-family: 'Roboto';\n}\n\n#git {\n    height: 30px;\n    width: 30px;\n}\n\n\n\n\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add-task-button.js":
/*!********************************!*\
  !*** ./src/add-task-button.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructor */ \"./src/constructor.js\");\n/* harmony import */ var _all_tasks_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-tasks-display */ \"./src/all-tasks-display.js\");\n//this module includes all the logic to add a new task without project \n\n\n\n\n\n\n\nfunction addTask () {\n    const container = document.querySelector('.container')\n\n    const newDiv = document.createElement('div')\n    newDiv.setAttribute('id', 'create-task')\n\n    const plus = document.createElement('img')\n    plus.classList.add('plus')\n    plus.setAttribute('src', '../src/images/plus.svg')\n    newDiv.appendChild(plus);\n        \n    container.appendChild(newDiv)\n\n    const createTask = document.createElement('div')\n    createTask.classList.add('create-task-text')\n    createTask.innerHTML = 'Create Task';\n    newDiv.appendChild(createTask)\n\n    removeContent();\n}\n\nfunction removeContent (){\n    const container = document.querySelector('#create-task');\n\n    container.addEventListener('click', myCallBack)\n}\n\nfunction myCallBack () {\n    const container = document.querySelector('#create-task');\n\n    while(container.firstChild) {\n        container.removeChild(container.lastChild)\n    }\n\n    container.removeEventListener('click', myCallBack);\n    addInputForm();\n\n}\n\nfunction addInputForm() {\n    const container = document.querySelector('#create-task');\n    const form = document.createElement('form')\n\n        form.setAttribute('id', 'create-task-form')\n\n            form.addEventListener('submit', (e)=>{\n                e.preventDefault();\n                submitTask()\n            })\n\n                const text = document.createElement('input');\n                text.type = 'text';\n                text.placeholder = \"  Enter your task\";\n                text.setAttribute('required', '')\n                text.setAttribute('id', 'input1')\n\n                    const date = document.createElement('input');\n                    date.type = 'date';\n                    date.setAttribute('required', '')\n                    date.setAttribute('id', 'input2')\n\n                        const priority = document.createElement('select');\n                        priority.setAttribute('id', 'input3')\n                            var newOption1 = document.createElement(\"option\");\n                            newOption1.text = 'High';\n                            newOption1.value = 'High';\n                                var newOption2 = document.createElement(\"option\");\n                                newOption2.text = 'Medium';\n                                newOption2.value = 'Medium';\n                                    var newOption3 = document.createElement(\"option\");\n                                    newOption3.text = 'Low';\n                                    newOption3.value = 'Low';\n\n                                        priority.appendChild(newOption1);\n                                        priority.appendChild(newOption2);\n                                        priority.appendChild(newOption3);\n\n                                                const btn = document.createElement('button')\n                                                btn.innerHTML = \"Create Task\"\n                                                btn.type = 'submit';\n          \n\n        form.appendChild(text);\n        form.appendChild(date);\n        form.appendChild(priority);\n        form.appendChild(btn);\n\n    container.appendChild(form)\n\n}\n\nfunction submitTask(){\n    const input1 = document.getElementById(\"input1\");\n    const input2 = document.getElementById(\"input2\");\n    const input3 = document.getElementById(\"input3\");\n\n        const newTask = new _constructor__WEBPACK_IMPORTED_MODULE_1__[\"default\"](input1.value, input2.value, input3.value, \"No Project\");\n        ___WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(newTask)\n\n            ;(0,_all_tasks_display__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(___WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n                \n                addTask()\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://todolist/./src/add-task-button.js?");

/***/ }),

/***/ "./src/all-tasks-display.js":
/*!**********************************!*\
  !*** ./src/all-tasks-display.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//function which displays all the tasks in array \n\nfunction allTasksDisplay(myTasks) {\n\n   const container = document.querySelector('.container')\n\n   while(container.firstChild){\n    container.removeChild(container.lastChild)\n   }\n   \n    for (let i=0; i < myTasks.length; i++ ) {\n        const newDiv = document.createElement('div')\n        newDiv.classList.add('taskCard')\n      \n        const checkbox = document.createElement('img')\n        checkbox.classList.add('emptyCheck')\n        checkbox.setAttribute('src', '../src/images/check-circle-outline.svg')\n        newDiv.appendChild(checkbox);\n\n        const taskDescription = document.createElement('div')\n        taskDescription.classList.add('taskDescription')\n        taskDescription.innerHTML = myTasks[i].description;\n        newDiv.appendChild(taskDescription)\n\n        const dateBox = document.createElement('div')\n        dateBox.classList.add('dateBox')\n\n            const dateHeader = document.createElement('div')\n            dateHeader.classList.add('box-header')\n            dateHeader.innerHTML = 'Due:'\n            dateBox.appendChild(dateHeader)\n\n            const taskDate = document.createElement('div');\n            taskDate.classList.add('taskDate')\n            taskDate.innerHTML = myTasks[i].dueDate;\n            dateBox.appendChild(taskDate)\n\n        newDiv.appendChild(dateBox)\n\n        const priorityBox = document.createElement('div')\n        priorityBox.classList.add('priorityBox')\n\n            const priorityHeader = document.createElement('div')\n            priorityHeader.classList.add('box-header')\n            priorityHeader.innerHTML = 'Priority:'\n            priorityBox.appendChild(priorityHeader)  \n            \n            const taskPriority = document.createElement('div');\n            taskPriority.classList.add('taskPriority')\n            taskPriority.innerHTML = myTasks[i].priority;\n            priorityBox.appendChild(taskPriority)\n\n        newDiv.appendChild(priorityBox)\n        container.appendChild(newDiv)\n\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allTasksDisplay); \n\n//# sourceURL=webpack://todolist/./src/all-tasks-display.js?");

/***/ }),

/***/ "./src/constructor.js":
/*!****************************!*\
  !*** ./src/constructor.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//class constructor to create tasks\nclass task {   \n    constructor(description, dueDate, priority, project) {\n        this.description=description, \n        this.dueDate=dueDate, \n        this.priority=priority,\n        this.project=project\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task);\n\n//# sourceURL=webpack://todolist/./src/constructor.js?");

/***/ }),

/***/ "./src/create-project.js":
/*!*******************************!*\
  !*** ./src/create-project.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n//logic to allow user to create and save new 'projects'\n\n\n\nconst container = document.querySelector('.bottom-nav');\n\n\nfunction createProject () {\n\n    const projectItem = document.createElement('div')\n    projectItem.classList.add('nav-item')\n\n        const addTaskButton = document.createElement('div')\n        addTaskButton.classList.add('nav-item')\n        addTaskButton.setAttribute('id', 'create-project-btn')\n        addTaskButton.innerHTML = 'Create Project'\n\n            const plus = document.createElement('img')\n            plus.setAttribute('id', 'icon')\n            plus.setAttribute('src', '../src/images/plus.svg')\n\n            projectItem.appendChild(plus)    \n            projectItem.appendChild(addTaskButton)\n\n                container.appendChild(projectItem)\n\n    container.addEventListener('click', myCallBack)\n    \n\n}\n\nfunction myCallBack() {\n    while(container.firstChild) {\n        container.removeChild(container.lastChild)\n    }\n    addFields();\n    container.removeEventListener('click', myCallBack);\n}\n\nfunction addFields () {\n    \n    const form = document.createElement('form')\n    form.setAttribute('id', 'create-project-form')\n\n        form.addEventListener('submit', (e)=>{\n            e.preventDefault();\n            storeInput()\n        })\n\n                const text = document.createElement('input')\n                text.type = 'text';\n                text.placeholder = \" Project Name\";\n                text.setAttribute('required', '')\n                text.setAttribute('id', 'create-project-input')\n\n                    const btn = document.createElement('button')\n                    btn.innerHTML = \"Add Project\"\n                    btn.type = 'submit'\n\n                        form.appendChild(text)\n                        form.appendChild(btn)\n\n                            container.appendChild(form)\n\n}\n\nfunction storeInput(){\n    const input1 = document.getElementById('create-project-input')\n    ___WEBPACK_IMPORTED_MODULE_0__.myProjects.push(input1.value)\n    console.log(___WEBPACK_IMPORTED_MODULE_0__.myProjects)\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n\n\n//# sourceURL=webpack://todolist/./src/create-project.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   myProjects: () => (/* binding */ myProjects)\n/* harmony export */ });\n/* harmony import */ var _constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constructor */ \"./src/constructor.js\");\n/* harmony import */ var _all_tasks_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-tasks-display */ \"./src/all-tasks-display.js\");\n/* harmony import */ var _add_task_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-task-button */ \"./src/add-task-button.js\");\n/* harmony import */ var _create_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-project */ \"./src/create-project.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\");\n\n\n\n\n\n\n//initializing empty arrays to store tasks and projects\nconst myTasks = [];\nconst myProjects = [\"Ahmed\", \"Khan\"];\n\nconst task1 = new _constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"bla bla\", \"2012\", \"High\", \"No Project\");\nconst task2 = new _constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"fix something\", \"2010\", \"Low\", \"No Project\");\nconst task3 = new _constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"fuck you\", \"2022\", \"Medium\", \"Yase\")\nconst task4 = new _constructor__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"wash up\", \"2022\", \"High\", \"Work\" )\n    myTasks.push(task1, task2, task3, task4)\n\n;(0,_all_tasks_display__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(myTasks);\n// displayProjectList();\n(0,_add_task_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_create_project__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myTasks);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;