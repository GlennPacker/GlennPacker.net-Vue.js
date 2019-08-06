<template>
  <v-container>
    <h3>Vuex - Actions</h3>
    <code>
      import Vue from 'vue'
      import Vuex from 'vuex'
      Vue.use(Vuex)
      const state = {
      &nbsp; someParam: false
      }
      const store = new Vuex.Store({
      &nbsp; state,
      &nbsp; getters:{
      &nbsp; &nbsp; someParam: (state) => {
      &nbsp; &nbsp; &nbsp; return state.someParam;
      &nbsp; &nbsp; }
      &nbsp; },
      &nbsp; actions:{
      &nbsp; &nbsp; updateSomeParam(context) {
      &nbsp; &nbsp; &nbsp; context.commit('updateSomeParam')
      &nbsp; &nbsp; }
      &nbsp; },
      &nbsp; mutations:{
      &nbsp; &nbsp; updateSomeParam(state) {
      &nbsp; &nbsp; &nbsp; state.someParam = false;
      &nbsp; &nbsp; }
      &nbsp; },
      })
    </code>

    <p>Calling Actions &amp; Mutations</p>
    <code>
      import { mapGetters, mapActions } from 'vuex'
      export default {
      &nbsp; methods:{
      &nbsp; &nbsp; ...mapActions({
      &nbsp; &nbsp; &nbsp; updateSomeParam: 'updateSomeParam'
      &nbsp; &nbsp; })
      &nbsp; },
      &nbsp; computed:{
      &nbsp; &nbsp; ...mapGetters(['someParam'])
      &nbsp; }
      }
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
};
</script>