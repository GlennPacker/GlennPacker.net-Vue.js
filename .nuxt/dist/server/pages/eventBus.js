exports.ids = [6];
exports.modules = {

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/eventBus.vue?vue&type=template&id=697a7e62&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"layout":"","column":""}},[_c('h3',[_vm._v("Event Bus")]),_vm._v(" "),_c('h4',[_vm._v("Bus Setup")]),_vm._v(" "),_c('p',[_vm._v("The bus itself is a simple Vue instance with no html.")]),_vm._v(" "),_c('div',{staticStyle:{"padding-bottom":"1em"}},[_c('display-code',{attrs:{"code":_vm.snippets.eventBus1}})],1),_vm._v(" "),_c('h4',[_vm._v("Sending an event")]),_vm._v(" "),_c('p',[_vm._v("This is as simple as importing the bus and emiting an event.")]),_vm._v(" "),_c('display-code',{attrs:{"code":_vm.snippets.eventBus2}}),_vm._v(" "),_c('h4',[_vm._v("Recieving the event")]),_vm._v(" "),_c('p',[_vm._v("On the vue component that needs to recieve the event setup a simple handler.")]),_vm._v(" "),_c('display-code',{attrs:{"code":_vm.snippets.eventBus3}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/eventBus.vue?vue&type=template&id=697a7e62&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(14);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/eventBus.vue?vue&type=script&lang=js&
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

/* harmony default export */ var eventBusvue_type_script_lang_js_ = ({
  name: "eventBus",
  methods: { ...Object(external_vuex_["mapActions"])({
      'loadSnippets': 'codeSnippet/loadEventBusSnippets'
    })
  },
  computed: { ...Object(external_vuex_["mapGetters"])({
      'snippets': 'codeSnippet/getEventBusSnippets'
    })
  },

  created() {
    this.loadSnippets();
  }

});
// CONCATENATED MODULE: ./pages/eventBus.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_eventBusvue_type_script_lang_js_ = (eventBusvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(19);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(142);

// CONCATENATED MODULE: ./pages/eventBus.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_eventBusvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3c2e71d4"
  
)

/* harmony default export */ var eventBus = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VContainer: VContainer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=eventBus.js.map