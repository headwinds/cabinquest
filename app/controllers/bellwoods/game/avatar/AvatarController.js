

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var AvatarModel = mongoose.model('AvatarModel'); 
var util = require("util");
var events = require("events");
var _ = require("lodash");


var AvatarController = function(){
    events.EventEmitter.call(this);
};

util.inherits(AvatarController, events.EventEmitter);

/**
 * a simple test to see something in the browser
 */
AvatarController.prototype.sayHi = function(req, res, next) {
    console.log("AvatarController - sayHi");

    res.send( { info: "AvatarController says hi" } );
};

/**
 * Find article by id
 */
AvatarController.prototype.find = function(req, res, next, id) {
    AvatarModel.load(id, function(err, avatarModel) {
        if (err) return next(err);
        if (!avatarModel) return next(new Error('Failed to load article ' + id));
        req.avatarModel = avatarModel;
        //next();
        return res.jsonp({model: avatarModel, action: "find"});
    });
};

/**
 * Create a article
 */
AvatarController.prototype.create = function(req, res) {

    console.log(req.body, "AvatarController create");

    var avatarObj = req.body; //{ title: "hello", content: "world"};

    //var article = new Article(req.body);
    var avatarModel = new AvatarModel();
    //article.user = req.user;
    avatarModel.user = req.session.cabinquestUser;

    avatarModel.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: article
            });
        } else {
            res.jsonp({model: avatarModel, action: "create"});
        }
    });
};

/**
 * Update a article
 */
AvatarController.prototype.update = function(req, res) {

    var avatarModel = req.avatarModel;

    avatarModel = _.extend(avatarModel, req.body);

    avatarModel.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                model: avatarModel
            });
        } else {
            res.jsonp({model: avatarModel, action: "update"});
        }
    });
};

/**
 * Delete an avatar
 */
AvatarController.prototype.destroy = function(req, res) {
    var avatarModel = req.avatarModel;

    avatarModel.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: avatarModel
            });
        } else {
             res.jsonp({model: avatarModel, action: "destroy"});
        }
    });
};

/**
 * Show an avatar
 */
AvatarController.prototype.show = function(req, res) {
    res.jsonp({model: req.avatarModel, action: "show"});
};

/**
 * List of Avatars
 */
AvatarController.prototype.all = function(req, res) {
    AvatarModel.find().sort('-created').populate('user', 'name experience level').exec(function(err, avatarModels) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(avatarModels);
        }
    });
};

module.exports = AvatarController;