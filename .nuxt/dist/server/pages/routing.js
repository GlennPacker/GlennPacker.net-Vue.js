exports.ids = [7];
exports.modules = {

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


/* harmony default export */ __webpack_exports__["a"] = (Object(_grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('layout'));

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/routing.vue?vue&type=template&id=46fac3be&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"layout":"","column":""}},[_c('v-layout',{attrs:{"row":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('h3',[_vm._v("Nuxt Routing")]),_vm._v("With Nuxt the routing table is automatically built automatically from the pages directory.\n      Parameters are done via convetion of directory to be the route name and the parameter as the filename.\n    ")]),_vm._v(" "),_c('v-flex',{staticClass:"pl-3",attrs:{"xs6":""}},[_c('h4',[_vm._v("Using Nuxt Routing")]),_vm._v(" "),_c('code',[_vm._v("<nuxt-link to=\"/component\">Link Text</nuxt-link>")])])],1),_vm._v(" "),_c('v-layout',{staticClass:"pt-3",attrs:{"row":""}},[_c('v-flex',{attrs:{"xs6":""}},[_c('h3',[_vm._v("Vue JS - Example routing")]),_vm._v(" "),_c('p',[_vm._v("The Basic routing table")]),_vm._v(" "),_c('code',[_vm._v("\n        import Home from 'components/Home/home';\n        import Contact from 'components/Contact/contact';\n        import NotFound from 'components/NotFound/notFound';\n        const routes = [\n          {\n            name: 'home',\n            path: '/',\n            component: Home\n          },\n          {\n            name: 'contact',\n            path: '/contact',\n            component: Contact\n          },\n          {\n            path: '*',\n            component: NotFound\n          }\n        ];\n        export default routes;\n      ")])]),_vm._v(" "),_c('v-flex',{staticClass:"pl-3",attrs:{"xs6":""}},[_c('h4',[_vm._v("Using the Routing")]),_vm._v(" "),_c('p',[_vm._v("simply use the href or alternatively in the code use:")]),_vm._v(" "),_c('code',[_vm._v("$router.push('home');")])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/routing.vue?vue&type=template&id=46fac3be&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/routing.vue?vue&type=script&lang=js&
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
/* harmony default export */ var routingvue_type_script_lang_js_ = ({
  name: "routing",

  head() {
    return {
      title: "Vue Router",
      meta: [{
        hid: "description",
        name: "description",
        content: "glennpacker.net vue router and routing"
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/routing.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_routingvue_type_script_lang_js_ = (routingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(18);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VFlex.js
var VFlex = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js
var VLayout = __webpack_require__(152);

// CONCATENATED MODULE: ./pages/routing.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_routingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "300c34e8"
  
)

/* harmony default export */ var routing = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VContainer: VContainer["a" /* default */],VFlex: VFlex["a" /* default */],VLayout: VLayout["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=routing.js.map