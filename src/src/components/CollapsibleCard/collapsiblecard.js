import Vue from 'vue';
import template from './collapsiblecard.html';

Vue.component('collapsiblecard', {
  template,
  
  data() {
    return {
      more: false,
      showmore: false,
      cssmore: 'none'
    };
  },
  methods: {
    togglemore(){
      if (this.more){
        this.showmore = !this.showmore;
        this.cssmore = 'none';
        if (this.showmore){
          this.cssmore = 'block';
        }
      }
    }
  },
  
  mounted() {
//    this.more = this.$slots.more;
  }
});
