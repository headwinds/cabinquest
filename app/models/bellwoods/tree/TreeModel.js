/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../../../config/config'),
    Schema = mongoose.Schema;


/**
 * Takeout Schema
 */
var TreeSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    text: {
        type: String,
        default: '',
        trim: true
    },
    type: {
        type: String, // rss / atom
        default: '',
        trim: true
    },
    category: {
        type: String, // rss / atom
        default: 'unknown',
        trim: true
    },
    origin: {
        type: String, // takeout / porthole 
        default: 'takeout',
        trim: true
    },
    xmlUrl: {
        type: String,
        default: '',
        trim: true
    },
    htmlUrl: {
        type: String,
        default: '',
        trim: true
    },
    latestImageUrl: {
        type: String,
        default: 'unknown',
        trim: true
    },
    latestImage: {
        type: Object,
        default: { url: "unknown", width: "0px", height: "0px"}
    },
    twitterID: {
        type: String,
        default: '',
        trim: true
    },
    lastVisit: {
        type: Date,
        default: Date.now
    },
    rating: {
        type: Number,
        default: 5,
        trim: true
    },
    visits: {
        type: Number,
        default: 0,
        trim: true
    },
    x: {
        type: Number,
        default: 0,
        trim: true
    },
    y: {
        type: Number,
        default: 0,
        trim: true
    },
    guests: [{
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    }],
    feeds: [{
        type: Schema.ObjectId,
        ref: 'FeedModel'
    }],
    bFeedSelected: {
        type: Boolean,
        default: true
    },
    tags: { type: [String], 
            default: [],
            index: true 
    },
    lastBranchTitles: { type: [String], 
            default: [],
            index: true 
    },
    lastReviewedBranchTitles: { type: [String], 
            default: [],
            index: true },        
    created: {
        type: Date,
        default: Date.now
    }
});

/**
 * Validations
 */
//TreeSchema.path('fileName').validate(function(fileName) {
//    return fileName.length;
//}, 'fileName cannot be blank');

/**
 * Statics
 */
//TreeSchema.statics = {
//    load: function(id, cb) {
//        this.findOne({
//            _id: id
//        }).populate('user', 'name username').exec(cb);
//    }
//};

mongoose.model('TreeModel', TreeSchema);

