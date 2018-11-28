'use strict';

/**
 * Generic require login routing middleware
 */
exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

/**
 * User authorizations routing middleware
 */
exports.user = {
    hasAuthorization: function(req, res, next) {
        if (req.profile.id != req.user.id) {
            return res.send(401, 'User is not authorized');
        }
        next();
    }
};

/**
 * Article authorizations routing middleware
 */
exports.article = {
    hasAuthorization: function(req, res, next) {

        // req.user is fine but...
        // req.article.user is null 
        var myId = "52d43edb436659810b000002";
        var myEmail = "brandonflowers@gmail.com";


        //if ( null === req.article.user ) req.article.user = req.session.cabinQuestUsers.me; //req.session.cabinquestUser; 

        console.log("----- hasAuthorization UPDATE ---------")

        console.log(req.article, "ArticlesController - update");

        //if (myId != req.user.id) {
         //   return res.send(401, 'User is not authorized');
        //}

         if (myEmail != req.user.email) {
            return res.send(401, 'User is not authorized');
        }

        next();
    }
};