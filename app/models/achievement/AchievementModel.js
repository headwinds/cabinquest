
/*
ACHIEVEMENTS:

"takeout uploaded"


*/


/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../../config/config'),
    Schema = mongoose.Schema;


/**
 * Achievement Schema
 */
var AchievementSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    points: {
        type: Number,
        default: 0
    },
    created: {
        type: Date,
        default: Date.now
    }
});

/**
 * Validations
 */
//AchievementSchema.path('fileName').validate(function(fileName) {
//    return fileName.length;
//}, 'fileName cannot be blank');

/**
 * Statics
 */
//AchievementSchema.statics = {
//    load: function(id, cb) {
//        this.findOne({
//            _id: id
//        }).populate('user', 'name username').exec(cb);
//    }
//};

mongoose.model('AchievementModel', AchievementSchema);

