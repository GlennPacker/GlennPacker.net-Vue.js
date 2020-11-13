<template>
  <v-container layout column>
    <h3>Event Bus</h3>
    <h4>Bus Setup</h4>
    <p>The bus itself is a simple Vue instance with no html.</p>
    <div style="padding-bottom: 1em;">
        <display-code :code='eventBus1' />
    </div>

    <h4>Sending an event</h4>
    <p>This is as simple as importing the bus and emiting an event.</p>
    <display-code :code="eventBus2" />

    <h4>Recieving the event</h4>
    <p>On the vue component that needs to recieve the event setup a simple handler.</p>
    <display-code :code="eventBus3" />
  </v-container>
</template>
<script>
import { eventBus1, eventBus2, eventBus3 } from '../codeSnippets';

export default {
    name: "eventBus",
    data() {
        return {
            eventBus1,
            eventBus2,
            eventBus3
        }
    },
};
</script>
