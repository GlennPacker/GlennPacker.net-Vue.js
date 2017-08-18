import Vue from 'vue';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);

import {
  contactResource
} from 'src/util/resources';
import template from './contact.html';

export default Vue.extend({
  template,
  data() {
    return {
      sent: false,
      message: null,
      contact: {}
    };
  },
  methods: {
    handleSubmit() {
      this.$validator.validateAll().then((success) => {
        if (success) {
          this.sendContact();
        }

        return this;
      });
    },

    showMessage(message = {}, timeout = 2000){
      this.message = message;
      setTimeout(() => {
        this.message = null;
      }, timeout);
    },
    
    sendContact() {
      return contactResource.post('/', this.contact)
        .then(() => {
          this.showMessage({
            type: 'success',
            text: 'Message Sent!'
          });

          this.sent = true;
        })
        .catch((errorResponse) => {
          this.showMessage({
            type: 'danger',
            text: errorResponse
          });
          console.log('API responded with:', errorResponse);
        });
    }

  }
});
