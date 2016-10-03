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
    name: "api3",
    hits: 10,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api4",
    hits: 10,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api5",
    hits: 10,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api6",
    hits: 10,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api7",
    hits: 10,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api8",
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
