var Benchmark = require('benchmark');
var _ = require('lodash');
var suite = new Benchmark.Suite;

var arr = _.range(50);
suite.add('lodash#forEach', function() {
        _.forEach(arr,function(it){return it++;});
    })
    .add('native#forEach', function() {
        arr.forEach(function(it){return it++;});
    });


module.exports = suite;