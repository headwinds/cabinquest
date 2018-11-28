
var util = require("util");
var events = require("events");
var _ = require("underscore");

var appPath = '../../../../app';

var ForestController = require(appPath + '/controllers/bellwoods/forest/ForestController'); 

var ForestRoutesController = function(app, passport, auth)  {
    events.EventEmitter.call(this);

    console.log("ForestRoutesController init");

    //Trees 
    var forestController = new ForestController();

    app.post('/bellwoods/forest/getForestByUserId', auth.requiresLogin, forestController.getForestByUserId);

    app.post('/bellwoods/forest/create', auth.requiresLogin, forestController.create);
    app.post('/bellwoods/forest/update', auth.requiresLogin, forestController.update);
    app.post('/bellwoods/forest/delete', auth.requiresLogin, forestController.delete);

    app.post('/bellwoods/forest/tree/add', auth.requiresLogin, forestController.addTreeId);


    // simple test to see something in the browser
    app.get('/bellwoods/forest/hi', forestController.sayHi );


    app.get('/bellwoods/forest/getForestInfo', forestController.getForestInfo );

     //Finish with setting up the forestId param
    app.param('forestId', forestController.forest);

    this.className = "ForestRoutesController";

};

util.inherits(ForestRoutesController, events.EventEmitter);

module.exports = ForestRoutesController;
