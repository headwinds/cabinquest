/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../../config/config'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    }
});

/**
 * Validations
 */
ArticleSchema.path('title').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');

/*

I should validate this user model somehow... 

ArticleSchema.path('user').validate(function(user) {
    return user;
}, 'user cannot be null');

*/

/**
 * Statics
 */
ArticleSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);
    }
};

mongoose.model('ArticleModel', ArticleSchema);