var Benchmark = require('benchmark');
var _ = require('lodash');
var suite = new Benchmark.Suite;

var arr = _.range(50);
suite.add('lodash#map', function() {
        _.map(arr,function(it){return it++;});
    })
    .add('native#map', function() {
        arr.map(function(it){return it++;});
    });


module.exports = suite;