
var util = require("util");
var events = require("events");
var _ = require("lodash");

var appPath = '../../../../app';

//var TreesController = require(appPath + '/controllers/bellwoods/trees/TreesController'); 
var TreesController = require(appPath + '/controllers/bellwoods/trees/PortholeTreesController'); 

var PortholeTreesRoutesController = function(app, passport, auth)  {
    events.EventEmitter.call(this);

    console.log("PortholeTreesRoutesController init");

    //Trees 
    var treesController = new TreesController();

    app.post('/bellwoods/trees/load', treesController.load);

    app.get('/bellwoods/trees/getTreeByRSSUrl/:_id', treesController.getTreeByRSSUrl);
    app.param('_id', treesController.getTreeByRSSUrl);

    this.className = "PortholeTreesRoutesController";

};

util.inherits(PortholeTreesRoutesController, events.EventEmitter);

module.exports = PortholeTreesRoutesController;
