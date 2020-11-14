import * as codeSnippets from '../../services/codeSnippet.service';

export default {
    namespaced: true,
    state: {
        routingSnippets: {},
        eventBusSnippets: {}
    },
    getters: {
        getRoutingSnippets: state => state.routingSnippets,
        getEventBusSnippets: state => state.eventBusSnippets
    },
    mutations: {
        setRoutingSnippets(state, data) {
            state.routingSnippets = data;
        },
        setEventBusSnippets(state, data) {
            state.eventBusSnippets = data;
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
        }
    }
}
