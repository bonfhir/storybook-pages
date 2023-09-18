"use strict";(self.webpackChunk_bonfhir_storybook=self.webpackChunk_bonfhir_storybook||[]).push([[945],{"../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectSpread2})},"./src/stories/helpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function buildArgs(props){var result={};for(var key in props)for(var value=props[key],keys=key.split("."),currentObj=result,i=0;i<keys.length;i++){var currentKey=keys[i];currentKey&&(currentKey in currentObj||(currentObj[currentKey]={}),i===keys.length-1&&(currentObj[currentKey]=value),currentObj=currentObj[currentKey])}return result}__webpack_require__.d(__webpack_exports__,{f:()=>buildArgs})},"./src/stories/data-display/FhirTable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithPagination:()=>WithPagination,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_WithPagination$param,_WithPagination$param2,_WithPagination$param3,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_bonfhir_query_r5__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/query/dist/r5/esm/index.mjs"),_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@bonfhir+ui@2.5.0_@tanstack+react-query@4.33.0_react-dom@18.2.0_react@18.2.0/node_modules/@bonfhir/ui/dist/r5/esm/index.mjs"),_mantine_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("../../node_modules/.pnpm/@mantine+core@6.0.19_@emotion+react@11.11.1_@mantine+hooks@6.0.19_@types+react@18.2.21_react-dom@18.2.0_react@18.2.0/node_modules/@mantine/core/esm/Stack/Stack.js"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/helpers.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Data Display/FhirTable",component:_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__.Wq,tags:["autodocs"],args:{},argTypes:{columns:{control:"object"}},parameters:{docs:{description:{component:"Renders a table of resources"}}}};var Default={args:{columns:[{key:"name",title:"Name",sortable:!0,render:function render(row){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__.Zr,{type:"string",value:row.name})}},{key:"_lastUpdated",title:"Last Updated",sortable:!0,render:function render(row){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__.Zr,{type:"instant",value:row.meta.lastUpdated})}}]},render:function render(props){return(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)((function(){var searchController=(0,_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__.Sm)({pageSize:20,defaultSort:"name",defaultSearch:{name:void 0}}),organizationsQuery=(0,_bonfhir_query_r5__WEBPACK_IMPORTED_MODULE_0__.cm)("Organization",(function(search){var _searchController$sea;return search.name(null===(_searchController$sea=searchController.search)||void 0===_searchController$sea?void 0:_searchController$sea.name)._sort(searchController.sort)._count(searchController.pageSize)._total("accurate")}),searchController.pageUrl);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__.Wq,(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({onRowNavigate:function onRowNavigate(org){return alert("Clicked on ".concat(org.name))}},(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.f)(props)),searchController),organizationsQuery))}))}},WithPagination={args:{columns:[{key:"name",title:"Name",sortable:!0,render:function render(row){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__.Zr,{type:"string",value:row.name})}},{key:"_lastUpdated",title:"Last Updated",sortable:!0,render:function render(row){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__.Zr,{type:"instant",value:row.meta.lastUpdated})}}]},render:function render(props){return(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)((function(){var searchController=(0,_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__.Sm)({pageSize:20,defaultSort:"name",defaultSearch:{name:void 0}}),organizationsQuery=(0,_bonfhir_query_r5__WEBPACK_IMPORTED_MODULE_0__.cm)("Organization",(function(search){var _searchController$sea2;return search.name(null===(_searchController$sea2=searchController.search)||void 0===_searchController$sea2?void 0:_searchController$sea2.name)._sort(searchController.sort)._count(searchController.pageSize)._total("accurate")}),searchController.pageUrl);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_6__.K,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__.Wq,(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({onRowNavigate:function onRowNavigate(org){return alert("Clicked on ".concat(org.name))}},(0,_helpers__WEBPACK_IMPORTED_MODULE_5__.f)(props)),searchController),organizationsQuery)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_bonfhir_ui_r5__WEBPACK_IMPORTED_MODULE_1__.vl,(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},organizationsQuery),searchController))]})}))}};Default.parameters=(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},Default.parameters),{},{docs:(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:'{\n  args: {\n    columns: [{\n      key: "name",\n      title: "Name",\n      sortable: true,\n      render: (row: Retrieved<Organization>) => <FhirValue type="string" value={row.name} />\n    }, {\n      key: "_lastUpdated",\n      title: "Last Updated",\n      sortable: true,\n      render: (row: Retrieved<Organization>) => <FhirValue type="instant" value={row.meta.lastUpdated} />\n    }]\n  },\n  render: (props: any) => createElement(() => {\n    const searchController = useFhirSearchController<OrganizationSortOrder, {\n      name: string | undefined;\n    }>({\n      pageSize: 20,\n      defaultSort: "name",\n      defaultSearch: {\n        name: undefined\n      }\n    });\n    const organizationsQuery = useFhirSearch("Organization", search => search.name(searchController.search?.name)._sort(searchController.sort)._count(searchController.pageSize)._total("accurate"), searchController.pageUrl);\n    return <FhirTable onRowNavigate={(org: Retrieved<Organization>) => alert(`Clicked on ${org.name}`)} {...buildArgs(props)} {...searchController} {...organizationsQuery} />;\n  })\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),WithPagination.parameters=(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},WithPagination.parameters),{},{docs:(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_WithPagination$param=WithPagination.parameters)||void 0===_WithPagination$param?void 0:_WithPagination$param.docs),{},{source:(0,_Users_julien_dev_GitHub_bonfhir_bonfhir_node_modules_pnpm_babel_runtime_7_22_6_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:'{\n  args: {\n    columns: [{\n      key: "name",\n      title: "Name",\n      sortable: true,\n      render: (row: Retrieved<Organization>) => <FhirValue type="string" value={row.name} />\n    }, {\n      key: "_lastUpdated",\n      title: "Last Updated",\n      sortable: true,\n      render: (row: Retrieved<Organization>) => <FhirValue type="instant" value={row.meta.lastUpdated} />\n    }]\n  },\n  render: (props: any) => createElement(() => {\n    const searchController = useFhirSearchController<OrganizationSortOrder, {\n      name: string | undefined;\n    }>({\n      pageSize: 20,\n      defaultSort: "name",\n      defaultSearch: {\n        name: undefined\n      }\n    });\n    const organizationsQuery = useFhirSearch("Organization", search => search.name(searchController.search?.name)._sort(searchController.sort)._count(searchController.pageSize)._total("accurate"), searchController.pageUrl);\n    return <Stack>\n          <FhirTable onRowNavigate={(org: Retrieved<Organization>) => alert(`Clicked on ${org.name}`)} {...buildArgs(props)} {...searchController} {...organizationsQuery} />\n          <FhirPagination {...organizationsQuery} {...searchController} />\n        </Stack>;\n  })\n}'},null===(_WithPagination$param2=WithPagination.parameters)||void 0===_WithPagination$param2||null===(_WithPagination$param3=_WithPagination$param2.docs)||void 0===_WithPagination$param3?void 0:_WithPagination$param3.source)})});var __namedExportsOrder=["Default","WithPagination"]}}]);