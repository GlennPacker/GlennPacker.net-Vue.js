import Vue from 'vue';
import template from './navigation.html';

export default Vue.extend({
  template,
  
  data(){
    return {
      showMenu: false
    };
  },
  
  methods: {
    toggleMenu(){
      console.log(this.showMenu);
      this.showMenu = !this.showMenu;
      console.log(this.showMenu);
    }
  }
});
