exports.ids = [3];
exports.modules = {

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/cheatSheet.vue?vue&type=template&id=36df10d0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"layout":"","column":""}},[_c('h3',[_vm._v("Vue JS - Cheat Sheet")]),_vm._v(" "),_c('p',[_vm._v("This is a list of useful functions that are not commonly used but worth remembering.")]),_vm._v(" "),_c('div',{staticClass:"mb-3"},[_c('h4',{on:{"click":function($event){_vm.modifyingBound = !_vm.modifyingBound}}},[_vm._v("\n      Modifying Bound Values\n      "),_c('v-icon',[_vm._v(_vm._s(_vm.modifyingBound? 'mdi-arrow-collapse-up' : 'mdi-arrow-collapse-down'))])],1),_vm._v("A list of handy input model transformation and modifiers.\n  ")]),_vm._v(" "),(_vm.modifyingBound)?_c('div',[_c('h5',[_vm._v("Trim")]),_vm._v(" "),_c('v-container',{attrs:{"layout":"","row":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('p',[_vm._v("This trims any extra white space from the model.")]),_vm._v(" "),_c('display-code',{attrs:{"code":_vm.trimCode,"oneLiner":"true"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{staticClass:"form-control",attrs:{"label":"Try it","type":"text","placeholder":"try it"},model:{value:(_vm.trim),callback:function ($$v) {_vm.trim=(typeof $$v === 'string'? $$v.trim(): $$v)},expression:"trim"}}),_vm._v(" "),_c('p',[_c('strong',[_vm._v("output:")]),_vm._v("\n          ("+_vm._s(_vm.trim)+")\n        ")])],1)],1),_vm._v(" "),_c('h5',[_vm._v("Number")]),_vm._v(" "),_c('v-container',{attrs:{"layout":"","row":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('p',[_vm._v("This attempts to convert the parameter to a number instead of the default string. Will only parse if the first char is a number.")]),_vm._v(" "),_c('display-code',{attrs:{"code":_vm.numberCode,"oneLiner":"true"}})],1),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('v-text-field',{staticClass:"form-control",attrs:{"label":"Try it","type":"text","placeholder":"try it"},model:{value:(_vm.testNo),callback:function ($$v) {_vm.testNo=_vm._n($$v)},expression:"testNo"}}),_vm._v(" "),_c('p',[_c('strong',[_vm._v("output")]),_vm._v(" (input + 1)\n          "),_c('strong',[_vm._v(":")]),_vm._v("\n          "+_vm._s(_vm.testNo + 1)+"\n        ")])],1)],1),_vm._v(" "),_c('lazy-bind')],1):_vm._e(),_vm._v(" "),_c('div',[_c('h4',{on:{"click":function($event){_vm.performance = !_vm.performance}}},[_vm._v("\n      Performance\n      "),_c('v-icon',[_vm._v(_vm._s(_vm.performance? 'mdi-arrow-collapse-up' : 'mdi-arrow-collapse-down'))])],1),_vm._v(" "),_c('p',[_vm._v("A few handy to know functions that can increas performance.")])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.performance),expression:"performance"}]},[_c('h5',[_vm._v("Once")]),_vm._v(" "),_c('v-container',{attrs:{"layout":"","row":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('p',[_vm._v("\n          When binding values to a page often there is no need to update the value for instance\n          when binding a title or an inputs label. A One time binding will be more performant\n          as vue does not have to update its value.\n        ")])]),_vm._v(" "),_c('v-flex',{attrs:{"xs6":""}},[_c('code',[_vm._v("<span v-once>"+_vm._s(_vm.someVar)+"</span>")])])],1),_vm._v(" "),_c('lazy-bind')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/cheatSheet.vue?vue&type=template&id=36df10d0&

// EXTERNAL MODULE: ./components/displayCode.vue + 4 modules
var displayCode = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/cheatSheet.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var cheatSheetvue_type_script_lang_js_ = ({
  components: {
    displayCode: displayCode["a" /* default */]
  },

  data() {
    return {
      trim: null,
      trimCode: `v-model.trim="someparam"`,
      numberCode: `v-model.number="someparam"`,
      testNo: null,
      modifyingBound: false,
      performance: false,
      someVar: "{{someVar}}"
    };
  },

  head() {
    return {
      title: "Tips and Tricks",
      meta: [{
        hid: "description",
        name: "description",
        content: "glennpacker.net vue tips and tricks"
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/cheatSheet.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_cheatSheetvue_type_script_lang_js_ = (cheatSheetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(19);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VFlex.js
var VFlex = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VTextField/VTextField.js + 10 modules
var VTextField = __webpack_require__(134);

// CONCATENATED MODULE: ./pages/cheatSheet.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_cheatSheetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d20cefcc"
  
)

/* harmony default export */ var cheatSheet = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */





installComponents_default()(component, {VContainer: VContainer["a" /* default */],VFlex: VFlex["a" /* default */],VIcon: VIcon["a" /* default */],VTextField: VTextField["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=cheatSheet.js.map