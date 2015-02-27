import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    createCardset:function(model){
      console.log(model.get("title"));

      var newCardSet = model.set("cardset",{
        title: model.get("title")
      });
      newCardSet.save();
    }
  }
});
