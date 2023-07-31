"use strict";(self.webpackChunk_bonfhir_storybook=self.webpackChunk_bonfhir_storybook||[]).push([[905],{"../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectSpread2})},"./src/stories/feedback/FhirQueryLoader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Loading:()=>Loading,OnError:()=>OnError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Loading$parameters,_Loading$parameters2,_Loading$parameters2$,_OnError$parameters,_OnError$parameters2,_OnError$parameters2$,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../ui/dist/r5/esm/index.mjs"),_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/helpers.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Feedback/FhirQueryLoader",component:_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_0__.WP,tags:["autodocs"],args:{},argTypes:{allowRetry:{control:"boolean"}},render:function render(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_0__.WP,(0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.f)(props)),{},{children:"This is the loader content, displayed once loaded."}))},parameters:{docs:{description:{component:"Renders a loading/error/loaded state for a FHIR query."}}}};var Default={args:{query:{isLoading:!1,isError:!1}}},Loading={args:{query:{isLoading:!0,isError:!1}}},OnError={args:{query:{isLoading:!1,isError:!0,error:new Error("Query error messages"),refetch:function refetch(){alert("Refetching!")}}}};Default.parameters=(0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},Default.parameters),{},{docs:(0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({originalSource:"{\n  args: {\n    query: ({\n      isLoading: false,\n      isError: false\n    } as any)\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Loading.parameters=(0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},Loading.parameters),{},{docs:(0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:(0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({originalSource:"{\n  args: {\n    query: ({\n      isLoading: true,\n      isError: false\n    } as any)\n  }\n}"},null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2$=_Loading$parameters2.docs)||void 0===_Loading$parameters2$?void 0:_Loading$parameters2$.source)})}),OnError.parameters=(0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},OnError.parameters),{},{docs:(0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},null===(_OnError$parameters=OnError.parameters)||void 0===_OnError$parameters?void 0:_OnError$parameters.docs),{},{source:(0,_Users_julien_dev_GitHub_bonfhir_bonfhir2_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({originalSource:'{\n  args: {\n    query: ({\n      isLoading: false,\n      isError: true,\n      error: new Error("Query error messages"),\n      refetch: () => {\n        alert("Refetching!");\n      }\n    } as any)\n  }\n}'},null===(_OnError$parameters2=OnError.parameters)||void 0===_OnError$parameters2||null===(_OnError$parameters2$=_OnError$parameters2.docs)||void 0===_OnError$parameters2$?void 0:_OnError$parameters2$.source)})});var __namedExportsOrder=["Default","Loading","OnError"]},"./src/stories/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function buildArgs(props){var result={};for(var key in props)for(var value=props[key],keys=key.split("."),currentObj=result,i=0;i<keys.length;i++){var currentKey=keys[i];currentKey&&(currentKey in currentObj||(currentObj[currentKey]={}),i===keys.length-1&&(currentObj[currentKey]=value),currentObj=currentObj[currentKey])}return result}__webpack_require__.d(__webpack_exports__,{f:()=>buildArgs})}}]);