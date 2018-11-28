/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../../../config/config'),
    Schema = mongoose.Schema;

/*

tree is the complete collection

ether is a collection you're sharing 

phase 1 - share it with everyone - all setting 

phase 2 - share it with select few - few setting and add followers 

*/


/**
 * Takeout Schema
 */
var EtherSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    },
    followers: [{
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    }],
    trees: [{
        type: Schema.ObjectId,
        ref: 'TreeModel'
    }],
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
    setting: {
        type: String,
        default: 'all',
        trim: true
    },
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

mongoose.model('ForestModel', ForestSchema);

