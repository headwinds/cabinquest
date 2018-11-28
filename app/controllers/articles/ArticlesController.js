

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Article = mongoose.model('ArticleModel'); 
var util = require("util");
var events = require("events");
var _ = require("lodash");


var ArticlesController = function(){
    events.EventEmitter.call(this);
};

util.inherits(ArticlesController, events.EventEmitter);

/**
 * a simple test to see something in the browser
 */
ArticlesController.prototype.sayHi = function(req, res, next) {
    console.log("ArticlesController - sayHi");

    res.send( { info: "ArticlesController says hi" } );
};

/**
 * Find article by id
 */
ArticlesController.prototype.article = function(req, res, next, id) {
    Article.load(id, function(err, article) {
        if (err) return next(err);
        if (!article) return next(new Error('Failed to load article ' + id));
        req.article = article;
        next();
    });
};

/**
 * Create a article
 */
ArticlesController.prototype.create = function(req, res) {

    console.log(req.body, "ArticlesController create");

    var articleObj = req.body; //{ title: "hello", content: "world"};

    //var article = new Article(req.body);
    var article = new Article(articleObj);
    //article.user = req.user;
    article.user = req.session.cabinquestUser;

    article.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: article
            });
        } else {
            res.jsonp(article);
        }
    });
};

/**
 * Update a article
 */
ArticlesController.prototype.update = function(req, res) {

    var article = req.article;

    article = _.extend(article, req.body);

    article.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: article
            });
        } else {
            res.jsonp(article);
        }
    });
};

/**
 * Delete an article
 */
ArticlesController.prototype.destroy = function(req, res) {
    var article = req.article;

    article.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: article
            });
        } else {
            res.jsonp(article);
        }
    });
};

/**
 * Show an article
 */
ArticlesController.prototype.show = function(req, res) {
    res.jsonp(req.article);
};

/**
 * List of Articles
 */
ArticlesController.prototype.all = function(req, res) {
    Article.find().sort('-created').populate('user', 'name username').exec(function(err, articles) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(articles);
        }
    });
};

module.exports = ArticlesController;