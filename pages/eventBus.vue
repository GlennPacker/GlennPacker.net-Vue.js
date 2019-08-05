<template>
    <v-container layout column>
            <h3>Event Bus</h3>
            <h4>Bus Setup</h4>
            <p>The bus itself is a simple Vue instance with no html.</p>
            <code>
                import Vue from 'vue';<br/>
                export const EventBus = new Vue();
            </code>
            <br/>
            <br/>
            <h4>Sending an event</h4>
            <p>This is as simple as importing the bus and emiting an event.</p>
            <code>
                import { EventBus } from './event-bus.js';<br/>
                <br/>
                export default {<br/>     
                    &nbsp; data() {
                    &nbsp; &nbsp; return  {
                    &nbsp; &nbsp; &nbsp; someData: 'payload'
                    &nbsp; &nbsp; }
                    &nbsp; }            
                    &nbsp; methods: { <br/>
                    &nbsp; &nbsp;     sendEvent() { <br/>
                    &nbsp; &nbsp;  &nbsp; EventBus.$emit('i-got-clicked', this.someData); // i-got-clicked = event name <br/>
                    &nbsp;  &nbsp; }<br/>
                    &nbsp; }<br/>
                }<br/>
            </code>
            <br/>
            <br/>
            <h4>Recieving the event</h4>
            <p>On the vue component that needs to recieve the event setup a simple handler.</p>
            <code>
                import { EventBus } from './event-bus.js';<br/>
                <br/>
                export default {<br/>   
                &nbsp; created(){<br/>
                    &nbsp; &nbsp; // Listen for the i-got-clicked event and its data.<br/>
                    &nbsp; &nbsp; EventBus.$on('i-got-clicked', data => {<br/>
                    &nbsp; &nbsp; &nbsp; console.log(data);<br/>
                    &nbsp; &nbsp; });<br/>
                &nbsp;  }<br/>
                }<br/>
            </code>
    </v-container>
</template>
<script>
export default {
  head() {
    return {
      title: "Event Bus - Vue",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "glennpacker.net vue event bus"
        }
      ]
    };
  }
}
</script>
