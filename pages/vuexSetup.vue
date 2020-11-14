<template>
  <v-container layout column>
    <h3>State Management (Vuex)</h3>
    <v-flex>Install vuex via npm.</v-flex>
    <display-code :code="vuex1" oneLiner="true" />

    <v-flex class="pt-2">Create a Vuex component.</v-flex>
    <display-code :code="vuex2" />

    <v-flex class="pt-2">
        Register the store with the root main app.js
    </v-flex>
    <display-code :code="vuex3"  />

  </v-container>
</template>
<script>
import { vuex1, vuex2, vuex3 } from '../codeSnippets'
export default {
    data() {
        return {
            vuex1,
            vuex2,
            vuex3
        }
    },
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