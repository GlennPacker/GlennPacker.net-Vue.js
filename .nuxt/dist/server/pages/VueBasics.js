exports.ids = [2];
exports.modules = {

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basicComponent; });
/* unused harmony export eventBus1 */
/* unused harmony export eventBus2 */
/* unused harmony export eventBus3 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return vuex1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vuex2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return vuex3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return vuexActions1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return vuexActions2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return vuexGetters1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return vuexGetters2; });
const basicComponent = `   import Vue from 'vue';
    import template from './template.html';
    import anotherComponent from '../anothercomponent/anothercomponent'

    export default {
        mixins: [aMixin],
        components: {
            anotherComponent
        }
        template,
        props: {
            a: String/Number/Object,
            b: [String, Number],
            c: {
                type: String,
                default: 'foo'
            },
        },
        data(){
            return {
                message: 'hi',
                basicObject: { message: 'foo'}
            }
        },
        methods:{
            talk(){
                console.write(this.message);
            }
        },
        computed: {
            aComputedProperty: function() {
                return this.message + 'there';
            }
        },
        watch: {
            message: function(newVal, oldVal) {
                console.log('new value' + newVal);
            },
            'basicObject.message': function (newVal,OldVal) {
                console.log('property of an object');
            }
        },
        created: function () {
            console.log('component created);
        },
        mounted: function () {
            console.log('component mounted);
        },
    };`;
const eventBus1 = `   import Vue from 'vue';
    export const EventBus = new Vue();`;
const eventBus2 = `   import { EventBus } from './event-bus.js';

    export default {
        data() {
            return {
                someData: 'payload'
            }
        }
        methods: {
            sendEvent() {
                EventBus.$emit('i-got-clicked', this.someData); // i-got-clicked = event name
            }
        }
    }`;
const eventBus3 = `   import { EventBus } from './event-bus.js';
    export default {
        created() {
            // Listen for the i-got-clicked event and its data.
            EventBus.$on('i-got-clicked', data => {
                console.log(data);
            });
        }
    }`;
const vuex1 = `npm install vuex --save`;
const vuex2 = `   import Vue from 'vue'
    import Vuex from 'vuex'
    Vue.use(Vuex)
    const state = {
        someParam : false
    }
    // create the store and add the json state object
    const store = new Vuex.Store({
        state
    })
    export default store`;
const vuex3 = `   import Vue from 'vue'
    import store from './vuex/index.js'

    const app = new Vue({
        store
    })

    export { app, store }`;
const vuexActions1 = `import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
    const state = {
        someParam: false
    }
    const store = new Vuex.Store({
        state,
        getters:{
        someParam: (state) => {
            return state.someParam;
        }
    },
    actions:{
        updateSomeParam({ commit }) {
            commit('updateSomeParam')
        }
    },
    mutations:{
        updateSomeParam(state) {
            state.someParam = false;
        }
    },
})`;
const vuexActions2 = `import { mapGetters, mapActions } from 'vuex'
export default {
    methods:{
        ...mapActions(['updateSomeParam'])
        ...mapActions({ updateSomeParam: 'updateSomeParam' })
        // with namespaces
        ...mapActions('namespace', ['addRobot','loadParts'])
    },
    computed:{
        ...mapGetters(['someParam'])
        ...mapGetters({'someParam': 'someParam'})
        // with namespaces
        ...mapActions({'someParam', 'namespace/someParam'})
    }
}`;
const vuexGetters1 = `import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
    const state = {
        someParam: false
    }
    const store = new Vuex.Store({
        state,
        getters:{
            someParam: state => state.someParam
        }
    }
})`;
const vuexGetters2 = `import { mapGetters } from 'vuex'

export default {
    computed:{
        ...mapGetters(['someParam'])
        ...mapGetters({'someParam': 'someParam'})
        // with namespaces
        ...mapActions({'someParam', 'namespace/someParam'})
    }
}`;

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/VueBasics.vue?vue&type=template&id=2a8602c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"layout":"","column":""}},[_c('h3',[_vm._v("Components")]),_vm._v(" "),_c('p',[_vm._v("The basic component framework")]),_vm._v(" "),_c('v-container',{staticClass:"d-flex flex-row justify-start"},[_c('v-container',[_c('display-code',{attrs:{"code":_vm.basicComponent}})],1),_vm._v(" "),_c('v-container',[_c('h4',[_vm._v("Imports")]),_vm._v(" "),_c('p',[_vm._v("Other files that this component needs. If it is a component that is common use throughout the application it is better to put it in main.js. If using Nuxt the reference is made automatically by put it in the component folder.")]),_vm._v(" "),_c('h4',[_vm._v("Template")]),_vm._v(" "),_c('p',[_vm._v("The template is the html file that will be rendered. This can be put in the component or a serperate file.")]),_vm._v(" "),_c('h4',[_vm._v("Props")]),_vm._v(" "),_c('p',[_vm._v("\n        The calling component can push data into the child component via the html attributes.\n        In the child component this is accessible through props in array or object syntax. Object syntax is the Vue Style guides suggestion.\n      ")]),_vm._v(" "),_c('h4',[_vm._v("Methods")]),_vm._v(" "),_c('p',[_vm._v("This is the place that the component has its custom methods. This could be for loading data, user interaction.")]),_vm._v(" "),_c('h4',[_vm._v("Computed")]),_vm._v(" "),_c('p',[_vm._v("Intended for simple operations and reducing concatenations and other manipluation within the page. A useful one for custom validation methods when using vee-validate.")]),_vm._v(" "),_c('h4',[_vm._v("Watch")]),_vm._v(" "),_c('p',[_vm._v("If you need interation when a value or object changes this is the place for it.")]),_vm._v(" "),_c('h4',[_vm._v("Created")]),_vm._v(" "),_c('p',[_vm._v("\n        This is part of the page life cycle it runs on the component before the DOM has loaded. This is the best place to load initial data.\n        "),_c('br'),_vm._v("While Created and Mounted are the most commonly used lifecycle hooks there is also a beforeCreate, beforeMount, beforeUpdate, updated, beforeDestroy and destroyed. More information on these is available\n        "),_c('a',{attrs:{"href":"https://alligator.io/vuejs/component-lifecycle/"}},[_vm._v("here")]),_vm._v(".\n      ")]),_vm._v(" "),_c('h4',[_vm._v("Mounted")]),_vm._v(" "),_c('p',[_vm._v("This is part of the page life cyle where the DOM is added. This should not be used for fetching data.")])])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/VueBasics.vue?vue&type=template&id=2a8602c8&

// EXTERNAL MODULE: ./codeSnippets.js
var codeSnippets = __webpack_require__(146);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/VueBasics.vue?vue&type=script&lang=js&
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

/* harmony default export */ var VueBasicsvue_type_script_lang_js_ = ({
  name: "componentBasics",

  data() {
    return {
      basicComponent: codeSnippets["a" /* basicComponent */]
    };
  }

});
// CONCATENATED MODULE: ./pages/VueBasics.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_VueBasicsvue_type_script_lang_js_ = (VueBasicsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(19);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(142);

// CONCATENATED MODULE: ./pages/VueBasics.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_VueBasicsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cb8c0ba6"
  
)

/* harmony default export */ var VueBasics = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VContainer: VContainer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=VueBasics.js.map