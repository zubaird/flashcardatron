import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    createCard:function(model){


      model.save().then(function(){

      });

    }
  }
});
