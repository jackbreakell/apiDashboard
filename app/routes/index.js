import Ember from 'ember';

let apis = [{
    name: "api1",
    hits: 10,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api2",
    hits: 10,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api2",
    hits: 10,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api2",
    hits: 10,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api2",
    hits: 10,
    success: 9,
    error: 1,
    errorRate: 10
  }];

export default Ember.Route.extend({
  model() {
    return apis;
  }
});
