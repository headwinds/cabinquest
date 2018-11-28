
var util = require("util");
var events = require("events");
var _ = require("underscore");

var appPath = '../../../../app';

var ArticlesController = require(appPath + '/controllers/articles/ArticlesController'); 

var ArticlesRoutesController = function(app, passport, auth)  {
    events.EventEmitter.call(this);

    console.log("ArticlesRoutesController init");

    var articlesController = new ArticlesController();

    app.get('/articles', articlesController.all);
    app.post('/articles', auth.requiresLogin, articlesController.create);

    app.get('/articles/:articleId', articlesController.show);
    app.put('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articlesController.update);
    app.delete('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articlesController.destroy);

    //Finish with setting up the articleId param
    app.param('articleId', articlesController.article);

    // simple test to see something in the browser
    app.get('/articles/test/hi', articlesController.sayHi );

    this.className = "ArticlesRoutesController";

};

util.inherits(ArticlesRoutesController, events.EventEmitter);

module.exports = ArticlesRoutesController;
