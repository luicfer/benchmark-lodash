var Benchmark = require('benchmark');
var _ = require('lodash');
var suite = new Benchmark.Suite;

var arr = _.range(50);
suite.add('lodash#indexOf', function() {
        _.indexOf(arr,10);
        _.indexOf(arr,100);
    })
    .add('native#indexOf', function() {
        arr.indexOf(10);
        arr.indexOf(100);
    });


module.exports = suite;
