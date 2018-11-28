/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    _ = require('underscore');


/**
 * Character Schema
 */
var CabinSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'CabinQuestUserModel'
    },
    title: {
        type: String,
        default: 'cabin'
    },
    description: {
        type: String,
        default: 'my fortress of solitude'
    },
    features: {
        type: Array,
        default: ["10 acres of virgin land", "porcupines"]
    },
    location: {
        type: String,
        default: 'way up north'
    },
    country: {
        type: String,
        default: 'Earth'
    },
    country: {
        type: String,
        default: 'Canada'
    },
    city: {
        type: String,
        default: 'nearest city...'
    },
    latitude: {
        type: String,
        default: 'way up north'
    },
    longitude: {
        type: String,
        default: 'way up north'
    },
    bOwn: {
        type: Boolean,
        default: false
    },
    bRent: {
        type: Boolean,
        default: false
    },
    dreamRealityRange: {
        type: Number,
        default: 10
    },
    kmFromHome: {
        type: Number,
        default: 100
    },
    price: {
        type: Number,
        default: 100
    },
    maintenancePerYear: {
        type: Number,
        default: 100
    },
    daysPerYear: {
        type: Number,
        default: 7
    },
    photoURL: {
        type: String,
        default: 'http://'
    }
});

mongoose.model('CabinModel', CabinSchema);