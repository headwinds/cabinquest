/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../../../config/config'),
    Schema = mongoose.Schema,
    Mixed = mongoose.Schema.Types.Mixed;

var PortholeSettingsSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    },
    bAcceptedFeatureUpdate: {
        type: Boolean,
        default: false
    },
    bUsePersonalPhoto: {
        type: Boolean,
        default: false
    },
    bShowViewed: {
        type: Boolean,
        default: true
    },
    personalPhoto: {
        type: Object,
        default: {
            title: "",
            description: "",
            photoUrl: "",
            webPageUrl: "",
            feedTitle: "Me",
      },
    },
    forest: {
        type: Object,
        default: {
            trees: ["cabinporn"],
            branches: [],
            date: new Date()
        },
    },
    presentation: {
        type: String,
        default: 'full',
    },
    order: {
        type: String,
        default: 'shuffled',
    },
    transition: {
        type: String,
        default: 'instant',
    },
    bUsePinnedPhoto: {
        type: Boolean,
        default: false
    },
    pinnedPhotoUrl: {
        type: String,
        default: '',
    },
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

mongoose.model('PortholeSettingsModel', PortholeSettingsSchema);

