
/*

Hive has contact with all the models

*/

/**
 * Module dependencies.
 */
/*
var mongoose = require('mongoose'),
    AuthenticationModel = mongoose.model('AuthenticationModel'),
    _ = require('underscore');
*/

/**
 * Find user by id
 */
exports.summon = function(req, res, next, id) {
    /*
    AuthenticationModel
        .findOne({
            _id: id
        })
        .exec(function(err, user) {
            if (err) return next(err);
            if (!user) return next(new Error('Failed to load User ' + id));
            req.profile = user;
            next();
        });
    */
};

var queenMessages = [ { title: "default queen message", level: 1 }  ];
var droneMessages = [ { title: "default drone message", level: 1 } ];

exports.log = function( messageStr, forStr, lvlNum ) {

    switch( forStr ) {
        case "queen" :
            queenMessages.push( { title: "messageStr", level: lvlNum } );
            break;
        case "drone" :
            droneMessages.push( { title: "messageStr", level: lvlNum } );
            break;
        default :
            queenMessages.push( { title: "messageStr", level: lvlNum } );
            break;    
    }

}

exports.getLogs = function() {



    var logs = { queen: queenMessages, drone: droneMessages};

    console.log(logs, "HiveService - getLogs");

    return logs;
}