// see views/cabin to see the jade file that is rendered

var mongoose = require('mongoose'),
    _ = require('underscore');


exports.render = function(req, res) {

	console.log("Server CabinController - render");

    res.render('cabin/cabin', {
        user: req.user ? JSON.stringify(req.user) : "null"
    });
};

exports.tick = function(req, res) {

	console.log("Server CabinController - tick");

};
