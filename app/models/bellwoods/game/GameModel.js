/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../../../config/config'),
    Schema = mongoose.Schema;


/**
 * Takeout Schema
 */
var GameSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    },
    levels: [{
        type: Schema.ObjectId,
        ref: 'LevelModel'
    }],
    title: String,
    description: String,
    score: Number
});

mongoose.model('GameModel', GameSchema);

