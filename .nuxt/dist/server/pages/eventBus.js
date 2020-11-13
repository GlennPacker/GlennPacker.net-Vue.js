exports.ids = [5];
exports.modules = {

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basicComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return eventBus1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return eventBus2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return eventBus3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return vuex1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return vuex2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return vuex3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return vuexActions1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return vuexActions2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return vuexGetters1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return vuexGetters2; });
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

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/eventBus.vue?vue&type=template&id=dca65d50&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-container',{attrs:{"layout":"","column":""}},[_c('h3',[_vm._v("Event Bus")]),_vm._v(" "),_c('h4',[_vm._v("Bus Setup")]),_vm._v(" "),_c('p',[_vm._v("The bus itself is a simple Vue instance with no html.")]),_vm._v(" "),_c('div',{staticStyle:{"padding-bottom":"1em"}},[_c('display-code',{attrs:{"code":_vm.eventBus1}})],1),_vm._v(" "),_c('h4',[_vm._v("Sending an event")]),_vm._v(" "),_c('p',[_vm._v("This is as simple as importing the bus and emiting an event.")]),_vm._v(" "),_c('display-code',{attrs:{"code":_vm.eventBus2}}),_vm._v(" "),_c('h4',[_vm._v("Recieving the event")]),_vm._v(" "),_c('p',[_vm._v("On the vue component that needs to recieve the event setup a simple handler.")]),_vm._v(" "),_c('display-code',{attrs:{"code":_vm.eventBus3}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/eventBus.vue?vue&type=template&id=dca65d50&

// EXTERNAL MODULE: ./codeSnippets.js
var codeSnippets = __webpack_require__(142);

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

  data() {
    return {
      eventBus1: codeSnippets["b" /* eventBus1 */],
      eventBus2: codeSnippets["c" /* eventBus2 */],
      eventBus3: codeSnippets["d" /* eventBus3 */]
    };
  }

});
// CONCATENATED MODULE: ./pages/eventBus.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_eventBusvue_type_script_lang_js_ = (eventBusvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(18);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(138);

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