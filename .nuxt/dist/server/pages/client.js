exports.ids = [3];
exports.modules = {

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(147);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("73c440f8", content, true, context)
};

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(151);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("2903a16c", content, true, context)
};

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_style_index_0_id_7a59b301_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_style_index_0_id_7a59b301_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_style_index_0_id_7a59b301_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_style_index_0_id_7a59b301_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_panel_vue_vue_type_style_index_0_id_7a59b301_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".heading[data-v-7a59b301]{font-weight:300;color:#fff!important;font-size:1.3em}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("e23b7040", content, true)

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:\"\";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_style_index_0_id_7ba46dc7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(144);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_style_index_0_id_7ba46dc7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_style_index_0_id_7ba46dc7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_style_index_0_id_7ba46dc7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_client_vue_vue_type_style_index_0_id_7ba46dc7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "ul[data-v-7ba46dc7]{padding:16px 16px 16px 30px}dt[data-v-7ba46dc7]{font-weight:600}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);


/* harmony default export */ __webpack_exports__["a"] = (Object(_grid__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('layout'));

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/client.vue?vue&type=template&id=7ba46dc7&scoped=true&
var clientvue_type_template_id_7ba46dc7_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',[_c('h3',{staticStyle:{"padding-bottom":"25px"}},[_vm._v("Clients using Vue JS")]),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},_vm._l((_vm.vueClients),function(client,index){return _c('panel',{key:index,attrs:{"color":_vm.panelColors[8-(index%9)]}},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v(_vm._s(client.name))]),_vm._v(" "),_c('div',{attrs:{"slot":"main"},slot:"main"},[_vm._v(_vm._s(client.summary))]),_vm._v(" "),_c('div',{attrs:{"slot":"additional"},slot:"additional"},[_c('ul',[_c('dt',[_vm._v("Agile")]),_vm._v(" "),(_vm.hasBackEnd(client))?[_c('dt',[_vm._v("Back End Technologies")]),_vm._v(" "),_c('dd',[_vm._l((_vm.backEndLinks(client)),function(beTech){return _c('span',{key:beTech.text},[_c('a',{attrs:{"href":beTech.link}},[_vm._v(_vm._s(beTech.text))]),_vm._v(",\n              ")])}),_vm._v(" "),(_vm.backEndItems(client))?[_vm._v(_vm._s(_vm.backEndItems(client)))]:_vm._e()],2)]:_vm._e(),_vm._v(" "),(_vm.hasFrontEnd(client))?[_c('dt',[_vm._v("Front End Technologies")]),_vm._v(" "),_c('dd',[_vm._l((_vm.frontEndLinks(client)),function(tech){return _c('span',{key:tech.text},[_c('a',{attrs:{"href":tech.link}},[_vm._v(_vm._s(tech.text))]),_vm._v(",\n              ")])}),_vm._v(" "),(_vm.frontEndItems(client))?[_vm._v(_vm._s(_vm.frontEndItems(client)))]:_vm._e()],2)]:_vm._e(),_vm._v(" "),(client.testTech)?[_c('dt',[_vm._v("TDD / Test")]),_vm._v(" "),_c('dd',[_vm._v(_vm._s(client.testTech.join(', ')))])]:_vm._e()],2),_vm._v(" "),_c('p',[_vm._v(_vm._s(client.when))])])])}),1),_vm._v(" "),_c('h3',{staticStyle:{"padding":"25px 0"}},[_vm._v("All Recent Clients")]),_vm._v(" "),_c('v-layout',{attrs:{"row":"","wrap":""}},_vm._l((_vm.clients),function(client,index){return _c('panel',{key:index,attrs:{"color":_vm.panelColors[index%9]}},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v(_vm._s(client.name))]),_vm._v(" "),_c('div',{attrs:{"slot":"main"},slot:"main"},[_vm._v(_vm._s(client.summary))]),_vm._v(" "),_c('div',{attrs:{"slot":"additional"},slot:"additional"},[_c('ul',[_c('dt',[_vm._v("Agile")]),_vm._v(" "),(_vm.hasBackEnd(client))?[_c('dt',[_vm._v("Back End Technologies")]),_vm._v(" "),_c('dd',[_vm._l((_vm.backEndLinks(client)),function(beTech){return _c('span',{key:beTech.text},[_c('a',{attrs:{"href":beTech.link}},[_vm._v(_vm._s(beTech.text))]),_vm._v(",\n              ")])}),_vm._v(" "),(_vm.backEndItems(client))?[_vm._v(_vm._s(_vm.backEndItems(client)))]:_vm._e()],2)]:_vm._e(),_vm._v(" "),(_vm.hasFrontEnd(client))?[_c('dt',[_vm._v("Front End Technologies")]),_vm._v(" "),_c('dd',[_vm._l((_vm.frontEndLinks(client)),function(tech){return _c('span',{key:tech.text},[_c('a',{attrs:{"href":tech.link}},[_vm._v(_vm._s(tech.text))]),_vm._v(",\n              ")])}),_vm._v(" "),(_vm.frontEndItems(client))?[_vm._v(_vm._s(_vm.frontEndItems(client)))]:_vm._e()],2)]:_vm._e(),_vm._v(" "),(client.testTech)?[_c('dt',[_vm._v("TDD / Test")]),_vm._v(" "),_c('dd',[_vm._v(_vm._s(client.testTech.join(', ')))])]:_vm._e()],2),_vm._v(" "),_c('p',[_vm._v(_vm._s(client.when))])])])}),1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/client.vue?vue&type=template&id=7ba46dc7&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/panel.vue?vue&type=template&id=7a59b301&scoped=true&
var panelvue_type_template_id_7a59b301_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-flex',{attrs:{"sm4":"","pl-2":"","pr-2":""}},[_c('v-toolbar',{staticClass:"heading",attrs:{"color":_vm.color},on:{"click":function($event){_vm.show =! _vm.show}}},[_vm._t("header"),_vm._v(" "),_c('v-spacer'),_vm._v(" "),_c('v-icon',{attrs:{"dark":""}},[_vm._v("mdi-menu")])],2),_vm._v(" "),_c('v-card',{staticClass:"pa-3 mb-3",attrs:{"min-height":_vm.minHeight}},[_vm._t("main"),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}]},[_vm._t("additional")],2)],2)],1)}
var panelvue_type_template_id_7a59b301_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/panel.vue?vue&type=template&id=7a59b301&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/panel.vue?vue&type=script&lang=js&
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
/* harmony default export */ var panelvue_type_script_lang_js_ = ({
  props: {
    color: {
      type: String,
      required: true
    },
    minHeight: {
      type: String,
      default: "100"
    }
  },

  data() {
    return {
      show: false
    };
  },

  computed: {
    cardMinHeight: function () {
      return this.minHeight + "px";
    }
  }
});
// CONCATENATED MODULE: ./components/panel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_panelvue_type_script_lang_js_ = (panelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(18);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VCard/VCard.sass
var VCard = __webpack_require__(148);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSheet/index.js
var VSheet = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/loadable/index.js + 2 modules
var loadable = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/mixins/routable/index.js
var routable = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mixins.js
var mixins = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
// Styles
 // Extensions

 // Mixins


 // Helpers


/* @vue/component */

/* harmony default export */ var VCard_VCard = (Object(mixins["a" /* default */])(loadable["a" /* default */], routable["a" /* default */], VSheet["a" /* default */]).extend({
  name: 'v-card',
  props: {
    flat: Boolean,
    hover: Boolean,
    img: String,
    link: Boolean,
    loaderHeight: {
      type: [Number, String],
      default: 4
    },
    raised: Boolean
  },
  computed: {
    classes() {
      return {
        'v-card': true,
        ...routable["a" /* default */].options.computed.classes.call(this),
        'v-card--flat': this.flat,
        'v-card--hover': this.hover,
        'v-card--link': this.isClickable,
        'v-card--loading': this.loading,
        'v-card--disabled': this.disabled,
        'v-card--raised': this.raised,
        ...VSheet["a" /* default */].options.computed.classes.call(this)
      };
    },

    styles() {
      const style = { ...VSheet["a" /* default */].options.computed.styles.call(this)
      };

      if (this.img) {
        style.background = `url("${this.img}") center center / cover no-repeat`;
      }

      return style;
    }

  },
  methods: {
    genProgress() {
      const render = loadable["a" /* default */].options.methods.genProgress.call(this);
      if (!render) return null;
      return this.$createElement('div', {
        staticClass: 'v-card__progress',
        key: 'progress'
      }, [render]);
    }

  },

  render(h) {
    const {
      tag,
      data
    } = this.generateRouteLink();
    data.style = this.styles;

    if (this.isClickable) {
      data.attrs = data.attrs || {};
      data.attrs.tabindex = 0;
    }

    return h(tag, this.setBackgroundColor(this.color, data), [this.genProgress(), this.$slots.default]);
  }

}));
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VFlex.js
var VFlex = __webpack_require__(140);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(37);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(9);

// CONCATENATED MODULE: ./components/panel.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(146)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_panelvue_type_script_lang_js_,
  panelvue_type_template_id_7a59b301_scoped_true_render,
  panelvue_type_template_id_7a59b301_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "7a59b301",
  "2098e974"
  
)

/* harmony default export */ var panel = (component.exports);

/* vuetify-loader */






installComponents_default()(component, {VCard: VCard_VCard,VFlex: VFlex["a" /* default */],VIcon: VIcon["a" /* default */],VSpacer: VSpacer["a" /* default */],VToolbar: VToolbar["a" /* default */]})

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/client.vue?vue&type=script&lang=js&
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

/* harmony default export */ var clientvue_type_script_lang_js_ = ({
  components: {
    panel: panel
  },

  head() {
    return {
      title: "GlennPacker.net Clients",
      meta: [{
        hid: "description",
        name: "description",
        content: "glennpacker.net clients"
      }]
    };
  },

  data() {
    return {
      panelColors: ["#ff711e", "#ffe11e", "#c71eff", "#ffe11e", "#c71eff", "#ff711e", "#c71eff", "#ff711e", "#ffe11e"],
      vs: {
        showC1: false,
        showC2: false,
        other: {
          showC1: false,
          showC2: false,
          showC4: false,
          showC5: false,
          showC6: false,
          showC7: false,
          showC8: false,
          showC9: false
        }
      },
      clients: [{
        name: "Ultra TDS",
        jobTitle: "React Developer",
        when: "Sept 2020 - Oct 2020",
        summary: "Green field software development of a fleet management reporting system",
        projectStyle: "Agile",
        technologies: [{
          text: "React (React Hooks, Redux, React Router)",
          isBackEnd: false,
          link: "//react.glennpacker.net"
        }, {
          text: "JavaScript, SAAS, HTML",
          isBackEnd: false
        }, {
          text: "SAAS",
          isBackEnd: false
        }, {
          text: "HTML",
          isBackEnd: false
        }]
      }, {
        name: "Click Databases",
        jobTitle: "Senior Full Stack Developer",
        when: "May 2019 - Sept 2020",
        summary: "Responsive design and development",
        projectStyle: "Agile",
        technologies: [{
          text: "ASP.net Web Api",
          isBackEnd: true
        }, {
          text: "C#",
          isBackEnd: true
        }, {
          text: ".net and .net core",
          isBackEnd: true
        }, {
          text: "SQL",
          isBackEnd: true
        }, {
          text: "SQL Server",
          isBackEnd: true
        }, {
          text: "ASP.net MVC",
          isBackEnd: true
        }, {
          text: "Angular 7-9",
          isBackEnd: false,
          link: "//angular.glennpacker.net"
        }, {
          text: "Angular Js",
          link: "//glennpacker.net",
          isBackEnd: false
        }, {
          text: "NgRX",
          isBackEnd: false
        }, {
          text: "RxJs",
          isBackEnd: false
        }, {
          text: "JavaScript",
          isBackEnd: false
        }, {
          text: "TypeScript",
          isBackEnd: false
        }, {
          text: "SASS",
          isBackEnd: false
        }, {
          text: "Html",
          isBackEnd: false
        }, {
          text: "ngx-translate",
          isBackEnd: false
        }, {
          text: "Razor",
          isBackEnd: false
        }]
      }, {
        name: "The Gym Group",
        jobTitle: "Senior Full Stack Developer",
        when: "May 2019 - Oct 2019",
        summary: "Responsive design and development",
        projectStyle: "Agile",
        technologies: [{
          text: "ASP.net MVC",
          isBackEnd: true
        }, {
          text: "Web Api",
          isBackEnd: true
        }, {
          text: "C#",
          isBackEnd: true
        }, {
          text: "EpiServer",
          isBackEnd: true
        }, {
          text: "SQL",
          isBackEnd: true
        }, {
          text: "Vue",
          isBackEnd: false,
          link: "//vuejs.glennpacker.net"
        }, {
          text: "JavaScript",
          isBackEnd: false
        }, {
          text: "CSS",
          isBackEnd: false
        }, {
          text: "Html",
          isBackEnd: false
        }, {
          text: "Sass",
          isBackEnd: false
        }]
      }, {
        name: "Hastings Direct",
        jobTitle: "Senior Full Stack Developer",
        when: "May 2019 - Present",
        summary: "Application development for the insurance industry.",
        projectStyle: "Agile",
        testTech: ["Jest"],
        technologies: [{
          text: "Angular",
          isBackEnd: false,
          link: "//angular.glennpacker.net"
        }, {
          isBackEnd: false,
          text: "JSON"
        }]
      }, {
        name: "Branthill Computing",
        jobTitle: "Front End Developer",
        when: "Apr 2018 - Apr 2019",
        summary: "Green field application development for inventory Management, forecasting, demand planning and inventory control",
        projectStyle: "Agile",
        testTech: ["Jest"],
        technologies: [{
          text: "Vue Js",
          isBackEnd: false,
          link: "vuejs.glennpacker.net"
        }, {
          isBackEnd: false,
          text: "JSON"
        }, {
          isBackEnd: true,
          text: "SQL"
        }]
      }, {
        name: "Airops Software",
        jobTitle: "Senior Full Stack Developer",
        when: "Aug 2017 - Mar 2018",
        summary: "Green field application development for aviation management",
        projectStyle: "Agile",
        testTech: ["Jest", "Nunit", "MoQ", "Jasmine"],
        technologies: [{
          isBackEnd: true,
          text: "Web API"
        }, {
          isBackEnd: true,
          text: "SQL Server"
        }, {
          isBackEnd: true,
          text: "Autofac"
        }, {
          isBackEnd: true,
          text: "Entity Framework"
        }, {
          isBackEnd: true,
          text: "Dapper"
        }, {
          isBackEnd: true,
          text: ".Net Core"
        }, {
          isBackEnd: false,
          text: "Angular 5",
          link: "http://angular.glennpacker.net/"
        }, {
          isBackEnd: false,
          text: "Vue Js",
          link: "//vuejs.glennpacker.net/"
        }, {
          isBackEnd: false,
          text: "Vuetify"
        }, {
          isBackEnd: false,
          text: "JSON"
        }, {
          isBackEnd: false,
          text: "CSS"
        }, {
          isBackEnd: false,
          text: "Material Design"
        }, {
          isBackEnd: false,
          text: "Bootstrap"
        }, {
          isBackEnd: false,
          text: "JavaScript"
        }]
      }, {
        name: "Movement Statgies/Telephonica",
        jobTitle: "Senior Full Stack Developer",
        when: "Jun - Aug 2017",
        projectStyle: "Agile",
        summary: "Make a single tenant application (Movement Strategies) suitable for multiple clients with a variety of client specific options",
        testTech: ["NUnit", "Moq", "Jasmine"],
        technologies: [{
          isBackEnd: false,
          text: "Angular Js",
          link: "//angular.glennpacker.net/"
        }, {
          isBackEnd: false,
          text: "JSON"
        }, {
          isBackEnd: true,
          text: "Web Api 2"
        }, {
          isBackEnd: true,
          text: "Dynamo DB"
        }, {
          isBackEnd: true,
          text: "AWS"
        }, {
          isBackEnd: false,
          text: "JavaScript"
        }, {
          isBackEnd: false,
          text: "CSS"
        }, {
          isBackEnd: false,
          text: "Bootstrap"
        }, {
          isBackEnd: false,
          text: "HTML 5"
        }, {
          isBackEnd: true,
          text: "Autofac"
        }, {
          isBackEnd: true,
          text: "Fluent Validations"
        }, {
          isBackEnd: true,
          text: "Express Mapper"
        }, {
          isBackEnd: true,
          text: "NLog"
        }, {
          text: "MOQ"
        }, {
          text: "NUnit"
        }]
      }, {
        name: "Great Night Out",
        jobTitle: "Senior Full Stack Developer",
        when: "Jun 2013 - Jan 2018",
        summary: "Green field application development for event planning",
        projectStyle: "Agile",
        testTech: ["NUnit", "Fake It Easy"],
        technologies: [{
          text: "Angular Js",
          isBackEnd: false,
          link: "//angular.glennpacker.net/"
        }, {
          text: "JSON",
          isBackEnd: false
        }, {
          isBackEnd: true,
          text: "Web Api 2"
        }, {
          isBackEnd: true,
          text: "SQL Server"
        }, {
          isBackEnd: false,
          text: "JavaScript"
        }, {
          isBackEnd: false,
          text: "CSS"
        }, {
          isBackEnd: false,
          text: "Bootstrap"
        }, {
          text: "HTML 5",
          isBackEnd: false
        }, {
          isBackEnd: true,
          text: "Unity"
        }, {
          text: "Fake It Easy"
        }, {
          text: "NUnit"
        }]
      }, {
        name: "Lumesse",
        jobTitle: "Front end developer",
        projectStyle: "Agile",
        when: "April - May 2017",
        summary: "Front end development for the Sony, Panasonic and Ey Learning portals",
        technologies: [{
          text: "Vue Js",
          link: "//vuejs.glennpacker.net",
          isBackEnd: false
        }, {
          text: "JavaScript",
          isBackEnd: false
        }, {
          text: "JSON",
          isBackEnd: false
        }, {
          text: "CSS",
          isBackEnd: false
        }, {
          text: "HTML 5",
          isBackEnd: false
        }, {
          text: "jQuery",
          isBackEnd: false
        }]
      }, {
        name: "Airbus Space and Defence",
        jobTitle: "Senior Full Stack Developer",
        projectStyle: "Agile",
        when: "Feb – April 2017",
        summary: "Full stack development on satelite measurement and recording",
        testTech: ["MS Test", "MoQ", "Jasmine"],
        technologies: [{
          isBackEnd: true,
          text: "C#"
        }, {
          isBackEnd: true,
          text: "ASP.net MVC"
        }, {
          isBackEnd: true,
          text: "SQL Server"
        }, {
          isBackEnd: true,
          text: "Web Api"
        }, {
          isBackEnd: true,
          text: "Dapper"
        }, {
          text: "XML",
          isBackEnd: false
        }, {
          isBackEnd: true,
          text: "Master Data Services"
        }, {
          isBackEnd: true,
          text: "Entity Framework"
        }, {
          text: "Razor",
          isBackEnd: true
        }, {
          text: "TypeScript",
          isBackEnd: false
        }, {
          text: "JavaScript",
          isBackEnd: false
        }, {
          text: "JQuery",
          isBackEnd: false
        }, {
          text: "Bootstrap",
          isBackEnd: false
        }]
      }, {
        name: "Saga",
        jobTitle: "Senior Full Stack Developer",
        projectStyle: "Agile",
        when: "Mar 2016 – Jan 2017",
        summary: "Full stack development for insurance renewals, holiday insurance and data viewer",
        testTech: ["NUnit", "MoQ", "Jasmine"],
        technologies: [{
          isBackEnd: true,
          text: "C#"
        }, {
          isBackEnd: true,
          text: "ASP.net MVC"
        }, {
          isBackEnd: true,
          text: "Oracle"
        }, {
          isBackEnd: true,
          text: "SQL Server"
        }, {
          isBackEnd: true,
          text: "Dapper"
        }, {
          isBackEnd: true,
          text: "Ninject"
        }, {
          text: "Angular Js",
          link: "//angular.glennpacker.net",
          isBackEnd: false
        }, {
          isBackEnd: true,
          text: "Web API"
        }, {
          text: "HTML 5",
          isBackEnd: false
        }, {
          text: "Bootstrap",
          isBackEnd: false
        }, {
          text: "Razor",
          isBackEnd: false
        }, {
          text: "LESS",
          isBackEnd: false
        }, {
          text: "CSS",
          isBackEnd: false
        }, {
          text: "JavaScript",
          isBackEnd: false
        }, {
          text: "jQuery",
          isBackEnd: false
        }]
      }, {
        name: "Access Group",
        jobTitle: "Senior Full Stack Developer",
        projectStyle: "Agile",
        when: "Nov 2015 – Mar 2016",
        summary: "Adding new features into a scheduling system for the care industry (Mail Merge, APIs and data exports)",
        technologies: [{
          isBackEnd: true,
          text: "VB.net"
        }, {
          isBackEnd: true,
          text: "Asp.net Web Forms"
        }, {
          isBackEnd: true,
          text: "SQL Server"
        }, {
          isBackEnd: false,
          text: "Angular Js",
          link: "//angular.glennpacker.net"
        }]
      }, {
        name: "BeValued",
        jobTitle: "Senior Full Stack Developer",
        projectStyle: "Agile",
        when: "Apr 2014 – Nov 2015",
        summary: "Design and development of a fitting centre portal for the insurance claims industry.",
        testTech: ["NUnit", "FakeItEasy"],
        technologies: [{
          isBackEnd: true,
          text: "C#"
        }, {
          isBackEnd: true,
          text: "Web Api 2"
        }, {
          isBackEnd: true,
          text: "MVC4"
        }, {
          text: "Angular Js",
          link: "//angular.glennpacker.net/",
          isBackEnd: false
        }, {
          isBackEnd: true,
          text: "Entity Framework"
        }, {
          isBackEnd: true,
          text: "nHibernate"
        }, {
          isBackEnd: true,
          text: "StructureMap"
        }, {
          isBackEnd: true,
          text: "Ninject"
        }, {
          isBackEnd: true,
          text: "Autofac"
        }, {
          isBackEnd: true,
          text: "NServicebus"
        }, {
          isBackEnd: true,
          text: "SQL Server"
        }, {
          isBackEnd: true,
          text: "Log4net"
        }, {
          isBackEnd: true,
          text: "NLog"
        }, {
          text: "HTML 5",
          isBackEnd: false
        }, {
          text: "JavaScript",
          isBackEnd: false
        }, {
          text: "JQuery",
          isBackEnd: false
        }, {
          text: "CSS",
          isBackEnd: false
        }, {
          text: "Underscore Js",
          isBackEnd: false
        }, {
          isBackEnd: false,
          text: "Razor"
        }, {
          text: "Bootstrap",
          isBackEnd: false
        }, {
          text: "NuGet",
          isBackEnd: true
        }, {
          text: "JSON",
          isBackEnd: false
        }, {
          isBackEnd: true,
          text: "Classic Asp"
        }]
      }]
    };
  },

  computed: {
    vueClients() {
      return this.clients.filter(client => client.technologies.some(t => t.text.toLowerCase().includes("vue")));
    }

  },
  methods: {
    backEndItems(client) {
      const items = client.technologies.filter(r => r.isBackEnd && !r.link);
      return items.map(item => item.text).join(", ");
    },

    backEndLinks(client) {
      return client.technologies.filter(r => r.isBackEnd && r.link);
    },

    frontEndItems(client) {
      const items = client.technologies.filter(r => !r.isBackEnd && !r.link);
      return items.map(item => item.text).join(", ");
    },

    frontEndLinks(client) {
      return client.technologies.filter(r => !r.isBackEnd && r.link);
    },

    hasBackEnd(client) {
      return client.technologies.some(r => r.isBackEnd);
    },

    hasFrontEnd(client) {
      return client.technologies.some(r => !r.isBackEnd);
    }

  }
});
// CONCATENATED MODULE: ./pages/client.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_clientvue_type_script_lang_js_ = (clientvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(138);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VLayout.js
var VLayout = __webpack_require__(152);

// CONCATENATED MODULE: ./pages/client.vue



function client_injectStyles (context) {
  
  var style0 = __webpack_require__(150)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var client_component = Object(componentNormalizer["a" /* default */])(
  pages_clientvue_type_script_lang_js_,
  clientvue_type_template_id_7ba46dc7_scoped_true_render,
  staticRenderFns,
  false,
  client_injectStyles,
  "7ba46dc7",
  "78c71b19"
  
)

/* harmony default export */ var client = __webpack_exports__["default"] = (client_component.exports);

/* vuetify-loader */



installComponents_default()(client_component, {VContainer: VContainer["a" /* default */],VLayout: VLayout["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=client.js.map