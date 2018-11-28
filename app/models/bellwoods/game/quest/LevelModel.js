/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../../../../config/config'),
    Schema = mongoose.Schema;


/**
 * Takeout Schema
 */
var LevelSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    }
});

mongoose.model('LevelModel', LevelSchema);

