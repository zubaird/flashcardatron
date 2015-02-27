import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('cardsets', function() {
    this.route('new');
    this.route('index');
    this.route('show',{path: "/:cardset_id"}, function(){
      this.resource('cards', function() {
        this.route('new');
      });
    });
    this.route('study', {path: "/:cardset_id/study"}, function(){
      this.resource('cards', function() {
        this.route('show', {path:"/:card_id"});
      });
    });
  });
});

export default Router;
