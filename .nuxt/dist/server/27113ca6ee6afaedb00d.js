exports.ids=[11],exports.modules={105:function(e,t,n){"use strict";n(28);var o=n(29);t.a=Object(o.a)("flex")},146:function(e,t,n){"use strict";n.r(t);var o={head:()=>({title:"Vuex",meta:[{hid:"description",name:"description",content:"glennpacker.net vue vuex"}]})},r=n(12),v=n(15),c=n.n(v),l=n(104),m=n(105),component=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{layout:"",column:""}},[n("h3",[e._v("State Management (Vuex)")]),e._v(" "),n("v-flex",[e._v("Install vuex via npm.")]),e._v(" "),n("code",{staticClass:"pt-2 pb-2"},[e._v("npm install vuex --save")]),e._v(" "),n("v-flex",{staticClass:"pt-2"},[e._v("Create a Vuex component.")]),e._v(" "),n("code",[e._v("\n    import Vue from 'vue'\n    import Vuex from 'vuex'\n    Vue.use(Vuex)\n    const state = {\n      someParam : false\n    }\n    // create the store and add the json state object\n    const store = new Vuex.Store({\n      state\n    })\n    export default store\n  ")]),e._v(" "),n("v-flex",{staticClass:"pt-2"},[e._v("Register the store with the root main app.js")]),e._v(" "),n("code",[e._v("\n    import Vue from 'vue'\n    import store from './vuex/index.js'\n    const app = new Vue({\n      store\n    })\n    export { app, store }\n  ")]),e._v(" "),n("v-flex",{staticClass:"pt-2"},[e._v("Simple data i/o")]),e._v(" "),n("code",[e._v("\n    this.$store.state.someParam = true;\n    let foo = this.$store.state.someParam;\n  ")])],1)},[],!1,null,null,"27be9ebc");t.default=component.exports;c()(component,{VContainer:l.a,VFlex:m.a})}};
//# sourceMappingURL=27113ca6ee6afaedb00d.js.map