<template>
  <v-container layout column>
    <h3>Vue JS - Cheat Sheet</h3>
    <p>This is a list of useful functions that are not commonly used but worth remembering.</p>

    <div class="mb-3">
      <h4 @click="modifyingBound = !modifyingBound">
        Modifying Bound Values
        <v-icon>{{ modifyingBound? 'mdi-arrow-collapse-up' : 'mdi-arrow-collapse-down' }}</v-icon>
      </h4>A list of handy input model transformation and modifiers.
    </div>

    <div v-if="modifyingBound">
      <h5>Trim</h5>
      <v-container layout row>
        <v-flex xs6>
          <p>This trims any extra white space from the model.</p>
          <code>v-model.trim="someparam"</code>
        </v-flex>
        <v-flex xs6>
          <v-text-field
            label="Try it"
            type="text"
            class="form-control"
            placeholder="try it"
            v-model.trim="trim"
          />
          <p>
            <strong>output:</strong>
            ({{ trim }})
          </p>
        </v-flex>
      </v-container>

      <h5>Number</h5>
      <v-container layout row>
        <v-flex xs6>
          <p>This attempts to convert the parameter to a number instead of the default string. Will only parse if the first char is a number.</p>
          <code>v-model.number="someparam"</code>
        </v-flex>
        <v-flex xs6>
          <v-text-field
            label="Try it"
            type="text"
            class="form-control"
            placeholder="try it"
            v-model.number="testNo"
          />

          <p>
            <strong>output</strong> (input + 1)
            <strong>:</strong>
            {{ testNo + 1 }}
          </p>
        </v-flex>
      </v-container>

      <lazy-bind></lazy-bind>
    </div>

    <div>
      <h4 @click="performance = !performance">
        Performance
        <v-icon>{{ performance? 'mdi-arrow-collapse-up' : 'mdi-arrow-collapse-down' }}</v-icon>
      </h4>
      <p>A few handy to know functions that can increas performance.</p>
    </div>
    <div v-show="performance">
      <h5>Once</h5>
      <v-container layout row>
        <v-flex xs6>
          <p>
            When binding values to a page often there is no need to update the value for instance
            when binding a title or an inputs label. A One time binding will be more performant
            as vue does not have to update its value.
          </p>
        </v-flex>
        <v-flex xs6>
          <code>&#x3C;span v-once&#x3E;{{someVar}}&#x3C;/span&#x3E;</code>
        </v-flex>
      </v-container>
      <lazy-bind></lazy-bind>
    </div>
  </v-container>
</template>

<script>
import lazyBind from "../components/LazyBind.vue";

export default {
  data() {
    return {
      trim: null,
      testNo: null,
      modifyingBound: false,
      performance: false,
      someVar: "{{someVar}}"
    };
  },
  components: {
    lazyBind
  },
  head() {
    return {
      title: "Tips and Tricks",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "glennpacker.net vue tips and tricks"
        }
      ]
    };
  }
};
</script>
