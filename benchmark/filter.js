var Benchmark = require('benchmark');
var _ = require('lodash');
var suite = new Benchmark.Suite;

var arr = _.range(50);
suite.add('lodash#filter', function() {
        _.filter(arr,function(it){return it % 2;});
    })
    .add('native#filter', function() {
        arr.filter(function(it){return it % 2;});
    });


module.exports = suite;
