var util = require("util");
var events = require("events");

function StreamService() {
    events.EventEmitter.call(this);
}

util.inherits(MyStream, events.EventEmitter);

StreamService.prototype.write = function(data) {
    this.emit("data", data);
}

/*
var stream = new StreamService();

console.log(stream instanceof events.EventEmitter); // true
console.log(MyStream.super_ === events.EventEmitter); // true

stream.on("data", function(data) {
    console.log('Received data: "' + data + '"');
})
stream.write("It works!"); // Received data: "It works!"
*/

module.exports = StreamService;