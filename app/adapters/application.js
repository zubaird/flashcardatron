import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.ActiveModelAdapter.extend({
  // host:"http://localhost:3000"
  host: ENV.adapterURL || "http://localhost:3000"
});
