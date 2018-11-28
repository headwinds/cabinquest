
var util = require("util");
var events = require("events");
var _ = require("underscore");

var appPath = '../../../../app';

var FeedController = require(appPath + '/controllers/bellwoods/feed/FeedController'); 

var FeedRoutesController = function(app, passport, auth)  {
    events.EventEmitter.call(this);

    console.log("FeedRoutesController init");

    //Trees 
    var feedController = new FeedController();

    //app.get('/bellwoods/feed/:id', auth.requiresLogin, feedController.getFeedByUserId);

    app.post('/bellwoods/feed/get', auth.requiresLogin, feedController.getFeed);

    app.post('/bellwoods/feed/create', auth.requiresLogin, feedController.create);
    app.post('/bellwoods/feed/add', auth.requiresLogin, feedController.add);
    app.post('/bellwoods/feed/remove', auth.requiresLogin, feedController.remove);
    app.post('/bellwoods/feed/update', auth.requiresLogin, feedController.update);

    this.className = "FeedRoutesController";

};

util.inherits(FeedRoutesController, events.EventEmitter);

module.exports = FeedRoutesController;
