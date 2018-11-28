

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var TakeoutModel = mongoose.model('TakeoutModel'); 
var util = require("util");
var events = require("events");
var _ = require("lodash");

var BellwoodsController = function() {
    events.EventEmitter.call(this);
}

util.inherits(BellwoodsController, events.EventEmitter);




module.exports = BellwoodsController; 
