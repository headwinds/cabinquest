
var util = require("util");
var events = require("events");
var _ = require("underscore");

var appPath = '../../../../../app';

var AvatarController = require(appPath + '/controllers/bellwoods/game/avatar/AvatarController'); 

var AvatarRoutesController = function(app, passport, auth)  {
    events.EventEmitter.call(this);

    console.log("AvatarRoutesController init");

    var avatarController = new AvatarController();

  
    app.get('/avatar', avatarController.all);
    app.post('/avatar', auth.requiresLogin, avatarController.create);
  
    app.get('/avatar/:avatarId', avatarController.show);

    app.put('/avatar/:avatarId', auth.requiresLogin, auth.article.hasAuthorization, avatarController.update);
    
    app.delete('/avatar/:avatarId', auth.requiresLogin, auth.article.hasAuthorization, avatarController.destroy);

    //Finish with setting up the articleId param
   
    app.param('avatarId', avatarController.find);

    // simple test to see something in the browser
    app.get('/avatar/test/hi', avatarController.sayHi );
   

    this.className = "AvatarRoutesController";

};

util.inherits(AvatarRoutesController, events.EventEmitter);

module.exports = AvatarRoutesController;
