var fs = require('fs');
var _ = require('lodash');
var suits = fs.readdirSync('./benchmark');
var stream = fs.WriteStream('./README.md');

stream.write('# benchmark-lodash\n');
stream.write('beachmark for lodash in node.js\n');

stream.write('# Environment\n');
stream.write('```\n');
stream.write('lodash version : '+ _.VERSION +'\n');
stream.write('node version : '+ process.version +'\n');
stream.write('```\n');


suits.forEach(function(it){
    stream.write('## '+it.split('.')[0] + '\n');
    stream.write('```\n');
    var now = require('./benchmark/'+it);
    now.on('cycle', function(event) {
        stream.write(String(event.target+'\n'));
    }).on('complete', function() {
        stream.write('Fastest is ' + this.filter('fastest').pluck('name') + '\n');
        stream.write('```\n');
    });
    now.run();
});
stream.end();
