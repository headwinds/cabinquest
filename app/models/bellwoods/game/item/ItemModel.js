/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../../../../config/config'),
    Schema = mongoose.Schema;


/**
 * Takeout Schema
 */
var ItemSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    },
    title: String,
    description: String,
    gold: Number
});

mongoose.model('ItemModel', ItemSchema);

