/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../../config/config'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
var AdminSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: 'admin',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    }
});


/**
 * Statics
 */
AdminSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);
    }
};

mongoose.model('AdminModel', AdminSchema);