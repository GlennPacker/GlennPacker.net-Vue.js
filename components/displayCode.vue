<template>
  <div id="app">
    <prism-editor
      class="my-editor"
      v-model="code"
      :highlight="highlighter"
    >
    </prism-editor>
  </div>
</template>
<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles

export default {
  name: 'display-code',
  props: {
    code: String
  },
  components: {
    PrismEditor
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    }
  }
};
</script>
<style lang="css">

.my-editor {
    background: #555;
    color: #eee;
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 1em;
    line-height: 1.5;
    padding: 5px;
    border: 1px solid black;
    border-radius: 1em;
}

.prism-editor__textarea:focus {
    outline: none;
}

</style>
