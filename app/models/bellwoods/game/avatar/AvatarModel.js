/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    _ = require('underscore');


/**
 * Character Schema
 */
var AvatarSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    },
    name: {
        type: String,
        default: 'winnie'
    },
    professionId: {
        type: Number,
        default: 1
    },
    inventory: {
        type: Array,
        default: [{'axe':1},{'money':100},{'wood':0}]
    },
    health: {
        type: Number,
        default: 100
    },
    magic: {
        type: Number,
        default: 100
    },
    stamina: {
        type: Number,
        default: 100
    },
    experience: {
        type: Number,
        default: 100
    },
    level: {
        type: Number,
        default: 1
    },
    storyPoint: {
        type: String,
        default: 'beginning'
    },
    storyId: {
        type: String,
        default: Number
    },
});



mongoose.model('AvatarModel', AvatarSchema);