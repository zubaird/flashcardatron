import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteCardset: function(model){
      var _this = this;
      // var cardset = this.modelFor('cardsets/show');
      var cardset = model.destroyRecord();

      cardset.save().then(function(){
        _this.transitionToRoute('cardsets.index');
      });
    }
  }
});
