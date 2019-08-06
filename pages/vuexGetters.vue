<template>
  <v-container>
    <h3>Vuex - Getters</h3>
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
      &nbsp; }
      })
    </code>
    <p>Mapping Getters on the component</p>
    <code>
      import { mapGetters } from 'vuex'
      export default {
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
      title: "Vuex Getters",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "glennpacker.net vue vuex getters"
        }
      ]
    };
  }
};
</script>