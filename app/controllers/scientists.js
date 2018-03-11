import Ember from 'ember';

export default Ember.Controller.extend({
  login: Ember.inject.service(),

  actions: {
    userDeleted(idStr) {
      // respond to deltion
      return this.get('login').deleteUserAccount(idStr);
    }
  }
});
