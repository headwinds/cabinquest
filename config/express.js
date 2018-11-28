'use strict';

/**
 * Module dependencies.
 */

var express = require('express'),
    flash = require('connect-flash'),
    helpers = require('view-helpers'),
    config = require('./config'),
    cors = require('cors'),
    logger = require('express-logger'),
    path = require('path');

var compression = require('compression');
var favicon = require('serve-favicon');    

module.exports = function(app, passport, env) {

    app.set('showStackError', true);

    //Prettify HTML
    app.locals.pretty = true;

    app.use(compression());

    //var directory = (env === "development") ?  'private' : 'public';
    //app.use(express.static(path.join(__dirname, '..', directory)));

    //Enable jsonp
    app.enable("jsonp callback");


    //////////////////////////////////////////////////////////////// CORSS 
    app.use( cors() );

    app.engine('html', require('hogan-express'));
    app.enable('view cache');

    app.set('views', config.root + '/app/views');
    app.set('view engine', 'html');

    var footerPath = ( process.env.NODE_ENV === "development" ) ? "footer" : "footerMin";

    app.set('layout', 'layouts/default');
    app.set('partials', {header: "includes/header", 
                        footer: "includes/" + footerPath,    
                        bellwoodsPartial : "bellwoods/bellwoodsPartial"});


    //connect flash for flash messages
    app.use(flash());

    //dynamic helpers
    app.use(helpers(config.app.name));

    //use passport session
    app.use(passport.initialize());
    app.use(passport.session());

    if ( process.env.NODE_ENV === "development" ) app.use(express.static(config.root + '/private')) 
    else app.use(express.static(config.root + '/public'));      

    //Assume "not found" in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
    app.use(function(err, req, res, next) {
        //Treat as 404
        if (~err.message.indexOf('not found')) return next();

        //Log it
        console.error(err.stack);

        //Error page
        res.status(500).render('500', {
            error: err.stack
        });
    });

    //Assume 404 since no middleware responded
    app.use(function(req, res, next) {
        res.status(404).render('404', {
            url: req.originalUrl,
            error: 'Not found'
        });
    });
   
};