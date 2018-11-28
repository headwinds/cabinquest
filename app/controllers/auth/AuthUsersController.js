/**
 * Module dependencies.
 */
const mongoose = require('mongoose');

const AuthUserModel = mongoose.model('AuthUserModel');
const CabinQuestUserModel = mongoose.model('CabinQuestUserModel');
const util = require('util');
const events = require('events');
const btoa = require('btoa');
const _ = require('lodash');

const AuthUsersController = function() {
    events.EventEmitter.call(this);
};

util.inherits(AuthUsersController, events.EventEmitter);

/**
 * Auth callback
 */
AuthUsersController.prototype.authCallback = function(req, res) {
    console.log(req.user, 'AuthUsersController - authCallback - close beta');

    let email = 'unknown@gmail.com';

    if (req.user.username === 'headwinds' && req.user.provider === 'twitter') {
        email = 'brandonflowers@gmail.com'; // twitter doesn't provide email!!!!
    } else if (req.user.email) {
        // facebook should work here too... ?!
        /*
        { __v: 0,
          name: 'Brandon Flowers',
          email: 'brandonflowers@gmail.com',
          username: undefined,
          provider: 'facebook',
          facebook:
           { verified: true,
             updated_time:
        */
        email = req.user.email;
    }

    // console.log("AuthUsersController authCallback - email: " + email);
    req.session.authUser = req.user;

    console.log(
        'AuthUsersController - authCallback - authuser: ',
        req.session.authUser
    );

    // var betaTesters = ["brandonflowers@gmail.com","hakasetenma@gmail.com"];
    // var foundBetaTester = _.contains(betaTesters, email);
    const foundBetaTester = true;

    if (foundBetaTester === false) {
        return res.redirect('/beta');
    } else {
        // return res.send( { model: req.user, action: "authCallback"});

        // res.redirect('/#!/profile/?gate=' + btoa(email) );
        // res.redirect('/#!/profile/');
        // res.redirect('/athlete/teddy-riner');
        res.redirect('/');

        /*
        // ok this user is authorized now I also want to store their cabinquest user model in session
        CabinQuestUserModel.findOne({email: req.user.email}, function (err, cabinQuestUserModel) {

        if (err) {
            console.log("AuthUsersController get cabinQuestUser after authorized - error! code: " + err);
                return res.send('bellwoods/error', {
                   errors: err.errors,
                   model: cabinQuestUserModel,
                   message: "AuthUsersController - problem getting cabinQuestUser after authorization"
                });
        } else {
            req.session.cabinQuestUser = cabinQuestUserModel;

            console.log(cabinQuestUserModel, "AuthUsersController authCallback - success! model");
            console.log(req.session.cabinQuestUser, "AuthUsersController authCallback - success! session");

            //return res.send( { model: cabinQuestUserModel, action: "authCallback"});

            return res.redirect('/#!/profile?email=' + );
            //return res.redirect('/#!/');
            //return res.redirect('/#!/porthole');
        }


        });
        */
    }
};

/**
 * Auth callback for Porthole
 */
/*
AuthUsersController.prototype.authPortholeCallback = function(req, res) {

    console.log(req.user, "AuthUsersController - authPortholeCallback - open beta");

    var email = "unknown@gmail.com";

    if ( req.user.username === 'headwinds' && req.user.provider === 'twitter' )  {

        email = "brandonflowers@gmail.com"; // twitter doesn't provide email!!!!

    } else if ( req.user.email ) {
        // facebook should work here too... ?!

        email = req.user.email;
    }

    console.log("AuthUsersController authCallback - email: " + email);

    // ok this user is authorized now I also want to store their cabinquest user model in session
    CabinQuestUserModel.findOne({email: req.user.email}, function (err, cabinQuestUserModel) {

    if (err) {
        console.log("AuthUsersController get cabinQuestUser after authorized - error! code: " + err);
            return res.send('bellwoods/error', {
               errors: err.errors,
               model: cabinQuestUserModel,
               message: "AuthUsersController - problem getting cabinQuestUser after authorization"
            });
    } else {
        req.session.cabinQuestUser = cabinQuestUserModel;

        console.log(cabinQuestUserModel, "AuthUsersController authCallback - success! model");
        console.log(req.session.cabinQuestUser, "AuthUsersController authCallback - success! session");

        return res.redirect('/#!/porthole');
    }

});

};

*/

/**
 * Auth count
 */
AuthUsersController.prototype.getAuthUsersTotal = function(req, res) {
    console.log('AuthUsersController - getAuthUsersTotal ');

    let authCount; // = AuthUserModel.db.collections.authusermodels;
    //

    // ok cool - I can make queries base on my db connection
    AuthUserModel.count().exec((err, data) => {
        if (err) return next(err);
        if (!AuthUserModel)
            return next(new Error(`Failed to load AuthUserModel ${id}`));
        // req.profile = AuthUserModel;
        // next();
        authCount = data;
        console.log(
            authCount,
            `AuthUsersController - authCallback - authCount: ${typeof authCount}`
        );
    });

    return res.jsonp({ total: authCount });
};

/**
 * Show login form
 */

AuthUsersController.prototype.signin = function(req, res) {
    // /var self = scope;

    // console.log("AuthUsersController - signin");
    console.log(
        'AuthUsersController - signin - user is authenticating against a social platform '
    );

    /*
    var data = { state : "user signing in" };

    var authUsersController = req.session.authUsers;
    authUsersController.emit("AuthUsersController_signedIn", data);

    res.render('/signin', {
        title: 'Cabinquest - sign in',
        message: req.flash('error')
    });
    */
};

/**
 * Show sign up form
 */
AuthUsersController.prototype.signup = function(req, res) {
    res.render('/signup', {
        title: 'Sign up',
        user: new AuthUserModel()
    });
};

/**
 * Logout
 */
AuthUsersController.prototype.offline = function(req, res) {
    // req.logout();
    console.log('AuthUsersController - offline');
    // res.redirect('/offline');
    /*
     res.render('/signup', {
        title: 'Sign up',
        user: new AuthUserModel()
    });
    */
};

/**
 * Logout
 */
AuthUsersController.prototype.signout = function(req, res) {
    console.log('AuthUsersController - signout');

    req.logout();
    req.session.destroy();
    res.redirect('/');
};

/**
 * Session
 */
AuthUsersController.prototype.session = function(req, res) {
    res.redirect('/');
};

/**
 * Create AuthUserModel
 */
AuthUsersController.prototype.create = function(req, res, next) {
    console.log('AuthUsersController - create');

    const user = new AuthUserModel(req.body);
    let message = null;

    user.provider = 'local'; // this should be a tip off that I'm not using create! I'm also social provicers not local
    user.save(err => {
        if (err) {
            switch (err.code) {
                case 11000:
                case 11001:
                    message = 'Username already exists';
                    break;
                default:
                    message = 'Please fill all the required fields';
            }

            return res.render('/signup', {
                message,
                user
            });
        }
        req.logIn(user, err => {
            if (err) return next(err);
            return res.redirect('/');
        });
    });
};

/**
 * Create AuthUserModel
 */
AuthUsersController.prototype.addSocialLogin = function(req, res, next) {
    //console.log('AuthUsersController - addSocialLogin - req.body: ', req.body);
    // check to see if it exists already....
    const socialUser = req.body.user;

    const name = socialUser._profile.name;
    const email = socialUser._profile.email;
    const provider = socialUser._profile._provider;

    console.log('AuthUsersController - addSocialLogin - email: ', email);

    AuthUserModel.findOne({
        email,
        provider
    }).exec((err, authUserModel) => {
        if (err) return next(err);
        if (!authUserModel) {
            //return next(new Error(`Failed to load AuthUserModel ${id}`));

            const user = new AuthUserModel();

            user.name = name;
            user.email = email;
            user.provider = provider; // this should be a tip off that I'm not using create! I'm also social provicers not local
            user.username = email;
            user.hashed_password = email;

            console.log('AuthUsersController - addSocialLogin - user: ', user);

            user.save(err => {
                if (err) {
                    let message = '';
                    console.log(
                        'AuthUsersController - addSocialLogin - err: ',
                        err
                    );
                    switch (err.code) {
                        case 11000:
                        case 11001:
                            message = 'Username already exists';
                            break;
                        default:
                            message = 'Please fill all the required fields';
                    }

                    return res.send({
                        model: null,
                        message
                    });
                } else {
                    return res.send({
                        model: user,
                        message: 'auth user not found so it now created'
                    });
                }
            });
        } else {
            //req.profile = AuthUserModel;
            return res.send({
                model: authUserModel,
                message: 'auth user found'
            });
        }
    });
};

/**
 * Send AuthUserModel
 */
AuthUsersController.prototype.me = function(req, res) {
    // res.jsonp(req.AuthUserModel || null);
    console.log('AuthUsersController me');

    if (undefined === req.user)
        console.log(
            'AuthUsersController - route: me - sending ??? - should be undefined until I choose a provide to sign in'
        );

    if (undefined !== req.session.authUser) {
        console.log(
            'AuthUsersController - route: me - sending req.user ',
            req.session.authUser
        );

        res.jsonp({ model: req.session.authUser, message: 'found auth user' });
    } else {
        console.log(
            'AuthUsersController - route me ERROR! req.user is undefined'
        );

        // res.send();
        res.jsonp({ model: null, message: 'auth user not found' });
    }
};

/**
 * Find AuthUserModel by id
 */
AuthUsersController.prototype.user = function(req, res, next, id) {
    console.log('AuthUsersController - route: user - AuthUserModel');

    AuthUserModel.findOne({
        _id: id
    }).exec((err, AuthUserModel) => {
        if (err) return next(err);
        if (!AuthUserModel)
            return next(new Error(`Failed to load AuthUserModel ${id}`));
        req.profile = AuthUserModel;
        next();
    });
};

/**
 * Find AuthUserModel by email and provider AFTER cabinQuestUser is in session
 */
AuthUsersController.prototype.getUserByProvider = function(req, res, next) {
    console.log(
        'AuthUsersController - route: getUserByProvider - AuthUserModel '
    );

    if (req.session.cabinQuestUser) {
        const emailStr = req.session.cabinQuestUser.email;
        const providerStr =
            undefined === req.body.params.providerStr
                ? req.session.cabinQuestUser.photoProvider
                : req.body.params.providerStr;
        // var providerStr = req.session.cabinQuestUser.photoProvider;

        AuthUserModel.findOne({
            email: emailStr,
            provider: providerStr
        }).exec((err, AuthUserModel) => {
            if (err) return next(err);
            if (!AuthUserModel)
                return next(new Error(`Failed to load AuthUserModel ${id}`));

            // found user by email and provider
            // req.profile = AuthUserModel;
            // next();

            console.log(
                'AuthUsersController - getUserByProvider - got it! sending it to the client'
            );

            res.jsonp({
                model: AuthUserModel,
                message: 'found auth user by provider'
            });
        });
    } else {
        console.log(
            'AuthUsersController - route: getUserByProvider - error with the session '
        );
    }
};

module.exports = AuthUsersController;
