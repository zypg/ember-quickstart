import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    launchConfirmDialog() {
      this.set('confirmShown', true);
    },

    submitConfirm() {
      // trigger action on parent Component
      // this.set('confirmShown', false);

      //call the onConfirm property to invoke the passed in action
      // this.get('onConfirm')();

      // call onConfirm with the value of the input field as an argument
      // let promise = this.get('onConfirm')();
      // call onConfirm with a second argument
      let promise = this.get('onConfirm')(this.get('confirmValue'));
      promise.then(() => {
        this.set('confirmShown', false);
      });
    },

    cancelConfirm() {
      this.set('confirmShown', false);
    }
  }
});
