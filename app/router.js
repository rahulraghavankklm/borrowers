import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BorrowersENV.locationType
});

Router.map(function() {
  this.resource('friends', function(){ });
});

export default Router;
