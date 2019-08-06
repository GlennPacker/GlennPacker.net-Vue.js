<template>
  <v-container layout column>
    <h3>Components</h3>
    <p>The basic component framework</p>

    <v-container layout row>
      <v-flex xs6>
        <code>
          <div>
            import Vue from 'vue';
            import template from './template.html';
            import anotherComponent from
            &nbsp; '../anothercomponent/anothercomponent'
            <br />
            export default {
            &nbsp; mixins: [aMixin],
            &nbsp; components: {
            &nbsp; &nbsp; anotherComponent
            &nbsp; }
            &nbsp; template,
            &nbsp; props: {
            &nbsp; &nbsp; A: String/Number/Object,
            &nbsp; &nbsp; B: [String, Number],
            &nbsp; &nbsp; C: {
            &nbsp; &nbsp; &nbsp; type: String,
            &nbsp; &nbsp; &nbsp; default: 'foo'
            &nbsp; &nbsp; },
            &nbsp; },
            &nbsp; data(){
            &nbsp; &nbsp; return {
            &nbsp; &nbsp; &nbsp; message: 'hi',
            &nbsp; &nbsp; &nbsp; basicObject: { message: 'foo'}
            &nbsp; &nbsp; }
            &nbsp; },
            &nbsp; methods:{
            &nbsp; &nbsp; talk(){
            &nbsp; &nbsp; &nbsp; console.write(this.message);
            &nbsp; &nbsp; }
            &nbsp; },
            &nbsp; computed: {
            &nbsp; &nbsp; aComputedProperty: function(){
            &nbsp; &nbsp; &nbsp; return this.message + 'there';
            &nbsp; &nbsp; }
            &nbsp; },
            &nbsp; watch: {
            &nbsp; &nbsp; message:
            &nbsp; &nbsp; &nbsp; function(newVal, oldVal) {
            &nbsp; &nbsp; &nbsp; &nbsp; console.log('new value' + newVal);
            &nbsp; &nbsp; },
            &nbsp; &nbsp; 'basicObject.message':
            &nbsp; &nbsp; &nbsp; function (newVal,OldVal){
            &nbsp; &nbsp; &nbsp; &nbsp; console.log('property of an object');
            &nbsp; &nbsp; }
            &nbsp; },
            &nbsp; created: function () {
            &nbsp; &nbsp; console.log('component created);
            &nbsp; },
            &nbsp; mounted: function () {
            &nbsp; &nbsp; console.log('component mounted);
            &nbsp; },
            };
          </div>
        </code>
      </v-flex>
      <v-flex xs6>
        <h4>Imports</h4>
        <p>Other files that this component needs. If it is a component that is common use throughout the application it is better to put it in main.js. If using Nuxt the reference is made automatically by put it in the component folder.</p>
        <h4>Template</h4>
        <p>The template is the html file that will be rendered. This can be put in the component or a serperate file.</p>
        <h4>Props</h4>
        <p>
          The calling component can push data into the child component via the html attributes.
          In the child component this is accessible through props in array or object syntax. Object syntax is the Vue Style guides suggestion.
        </p>
        <h4>Methods</h4>
        <p>This is the place that the component has its custom methods. This could be for loading data, user interaction.</p>
        <h4>Computed</h4>
        <p>Intended for simple operations and reducing concatenations and other manipluation within the page. A useful one for custom validation methods when using vee-validate.</p>
        <h4>Watch</h4>
        <p>If you need interation when a value or object changes this is the place for it.</p>
        <h4>Created</h4>
        <p>
          This is part of the page life cycle it runs on the component before the DOM has loaded. This is the best place to load initial data.
          <br />While Created and Mounted are the most commonly used lifecycle hooks there is also a beforeCreate, beforeMount, beforeUpdate, updated, beforeDestroy and destroyed. More information on these is available
          <a
            href="https://alligator.io/vuejs/component-lifecycle/"
          >here</a>.
        </p>
        <h4>Mounted</h4>
        <p>This is part of the page life cyle where the DOM is added. This should not be used for fetching data.</p>
      </v-flex>
    </v-container>
  </v-container>
</template>
<script>
export default {
  name: "componentBasics"
};
</script>