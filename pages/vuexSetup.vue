<template>
    <v-container layout column>
        <h3>State Management (Vuex)</h3>
        <p>Install vuex via npm.</p>
        <code>
            npm install vuex --save
        </code>
        <br/><br/>
        <p>
            Create a Vuex component.
        </p>
        <code>
            import Vue from 'vue'<br/>
            import Vuex from 'vuex'<br/>
            <br/>
            Vue.use(Vuex)<br/>
            <br/>
            const state = {<br/>
            &nbsp; someParam : false<br/> 
            }<br/>
            <br/>
            // create the store and add the json state object<br/>
            const store = new Vuex.Store({<br/>
            &nbsp; state<br/>
            })<br/>
            <br/>
            export default store
        </code>
        <br/>
        <br/>
        <p>Register the store with the root main app.js</p>
        <code>
            import Vue from 'vue'<br/>
            import store from './vuex/index.js'<br/>
            <br/>
            const app = new Vue({<br/>
                &nbsp; store
            })<br/>
            <br/>
            export { app, store }
        </code>
        <br/>
        <br/>
        <p>
            Simple data i/o
        </p>
        <code>
            this.$store.state.someParam = true;<br/>
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