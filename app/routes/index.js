import Ember from 'ember';

let apis = [{
    name: "api1",
    hits: 111,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api2",
    hits: 103,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api3",
    hits: 102,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api4",
    hits: 132,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api5",
    hits: 98,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api6",
    hits: 100,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api7",
    hits: 140,
    success: 9,
    error: 1,
    errorRate: 10
  }, {
    name: "api8",
    hits: 150,
    success: 9,
    error: 1,
    errorRate: 10
  }];

export default Ember.Route.extend({
  model() {
    return apis;
  }
});
