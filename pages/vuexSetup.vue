<template>
  <v-container layout column>
    <h3>State Management (Vuex)</h3>
    <v-flex>Install vuex via npm.</v-flex>
    <code class="pt-2 pb-2">npm install vuex --save</code>

    <v-flex class="pt-2">Create a Vuex component.</v-flex>
    <code>
      import Vue from 'vue'
      import Vuex from 'vuex'
      Vue.use(Vuex)
      const state = {
      &nbsp; someParam : false
      }
      // create the store and add the json state object
      const store = new Vuex.Store({
      &nbsp; state
      })
      export default store
    </code>

    <v-flex class="pt-2">Register the store with the root main app.js</v-flex>
    <code>
      import Vue from 'vue'
      import store from './vuex/index.js'
      const app = new Vue({
      &nbsp; store
      })
      export { app, store }
    </code>

    <v-flex class="pt-2">Simple data i/o</v-flex>
    <code>
      this.$store.state.someParam = true;
      let foo = this.$store.state.someParam;
    </code>
  </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: "Vuex",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "glennpacker.net vue vuex"
        }
      ]
    };
  }
};
</script>