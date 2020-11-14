import * as codeSnippets from '../../services/codeSnippet.service';

export default {
    namespaced: true,
    state: {
        routingSnippets: {}
    },
    getters: {
        getRoutingSnippets: state => state.routingSnippets
    },
    mutations: {
        setRoutingSnippets(state, data) {
            state.routingSnippets = data;
        }
    },
    actions: {
        loadRoutingSnippets({commit}) {
            codeSnippets.loadRoutingSnippets().then(data => {
                commit('setRoutingSnippets', data);
            })
        }
    }
}
