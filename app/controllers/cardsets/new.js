import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    createCardset:function(model){
      console.log(model.get("title"));

      var _this = this;

      var newCardSet = model.set("cardset",{
        title: model.get("title")
      });
      newCardSet.save().then(function(){
        _this.transitionToRoute('cardsets.index');
      });
    }
  }
});
