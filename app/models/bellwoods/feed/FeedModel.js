/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../../../config/config'),
    Schema = mongoose.Schema;


/**
 * Takeout Schema
 */
var FeedSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    },
    title: {
        type: String, // type private or public  
        default: 'Porthole',
        trim: true
    },
    allTrees: [{
        type: Schema.ObjectId,
        ref: 'TreeModel'
    }],
    activeTrees: [{
        type: Schema.ObjectId,
        ref: 'TreeModel'
    }],
    created: {
        type: Date,
        default: Date.now
    },
    lastVisit: {
        type: Date,
        default: Date.now
    },
    visits: {
        type: Number,
        default: 0,
        trim: true
    },
    type: {
        type: String, // type private or public  
        default: 'private',
        trim: true
    },
    guests: [{
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    }],
});

/**
 * Validations
 */
//ForestSchema.path('fileName').validate(function(fileName) {
//    return fileName.length;
//}, 'fileName cannot be blank');

/**
 * Statics
 */
//ForestSchema.statics = {
//    load: function(id, cb) {
//        this.findOne({
//            _id: id
//        }).populate('user', 'name username').exec(cb);
//    }
//};

mongoose.model('FeedModel', FeedSchema);

