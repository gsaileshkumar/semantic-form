(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{395:function(module,exports,__webpack_require__){__webpack_require__(396),__webpack_require__(542),module.exports=__webpack_require__(543)},460:function(module,exports){},543:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(371);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(701),module)}.call(this,__webpack_require__(544)(module))},701:function(module,exports,__webpack_require__){var map={"./Basic.stories.tsx":780};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=701},780:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SimpleForm",(function(){return SimpleExample})),__webpack_require__.d(__webpack_exports__,"ConditionForm",(function(){return basic_ConditionExample})),__webpack_require__.d(__webpack_exports__,"IfElseForm",(function(){return basic_IfElseExample}));__webpack_require__(702);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),react_final_form_es=__webpack_require__(29),core_Condition=function Condition(_a){var children=_a.children,condition=_a.condition,is=_a.is,when=_a.when,_b=_a.resetOnFalse,resetOnFalse=void 0===_b||_b;return react_default.a.createElement(react_final_form_es.a,{name:when},(function(_a){var value=_a.input.value;return value===is||condition&&condition(value)?children:resetOnFalse&&react_default.a.Children.map(children,(function(child){return child.props.name?react_default.a.createElement(react_final_form_es.a,{name:child.props.name},(function(_a){return(0,_a.input.onChange)(void 0),null})):child}))}))},IfElse=function IfElseCondition(_a){var when=_a.when,condition=_a.condition,is=_a.is,renderOnFalse=_a.renderOnFalse,renderOnTrue=_a.renderOnTrue;return react_default.a.createElement(react_final_form_es.a,{name:when},(function(_a){var value=_a.input.value;return value===is||condition&&condition(value)?renderOnTrue:renderOnFalse||null}))},tslib_es6=__webpack_require__(20),Dropdown=__webpack_require__(793);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var fieldTypes_Dropdown=function DropdownGroup(_a){var name=_a.name,rest=(_a.readOnly,_a.onChange,Object(tslib_es6.b)(_a,["name","readOnly","onChange"]));return react_default.a.createElement(react_final_form_es.a,_extends({},rest,{name:name}),(function(_a){var input=_a.input,others=(_a.meta,Object(tslib_es6.b)(_a,["input","meta"]));return react_default.a.createElement(Dropdown.a,_extends({},others,{onFocus:function onFocusHandler(event,data){input.onFocus()},onChange:function onChangeHandler(event,data){input.onChange(data.value)},onBlur:function onBlurHandler(event,data){input.onBlur()},value:input.value,name:input.name}))}))},Input=__webpack_require__(790);function Input_extends(){return(Input_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var fieldTypes_Input=function InputGroup(_a){var name=_a.name,rest=(_a.readOnly,_a.onChange,Object(tslib_es6.b)(_a,["name","readOnly","onChange"]));return react_default.a.createElement(react_final_form_es.a,Input_extends({},rest,{name:name}),(function(_a){var input=_a.input,others=(_a.meta,Object(tslib_es6.b)(_a,["input","meta"]));return react_default.a.createElement(Input.a,Input_extends({},others,input,{onChange:function onChangeHandler(e,data){input.onChange(data.value)},required:void 0}))}))},Radio=__webpack_require__(791);function Radio_extends(){return(Radio_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var Radio_RadioField=function RadioField(_a){var options=_a.options,value=_a.value,direction=_a.direction,rest=Object(tslib_es6.b)(_a,["options","value","direction"]);return react_default.a.createElement("div",{style:{display:"flex",flexDirection:"vertical"===direction?"column":"row"}},options.map((function(option){return react_default.a.createElement(Radio.a,Radio_extends({},rest,option,{style:Object(tslib_es6.a)(Object(tslib_es6.a)({},rest.style),{paddingRight:"1rem"}),label:option.text,checked:value===option.value}))})))},fieldTypes_Radio=function RadioGroup(_a){var name=_a.name,direction=(_a.readOnly,_a.direction),options=_a.options,rest=Object(tslib_es6.b)(_a,["name","readOnly","direction","options"]);return react_default.a.createElement(react_final_form_es.a,Radio_extends({},rest,{name:name}),(function(_a){var input=_a.input,others=(_a.meta,Object(tslib_es6.b)(_a,["input","meta"]));return react_default.a.createElement(Radio_RadioField,Radio_extends({},others,{options:options,onFocus:function onFocusHandler(event,data){input.onFocus()},onChange:function onChangeHandler(event,data){input.onChange(data.value)},onBlur:function onBlurHandler(event,data){input.onBlur()},value:input.value,name:input.name,direction:direction}))}))},Checkbox=__webpack_require__(781);function Checkbox_extends(){return(Checkbox_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var Checkbox_CheckboxField=function CheckboxField(_a){var options=_a.options,_b=_a.value,value=void 0===_b?[]:_b,onChange=_a.onChange,direction=_a.direction,rest=Object(tslib_es6.b)(_a,["options","value","onChange","direction"]),_c=Object(react.useState)(value),selectedValue=_c[0],setSelectedValue=_c[1];Object(react.useEffect)((function(){onChange&&onChange(selectedValue)}),[selectedValue]);var onChangeHandler=function onChangeHandler(event,data){value.includes(data.value)?setSelectedValue(value.filter((function(checkboxValue){return data.value!==checkboxValue}))):setSelectedValue(Object(tslib_es6.c)(value,[data.value]))};return console.log("value",value),react_default.a.createElement("div",{style:{display:"flex",flexDirection:"vertical"===direction?"column":"row"}},options.map((function(option){return react_default.a.createElement(Checkbox.a,Checkbox_extends({},rest,option,{onChange:onChangeHandler,style:Object(tslib_es6.a)(Object(tslib_es6.a)({},rest.style),{paddingRight:"1rem"}),label:option.text,checked:value.includes(option.value)}))})))},fieldTypes_Checkbox=function CheckboxGroup(_a){var name=_a.name,direction=_a.direction,options=_a.options,rest=Object(tslib_es6.b)(_a,["name","direction","options"]);return react_default.a.createElement(react_final_form_es.a,Checkbox_extends({},rest,{name:name}),(function(_a){var input=_a.input,others=(_a.meta,Object(tslib_es6.b)(_a,["input","meta"]));return console.log("input valur",input.value),react_default.a.createElement(Checkbox_CheckboxField,Checkbox_extends({},others,{options:options,onFocus:function onFocusHandler(event,data){input.onFocus()},onChange:function onChangeHandler(value){value.length?input.onChange(value):input.onChange(void 0)},onBlur:function onBlurHandler(event,data){input.onBlur()},value:input.value,name:input.name,direction:direction}))}))},TextArea=__webpack_require__(792);function TextArea_extends(){return(TextArea_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var fieldTypes_TextArea=function TextAreaGroup(_a){var name=_a.name,rest=Object(tslib_es6.b)(_a,["name"]);return react_default.a.createElement(react_final_form_es.a,TextArea_extends({},rest,{name:name}),(function(_a){var input=_a.input,others=(_a.meta,Object(tslib_es6.b)(_a,["input","meta"]));return react_default.a.createElement(TextArea.a,TextArea_extends({},others,input,{onChange:function onChangeHandler(event,data){input.onChange(data.value)},required:void 0}))}))},constants_Errors={REQUIRED:"This field is required."},DEFAULT_FIELD_STYLE={display:"flex",flexDirection:"column",marginBottom:"1rem"},core_Error=function Error(_a){var name=_a.name;return react_default.a.createElement(react_final_form_es.a,{name:name},(function(_a){var meta=_a.meta,touched=meta.touched,error=meta.error;return react_default.a.createElement("span",{style:{color:"#c14545"}},touched&&error)}))};function Field_extends(){return(Field_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var core_Field=function Field(props){var fieldType=props.fieldType,required=props.required,validate=props.validate,labelText=props.labelText,hint=props.hint,name=props.name,fieldValidate=function fieldValidate(value,allValues){return required&&function isEmpty(value){return""===value||null==value||!(!Array.isArray(value)||0!==value.length)}(value)?constants_Errors.REQUIRED:validate&&validate(value,allValues)},fieldComp=react_default.a.createElement(fieldTypes_Input,Field_extends({validate:fieldValidate},props));switch(fieldType){case"dropdown":fieldComp=react_default.a.createElement(fieldTypes_Dropdown,Field_extends({validate:fieldValidate},props));break;case"radio":fieldComp=react_default.a.createElement(fieldTypes_Radio,Field_extends({validate:fieldValidate},props));break;case"checkbox":fieldComp=react_default.a.createElement(fieldTypes_Checkbox,Field_extends({validate:fieldValidate},props));break;case"textarea":fieldComp=react_default.a.createElement(fieldTypes_TextArea,Field_extends({validate:fieldValidate},props))}return react_default.a.createElement("div",{style:DEFAULT_FIELD_STYLE},react_default.a.createElement("label",{htmlFor:name,style:{paddingBottom:5}},labelText||name,required?" :*":" :"),fieldComp,react_default.a.createElement("span",{style:{color:"#adadad",padding:"5px 0"}},hint),react_default.a.createElement(core_Error,{name:name}))},Button=__webpack_require__(782),DEFAULT_FORM_SUBSCRIPTION={submitting:!0,pristine:!0,invalid:!0},core_Form=function Form(props){var initialValues=props.initialValues,_render=props.render,children=props.children,_a=props.subscription,subscription=void 0===_a?DEFAULT_FORM_SUBSCRIPTION:_a,onSubmit=props.onSubmit;return react_default.a.createElement(react_final_form_es.b,{onSubmit:onSubmit,subscription:subscription,initialValues:initialValues,render:function render(renderProps){var handleSubmit=renderProps.handleSubmit,rest=Object(tslib_es6.b)(renderProps,["handleSubmit"]);return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("form",{onSubmit:handleSubmit},_render?_render(renderProps):null,react_default.a.createElement(Button.a,{type:"submit",primary:!0,disabled:rest.submitting||rest.pristine||rest.invalid,style:{marginTop:"1rem"}},"Submit")))}},children)},styles_ValuesComponent=function ValuesComponent(_a){var values=_a.values;return react_default.a.createElement("div",{style:{backgroundColor:"#dddddd",padding:"1rem"}},react_default.a.createElement("pre",null,JSON.stringify(values,null,2)))},styles=function StoryWrapper(_a){var children=_a.children;return react_default.a.createElement("div",{style:{width:500,margin:"0 auto"}},children)},SimpleExample=function SimpleForm(){return react_default.a.createElement(styles,null,react_default.a.createElement(core_Form,{onSubmit:function onSubmitHandler(values){console.log("values",values)},subscription:{values:!0,submitting:!0,pristine:!0,invalid:!0},render:function render(_a){var values=_a.values;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(core_Field,{name:"firstname",labelText:"First name",required:!0,hint:"Required"}),react_default.a.createElement(core_Field,{name:"lastname",labelText:"Last name"}),react_default.a.createElement(core_Field,{name:"age",type:"number",labelText:"Age",required:!0}),react_default.a.createElement(core_Field,{name:"gender",fieldType:"dropdown",labelText:"Gender",options:[{text:"Male",value:"male"},{text:"Female",value:"female"}],selection:!0}),react_default.a.createElement(core_Field,{name:"citizen",fieldType:"radio",labelText:"Are you a citizen?",options:[{text:"Yes",value:!0},{text:"No",value:!1}]}),react_default.a.createElement(core_Field,{name:"preferredLocation",fieldType:"checkbox",labelText:"Preferred Location",options:[{text:"Singapore",value:"sg"},{text:"India",value:"in"},{text:"United States",value:"us"}],selection:!0}),react_default.a.createElement(core_Field,{name:"address",required:!0,labelText:"Address",fieldType:"textarea",hint:"Please include pincode"}),react_default.a.createElement(styles_ValuesComponent,{values:values}))}}))},basic_ConditionExample=function ConditionExample(){return react_default.a.createElement(styles,null,react_default.a.createElement(core_Form,{onSubmit:function onSubmitHandler(values){console.log("values",values)},subscription:{values:!0,submitting:!0,pristine:!0,invalid:!0},render:function render(_a){var values=_a.values;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(core_Field,{name:"fullname",labelText:"Full name",required:!0}),react_default.a.createElement(core_Field,{name:"age",type:"number",labelText:"Age",required:!0,hint:"Driving license required for adults (age > 18)"}),react_default.a.createElement(core_Field,{name:"gender",fieldType:"dropdown",labelText:"Gender",options:[{text:"Male",value:"male"},{text:"Female",value:"female"}],selection:!0}),react_default.a.createElement(core_Condition,{when:"age",condition:function condition(value){return value>18}},react_default.a.createElement(core_Field,{name:"licenseNo",labelText:"Driving license Number"})),react_default.a.createElement(styles_ValuesComponent,{values:values}))}}))},basic_IfElseExample=function IfElseExample(){return react_default.a.createElement(styles,null,react_default.a.createElement(core_Form,{onSubmit:function onSubmitHandler(values){console.log("values",values)},subscription:{values:!0,submitting:!0,pristine:!0,invalid:!0},render:function render(_a){var values=_a.values;return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(core_Field,{name:"hasAccount",required:!0,fieldType:"radio",labelText:"Already have account?",options:[{text:"Yes",value:!0},{text:"No",value:!1}],selection:!0}),react_default.a.createElement(IfElse,{when:"hasAccount",is:!0,renderOnTrue:react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("h2",null,"Login here"),react_default.a.createElement(core_Field,{name:"username",labelText:"Username"}),react_default.a.createElement(core_Field,{name:"password",labelText:"Password",type:"password"})),renderOnFalse:react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("h2",null,"Signup here"),react_default.a.createElement(core_Field,{name:"firstname",labelText:"First name",required:!0,hint:"Required"}),react_default.a.createElement(core_Field,{name:"lastname",labelText:"Last name"}),react_default.a.createElement(core_Field,{name:"age",type:"number",labelText:"Age",required:!0}),react_default.a.createElement(core_Field,{name:"gender",fieldType:"dropdown",labelText:"Gender",options:[{text:"Male",value:"male"},{text:"Female",value:"female"}],selection:!0}))}),react_default.a.createElement(styles_ValuesComponent,{values:values}))}}))};__webpack_exports__.default={title:"Basic Examples"}}},[[395,1,2]]]);
//# sourceMappingURL=main.2787c06c9a5a5e419490.bundle.js.map