
// https://developer.paypal.com/webapps/developer/docs/api/

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var TakeoutModel = mongoose.model('TakeoutModel'); 
var util = require("util");
var events = require("events");
var _ = require("lodash");

var PaypalController = function() {
    events.EventEmitter.call(this);
}

util.inherits(PaypalController, events.EventEmitter);


module.exports = PaypalController; 