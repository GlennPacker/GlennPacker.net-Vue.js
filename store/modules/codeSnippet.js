import * as codeSnippets from '../../services/codeSnippet.service';

export default {
    namespaced: true,
    state: {
        routingSnippets: {},
        eventBusSnippets: {},
        vueBasicsSnippets: {},
        vuexSetupSnippets: {},
        vuexActionsSnippets: {}
    },
    getters: {
        getEventBusSnippets: state => state.eventBusSnippets,
        getRoutingSnippets: state => state.routingSnippets,
        getVueBasicsSnippets: state => state.vueBasicsSnippets,
        getVuexActionsSnippets: state => state.vuexActionsSnippets,
        getVuexSetupSnippets: state => state.vuexSetupSnippets
    },
    mutations: {
        setRoutingSnippets(state, data) {
            state.routingSnippets = data;
        },
        setEventBusSnippets(state, data) {
            state.eventBusSnippets = data;
        },
        setVueBasicsSnippets(state, data) {
            state.vueBasicsSnippets = data;
        },
        setVuexActionsSnippets(state, data) {
            state.vuexActionsSnippets = data;
        },
        setVuexSetupSnippets(state, data) {
            state.vuexSetupSnippets = data;
        },
    },
    actions: {
        loadRoutingSnippets({commit}) {
            codeSnippets.loadRoutingSnippets().then(data => {
                commit('setRoutingSnippets', data);
            })
        },
        loadEventBusSnippets({commit}) {
            codeSnippets.loadEventBusSnippets().then(data => {
                commit('setEventBusSnippets', data);
            })
        },
        loadVueBasicsSnippets({commit}) {
            codeSnippets.loadVueBasicsSnippets().then(data => {
                commit('setVueBasicsSnippets', data);
            })
        },
        loadVuexActionsSnippets({commit}) {
            codeSnippets.loadVuexActionsSnippets().then(data => {
                commit('setVuexActionsSnippets', data);
            })
        },
        loadVuexSetupSnippets({commit}) {
            codeSnippets.loadVuexSetupSnippets().then(data => {
                commit('setVuexSetupSnippets', data);
            })
        }
    }
}
