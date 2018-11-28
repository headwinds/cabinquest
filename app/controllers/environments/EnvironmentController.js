// see views/cabin to see the jade file that is rendered

var mongoose = require('mongoose'),
    _ = require('underscore');


exports.render = function(req, res) {
    res.render('environments/environments', {
        user: req.user ? JSON.stringify(req.user) : "null"
    });
};
