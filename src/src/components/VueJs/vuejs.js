import Vue from 'vue';
import template from './vuejs.html';
import install from '../Install/install';
import axios from '../Axios/axios';
import routing from '../Routing/routing';
import component from '../Component/component';

export default Vue.extend({
  template,
  install,
  axios,
  routing,
  component,

  data() {
    return {
      page: 'install'
    };
  }
});
