"use strict";(self.webpackChunk_bonfhir_storybook=self.webpackChunk_bonfhir_storybook||[]).push([[905],{"../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){var obj,key,value;obj=e,key=r,value=t[r],(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectSpread2})},"./src/stories/feedback/FhirQueryLoader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Loading:()=>Loading,OnError:()=>OnError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Loading$parameters,_Loading$parameters2,_Loading$parameters2$,_OnError$parameters,_OnError$parameters2,_OnError$parameters2$,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/react/dist/r5/esm/index.mjs"),_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/helpers.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Feedback/FhirQueryLoader",component:_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_0__.WP,tags:["autodocs"],args:{},argTypes:{allowRetry:{control:"boolean"}},render:function render(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_bonfhir_react_r5__WEBPACK_IMPORTED_MODULE_0__.WP,(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},(0,_helpers__WEBPACK_IMPORTED_MODULE_3__.f)(props)),{},{children:"This is the loader content, displayed once loaded."}))},parameters:{docs:{description:{component:"Renders a loading/error/loaded state for a FHIR query."}}}};var Default={args:{query:{isLoading:!1,isError:!1}}},Loading={args:{query:{isLoading:!0,isError:!1}}},OnError={args:{query:{isLoading:!1,isError:!0,error:new Error("Query error messages"),refetch:function refetch(){alert("Refetching!")}}}};Default.parameters=(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},Default.parameters),{},{docs:(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({originalSource:"{\n  args: {\n    query: ({\n      isLoading: false,\n      isError: false\n    } as any)\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Loading.parameters=(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},Loading.parameters),{},{docs:(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},null===(_Loading$parameters=Loading.parameters)||void 0===_Loading$parameters?void 0:_Loading$parameters.docs),{},{source:(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({originalSource:"{\n  args: {\n    query: ({\n      isLoading: true,\n      isError: false\n    } as any)\n  }\n}"},null===(_Loading$parameters2=Loading.parameters)||void 0===_Loading$parameters2||null===(_Loading$parameters2$=_Loading$parameters2.docs)||void 0===_Loading$parameters2$?void 0:_Loading$parameters2$.source)})}),OnError.parameters=(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},OnError.parameters),{},{docs:(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)((0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({},null===(_OnError$parameters=OnError.parameters)||void 0===_OnError$parameters?void 0:_OnError$parameters.docs),{},{source:(0,_home_runner_work_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_23_5_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__.Z)({originalSource:'{\n  args: {\n    query: ({\n      isLoading: false,\n      isError: true,\n      error: new Error("Query error messages"),\n      refetch: () => {\n        alert("Refetching!");\n      }\n    } as any)\n  }\n}'},null===(_OnError$parameters2=OnError.parameters)||void 0===_OnError$parameters2||null===(_OnError$parameters2$=_OnError$parameters2.docs)||void 0===_OnError$parameters2$?void 0:_OnError$parameters2$.source)})});const __namedExportsOrder=["Default","Loading","OnError"]},"./src/stories/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function buildArgs(props){var result={};for(var key in props)for(var value=props[key],keys=key.split("."),currentObj=result,i=0;i<keys.length;i++){var currentKey=keys[i];currentKey&&(currentKey in currentObj||(currentObj[currentKey]={}),i===keys.length-1&&(currentObj[currentKey]=value),currentObj=currentObj[currentKey])}return result}__webpack_require__.d(__webpack_exports__,{f:()=>buildArgs})}}]);