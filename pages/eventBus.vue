<template>
  <v-container layout column>
    <h3>Event Bus</h3>
    <h4>Bus Setup</h4>
    <p>The bus itself is a simple Vue instance with no html.</p>
    <code>
      import Vue from 'vue';
      export const EventBus = new Vue();
    </code>
    <br />
    <h4>Sending an event</h4>
    <p>This is as simple as importing the bus and emiting an event.</p>
    <code>
      import { EventBus } from './event-bus.js';
      <br />
      export default {
      &nbsp; data() {
      &nbsp; &nbsp; return {
      &nbsp; &nbsp; &nbsp; someData: 'payload'
      &nbsp; &nbsp; }
      &nbsp; }
      &nbsp; methods: {
      &nbsp; &nbsp; sendEvent() {
      &nbsp; &nbsp; &nbsp; EventBus.$emit('i-got-clicked', this.someData); // i-got-clicked = event name
      &nbsp; &nbsp; }
      &nbsp; }
      }
    </code>
    <br />
    <br />
    <h4>Recieving the event</h4>
    <p>On the vue component that needs to recieve the event setup a simple handler.</p>
    <code>
      import { EventBus } from './event-bus.js';
      export default {
      &nbsp; created(){
      &nbsp; &nbsp; // Listen for the i-got-clicked event and its data.
      &nbsp; &nbsp; EventBus.$on('i-got-clicked', data => {
      &nbsp; &nbsp; &nbsp; console.log(data);
      &nbsp; &nbsp; });
      &nbsp; }
      }
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
};
</script>
