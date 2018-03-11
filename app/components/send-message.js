import Ember from 'ember';

export default Ember.Component.extend({
  messaging: Ember.inject.service(),

  actions: {
    sendMessage(messageType, messageText) {
      // send message here and return a promise

    }
  }
});
