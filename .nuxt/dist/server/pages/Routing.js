exports.ids = [1];
exports.modules = {

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);


/* harmony default export */ __webpack_exports__["a"] = (Object(_grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('layout'));

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Routing.vue?vue&type=template&id=5d9803d8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"layout":"","column":""}},[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('h3',[_vm._v("Nuxt Routing")]),_vm._v("With Nuxt the routing table is automatically built automatically from the pages directory.\n      Parameters are done via convetion of directory to be the route name and the parameter as the filename.\n    ")]),_vm._v(" "),_c('v-flex',{staticClass:"pl-3",attrs:{"xs6":""}},[_c('h4',[_vm._v("Using Nuxt Routing")]),_vm._v(" "),_c('display-code',{attrs:{"code":_vm.snippets.routing1,"oneLiner":true}})],1)],1),_vm._v(" "),_c('v-layout',{staticClass:"pt-3",attrs:{"row":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('h3',[_vm._v("Vue JS - Example routing")]),_vm._v(" "),_c('p',[_vm._v("The Basic routing table")]),_vm._v(" "),_c('display-code',{attrs:{"code":_vm.snippets.routing2}})],1),_vm._v(" "),_c('v-flex',{staticClass:"pl-3",attrs:{"xs6":""}},[_c('h4',[_vm._v("Using the Routing")]),_vm._v(" "),_c('p',[_vm._v("simply use the href or alternatively in the code use:")]),_vm._v(" "),_c('display-code',{attrs:{"code":_vm.snippets.routing3,"oneLiner":true}})],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Routing.vue?vue&type=template&id=5d9803d8&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Routing.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Routingvue_type_script_lang_js_ = ({
  name: "routing",
  computed: { ...Object(external_vuex_["mapGetters"])({
      snippets: 'codeSnippet/getRoutingSnippets'
    })
  },
  methods: { ...Object(external_vuex_["mapActions"])({
      loadSnippets: 'codeSnippet/loadRoutingSnippets'
    })
  },

  head() {
    return {
      title: "Vue Router",
      meta: [{
        hid: "description",
        name: "description",
        content: "glennpacker.net vue router and routing"
      }]
    };
  },

  created() {
    this.loadSnippets();
  }

});
// CONCATENATED MODULE: ./pages/Routing.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Routingvue_type_script_lang_js_ = (Routingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(19);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(142);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VFlex.js
var VFlex = __webpack_require__(144);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js
var VLayout = __webpack_require__(156);

// CONCATENATED MODULE: ./pages/Routing.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Routingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d9144670"
  
)

/* harmony default export */ var Routing = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VContainer: VContainer["a" /* default */],VFlex: VFlex["a" /* default */],VLayout: VLayout["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=Routing.js.map