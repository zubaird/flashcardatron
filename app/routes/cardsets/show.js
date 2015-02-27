import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    deleteCard: function(model){
      var _this = this;
      // var cardset = this.modelFor('cardsets/show');
      var card = model.destroyRecord();

      card.save().then(function(){
        _this.transitionToRoute('cardsets.show.index');
      });
    },
    editCardset: function (model) {
      var thing = model.get("editing");
      console.log(thing);
      model.set('editing', true);
    },

    editCard: function (model) {
      var thing = model.get("editingCard");
      console.log(thing);
      console.log(model);
      model.set('editingCard', true);
    },
    saveCard: function(model){
      model.set('editingCard', false);

      var _this = this;

      model.save().then(function(){
        _this.transitionToRoute('cardsets.show.index');
      });
    },

    saveCardset: function(model){
      model.set('editing', false);

      var _this = this;

      model.save().then(function(){
        _this.transitionToRoute('cardsets.show.index');
      });
    }
  },
  editing: false,
  editingCard: false
});
