<template>
    <v-container>
        <h3>Vuex - Actions</h3>
        <code>
            import Vue from 'vue'<br/>
            import Vuex from 'vuex'<br/>
            <br/>
            Vue.use(Vuex)<br/>
            <br/>
            const state = {<br/>
            &nbsp; someParam: false<br/>
            }<br/>
            <br/>
            const store = new Vuex.Store({<br/>
                &nbsp; state,<br/>
                &nbsp; getters:{<br/>
                    &nbsp; &nbsp; someParam: (state) => {<br/>
                        &nbsp; &nbsp; &nbsp; return state.someParam;<br/>
                    &nbsp; &nbsp; }<br/>
                &nbsp; },<br/>
                &nbsp; actions:{<br/>
                    &nbsp; &nbsp; updateSomeParam(context) {<br/>
                        &nbsp; &nbsp; &nbsp; context.commit('updateSomeParam')<br/>
                    &nbsp; &nbsp; }<br/>
                &nbsp; },<br/>
                &nbsp; mutations:{<br/>
                    &nbsp; &nbsp; updateSomeParam(state) {<br/>
                        &nbsp; &nbsp; &nbsp; state.someParam = false;<br/>
                    &nbsp; &nbsp; }<br/>
                &nbsp; },<br/>
            })<br/>
        </code>
        
        <p>
            Calling Actions &amp; Mutations
        </p>
        <code>
            import { mapGetters, mapActions } from 'vuex'<br/>
            export default {<br/>
                &nbsp; methods:{<br/>
                    &nbsp; &nbsp; ...mapActions({<br/>
                        &nbsp; &nbsp; &nbsp; updateSomeParam: 'updateSomeParam'<br/>
                    &nbsp; &nbsp; })<br/>
                &nbsp;  },<br/>
                &nbsp; computed:{<br/>
                    &nbsp; &nbsp; ...mapGetters(['someParam'])<br/>
                &nbsp;  }<br/>
            }<br/>
        </code>
    </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: "Vuex Actions",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "glennpacker.net vue vuex actions"
        }
      ]
    };
  }
}
</script>