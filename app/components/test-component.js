import Ember from 'ember';
import _ from 'npm:underscore';

export default Ember.Component.extend({
  onInsert: Ember.on('didInsertElement', () => {
    let blah = _.identity(0);
    blah();
  })
});
