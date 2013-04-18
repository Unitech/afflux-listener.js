var AffluxListener = require('.');

var a = new AffluxListener({port : 6380, host : '127.0.0.1'});

a.on('message', function(data) {
    console.log('New message = ', data);
});
