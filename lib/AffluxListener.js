
var debug = require('debug')('MB:transport:axon');
var axon = require('axon');
var Emitter = require('events').EventEmitter;

var AffluxListener = module.exports = function(options) {
    var self = this;
    
    this.pull_sock = axon.socket('sub-emitter');
        
    this.events = this.pull_sock.bind(options.port, options.host);

    this.pull_sock.on('*', function(event, data) {
    	self.emit('message', {event : event, data : data});
    });
};


AffluxListener.prototype.__proto__ = Emitter.prototype;


