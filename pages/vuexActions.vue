<template>
  <v-container>
    <h3>Vuex - Actions</h3>
    <display-code :code="vuexActions1" />

    <p>Calling Actions &amp; Mutations</p>
    <display-code :code="vuexActions2" />
  </v-container>
</template>
<script>
import { vuexActions1, vuexActions2 } from '../codeSnippets'

export default {
    data() {
        return {
            vuexActions1,
            vuexActions2
        }
    },
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