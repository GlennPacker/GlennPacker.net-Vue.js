import Vue from 'vue';
import VueRouter from 'vue-router';

import { LoadingState } from 'src/config/loading-state';
import Loader from 'components/Loader/loader';

Vue.use(VueRouter);

import 'src/config/http';
import routes from 'src/routes';
import 'src/style.scss';

export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'cd-selected'
});

new Vue({
  router,
  components: {
    Loader
  },
  data(){
    return {
      isLoading: false,
      showMenu: false
    };
  },
  
  methods: {
    toggleMenu(){
      console.log(this.showMenu);
      this.showMenu = !this.showMenu;
      console.log(this.showMenu);
    }
  },
  
  created(){
    LoadingState.$on('toggle', (isLoading) => {
      this.isLoading = isLoading;
    });
  }
}).$mount('#app');
