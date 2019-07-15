<template>
  <v-flex xs3 ml-2 mr-2>
    <v-toolbar :color="color" dark @click="show =! show">
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <slot name="header"></slot>
    </v-toolbar>
    <v-card class="pa-3 mb-3" :min-height="minHeight">
      <slot name="main"></slot>
      <div v-show="show">
        <slot name="additional"></slot>
      </div>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    minHeight: {
      type: String,
      default: "100"
    }
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    cardMinHeight: function() {
      return this.minHeight + "px";
    }
  }
};
</script>
