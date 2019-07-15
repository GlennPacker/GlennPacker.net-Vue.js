<template>
  <v-container layout column>
	<h3>Components</h3>
	<p>The basic component framework</p>

    <v-container layout row>
      <v-flex xs6>
        <code>
	<div>
	import Vue from 'vue';<br/>
	import template from './template.html';<br/>
	import anotherComponent from <br/>
	&nbsp;  '../anothercomponent/anothercomponent'<br/>
	export default Vue.extend({<br/>
	&nbsp;  template,<br/>
	&nbsp;  props: ['prop1'],<br/>
	&nbsp;  data(){<br/>
	&nbsp;  &nbsp;  return {<br/>
	&nbsp;  &nbsp;  &nbsp; message: 'hi',<br/>
	&nbsp;  &nbsp;  &nbsp; basicObject: { message: 'foo'}
	&nbsp;  &nbsp;  };<br/>
	&nbsp;  },<br/>
	&nbsp;  methods:{<br/>
	&nbsp;  &nbsp;  talk(){<br/>
	&nbsp;  &nbsp;  &nbsp;  console.write(this.message);<br/>
	&nbsp;  &nbsp;  }<br/>
	&nbsp;  },<br/>
	&nbsp;  computed: {<br/>
	&nbsp; &nbsp; aComputedProperty: function(){<br/>
	&nbsp; &nbsp; &nbsp; return this.message + 'there';<br/>
	&nbsp; &nbsp; }	<br/>
	&nbsp; }, <br/>
	&nbsp; watch: { <br/>
	&nbsp; &nbsp; message: <br/>
	&nbsp; &nbsp; &nbsp; function(newVal, oldVal) {<br/>
	&nbsp; &nbsp; &nbsp; &nbsp; console.log('new value' + newVal);<br/>
	&nbsp; &nbsp; },<br/>
	&nbsp; &nbsp; 'basicObject.message': <br/>
	&nbsp; &nbsp; &nbsp; function (newVal,OldVal){<br/>
	&nbsp; &nbsp; &nbsp; &nbsp; console.log('property of an object');<br/>
	&nbsp; &nbsp; }<br/>
	&nbsp; },<br/>
	&nbsp; created: function () {<br/>
	&nbsp;  &nbsp; console.log('component created);<br/>
	&nbsp; },<br/>
	&nbsp; mounted: function () {<br/>
	&nbsp;  &nbsp; console.log('component mounted);<br/>
	&nbsp; },<br/>
	&nbsp; components: {<br/>
	&nbsp; &nbsp; anotherComponent<br/>
	&nbsp; }<br/>
	});<br/>
	</div>
        </code>
      </v-flex>
	  <v-flex xs6>
        <h4>Imports</h4>
        <p>Other files that this component needs. If it is a component that is common use throughout the application it is better off in main.js</p>
        <h4>Template</h4>
        <p>The template is the html file that will be rendered. This can be put in the component or a serperate file.</p>
        <h4>Props</h4>
        <p>The calling component can push data into the child component via the html attributes. In the child component this is accessible through props.</p>
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
          <a href="https://alligator.io/vuejs/component-lifecycle/">here</a>.
        </p>
        <h4>Mounted</h4>
        <p>This is part of the page life cyle where the DOM is added. This should not be used for fetching data.</p>
      </v-flex>
      
    </v-container>
  </v-container>
</template>
<script>
export default {
  name: "componentBasics",
};
</script>


