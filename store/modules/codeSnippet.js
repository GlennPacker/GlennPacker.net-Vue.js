import * as codeSnippets from '../../services/codeSnippet.service';

export default {
    namespaced: true,
    state: {
        routingSnippets: {},
        eventBusSnippets: {},
        vueBasicsSnippets: {}
    },
    getters: {
        getRoutingSnippets: state => state.routingSnippets,
        getEventBusSnippets: state => state.eventBusSnippets,
        getVueBasicsSnippets: state => state.vueBasicsSnippets
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
        }
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
        }
    }
}
