import Vue from 'vue';
import template from './dev.html';
import install from '../Install/install';
import axios from '../Axios/axios';

export default Vue.extend({
  template,
  install,
  axios,
  
  data() {
    return {
      page: 'install'
    };
  }
});

