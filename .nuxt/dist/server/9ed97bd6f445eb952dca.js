exports.ids=[9],exports.modules={144:function(t,e,n){"use strict";n.r(e);var o={head:()=>({title:"Vuex Actions",meta:[{hid:"description",name:"description",content:"glennpacker.net vue vuex actions"}]})},m=n(12),r=n(15),c=n.n(r),d=n(104),component=Object(m.a)(o,function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("h3",[this._v("Vuex - Actions")]),this._v(" "),e("code",[this._v("\n    import Vue from 'vue'\n    import Vuex from 'vuex'\n    Vue.use(Vuex)\n    const state = {\n      someParam: false\n    }\n    const store = new Vuex.Store({\n      state,\n      getters:{\n        someParam: (state) => {\n          return state.someParam;\n        }\n      },\n      actions:{\n        updateSomeParam(context) {\n          context.commit('updateSomeParam')\n        }\n      },\n      mutations:{\n        updateSomeParam(state) {\n          state.someParam = false;\n        }\n      },\n    })\n  ")]),this._v(" "),e("p",[this._v("Calling Actions & Mutations")]),this._v(" "),e("code",[this._v("\n    import { mapGetters, mapActions } from 'vuex'\n    export default {\n      methods:{\n        ...mapActions({\n          updateSomeParam: 'updateSomeParam'\n        })\n      },\n      computed:{\n        ...mapGetters(['someParam'])\n      }\n    }\n  ")])])},[],!1,null,null,"5f872fe2");e.default=component.exports;c()(component,{VContainer:d.a})}};
//# sourceMappingURL=9ed97bd6f445eb952dca.js.map