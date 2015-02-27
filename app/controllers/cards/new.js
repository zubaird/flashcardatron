import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    createCard:function(model){

      var _this = this;
      model.save().then(function(){
        _this.transitionToRoute('cardsets.show');
      });

    }
  }
});
