<template>
    <v-container>
        <h3>Vuex - Getters</h3>
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
                &nbsp; }<br/>
            })<br/>
        </code>
        <p>
            Mapping Getters on the component
        </p>
        <code>
            import { mapGetters } from 'vuex'<br/>
            export default {<br/>
                &nbsp; computed:{<br/>
                    &nbsp; &nbsp; ...mapGetters(['someParam'])<br/>
                &nbsp;  }<br/>
            }<br/>
        </code>
    </v-container>
</template>
<script>
    export default {}
</script>