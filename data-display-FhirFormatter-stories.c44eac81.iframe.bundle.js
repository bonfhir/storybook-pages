"use strict";(self.webpackChunk_bonfhir_storybook=self.webpackChunk_bonfhir_storybook||[]).push([[554],{"./src/stories/data-display/FhirFormatter.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FhirFormatter_stories});var _templateObject,esm=__webpack_require__("../../packages/core/dist/r5/esm/index.mjs");const FhirFormatter_stories={title:"Data Display/FhirFormatter",component:__webpack_require__("../../packages/react/dist/r5/esm/index.mjs").CD,tags:["autodocs"],argTypes:{format:{type:"function",description:"A function that takes the formatter and return a ReactNode"}},parameters:{docs:{description:{component:"Allows complex message formatting using the `Formatter.message` builder.\n\nAs opposed to the `FhirValue` component, returns a ReactNode instead of a `Text`."}}}};var patient=(0,esm.J_Q)("Patient",{name:[{given:["John"],family:"Doe"}],active:!0}),Default={args:{format:function format(f){return f.message(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["Name: ","",""])),["HumanName",patient.name],["boolean",patient.active,{decorator:", Active: {}"}])}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    format: (f: Formatter) => f.message`Name: ${["HumanName", patient.name]}${["boolean", patient.active, {\n      decorator: ", Active: {}"\n    }]}`\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);