/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../../../../config/config'),
    Schema = mongoose.Schema;


/**
 * Takeout Schema
 */
var QuestSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    },
    title: String,
    description: String,
    points: Number,
    items: [{
        type: Schema.ObjectId,
        ref: 'ItemModel'
    }]
});

mongoose.model('QuestModel', QuestSchema);

