import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    var cardset = this.modelFor('cardsets/show');
    return this.store.createRecord('card', {cardset: cardset});
  }
});
