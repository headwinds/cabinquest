/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../../config/config'),
    Schema = mongoose.Schema,
    Mixed = mongoose.Schema.Types.Mixed;


/**
 * Takeout Schema
 */
var TakeoutSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    fileName: {
        type: String,
        default: '',
        trim: true
    },
    email: {
        type: String,
        default: '',
        trim: true
    },
    subscriptions: {
        type: Mixed,
        default: '',
    },
    followers: {
        type: Buffer,
        default: '',
    },
    liked: {
        type: Buffer,
        default: '',
    },
    notes: {
        type: Buffer,
        default: '',
    },
    shared: {
        type: Buffer,
        default: '',
    },
    sharedByFollowers: {
        type: Buffer,
        default: '',
    },
    starred: {
        type: Buffer,
        default: '',
    }
});

/**
 * Validations
 */
//TakeoutSchema.path('fileName').validate(function(fileName) {
//    return fileName.length;
//}, 'fileName cannot be blank');

/**
 * Statics
 */
//TakeoutSchema.statics = {
//    load: function(id, cb) {
//        this.findOne({
//            _id: id
//        }).populate('user', 'name username').exec(cb);
//    }
//};

mongoose.model('TakeoutModel', TakeoutSchema);

