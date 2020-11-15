export const vuexActions1 =
`import Vue from 'vue'
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
})`


export const vuexActions2 =
`import { mapGetters, mapActions } from 'vuex'
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
}`

export const vuexGetters1 =
`import Vue from 'vue'
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
})`


export const vuexGetters2 =
`import { mapGetters } from 'vuex'

export default {
    computed:{
        ...mapGetters(['someParam'])
        ...mapGetters({'someParam': 'someParam'})
        // with namespaces
        ...mapActions({'someParam', 'namespace/someParam'})
    }
}`
