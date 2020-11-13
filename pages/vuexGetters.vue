<template>
  <v-container>
    <h3>Vuex - Getters</h3>
    <display-code :code="vuexGetters1" />

    <p>Mapping Getters on the component</p>
    <display-code :code="vuexGetters2" />

  </v-container>
</template>
<script>
import { vuexGetters1, vuexGetters2 } from '../codeSnippets'

export default {
    data() {
        return {
            vuexGetters1,
            vuexGetters2
        }
    },
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