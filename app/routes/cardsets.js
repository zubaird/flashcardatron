import Ember from 'ember';

export default Ember.Route.extend({
  model:function(){
    return this.store.find("cardset");
  },
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
