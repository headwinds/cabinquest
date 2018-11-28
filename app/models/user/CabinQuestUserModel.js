

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto'),
    authTypes = ['github', 'twitter', 'facebook', 'google', 'cabinquest'];


/**
 * User Schema
 */
var CabinQuestUserSchema = new Schema({
    name: String,
    email: String,
    status: {
        type: String,
        default: 'minted',
        trim: true
    },
    username: {
        type: String,
        unique: true
    },
    hashed_password: String,
    salt: String,
    providers: [],
    photoProvider: String,
    points: {
        type: Number,
        default: 0,
    },
    scout: {
        type: String,
        default: 'brownie',
        trim: true
    },
    experience: {
        type: Number,
        default: 0,
    },
    speed: {
        type: Number,
        default: 0,
    },
    dues_paid_dates: [],
    achievements: [{ 
        type: Schema.ObjectId,
        ref: 'AchievementModel' 
    }],
});

/**
 * Virtuals
 */
CabinQuestUserSchema.virtual('password').set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
}).get(function() {
    return this._password;
});

/**
 * Validations
 */
var validatePresenceOf = function(value) {
    return value && value.length;
};

/*
// the below 4 validations only apply if you are signing up traditionally
CabinQuestUserSchema.path('name').validate(function(name) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return name.length;
}, 'Name cannot be blank');

CabinQuestUserSchema.path('email').validate(function(email) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return email.length;
}, 'Email cannot be blank');

CabinQuestUserSchema.path('username').validate(function(username) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return username.length;
}, 'Username cannot be blank');

CabinQuestUserSchema.path('hashed_password').validate(function(hashed_password) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return hashed_password.length;
}, 'Password cannot be blank');
*/


/**
 * Pre-save hook
 */
CabinQuestUserSchema.pre('save', function(next) {

    //console.log(next.fn.toString(), "AuthUserModel users pre")

    if (!this.isNew) return next();

    /*
    if (!validatePresenceOf(this.password) && authTypes.indexOf(this.provider) === -1)
        next(new Error('Invalid password'));
    else
        next();
    */
    next(); 
});

/**
 * Methods
 */
CabinQuestUserSchema.methods = {
    /**
     * Authenticate - check if the passwords are the same
     *
     * @param {String} plainText
     * @return {Boolean}
     * @api public
     */
    authenticate: function(plainText) {
        return this.encryptPassword(plainText) === this.hashed_password;
    },

    /**
     * Make salt
     *
     * @return {String}
     * @api public
     */
    makeSalt: function() {
        return crypto.randomBytes(16).toString('base64');
    },

    /**
     * Encrypt password
     *
     * @param {String} password
     * @return {String}
     * @api public
     */
    encryptPassword: function(password) {
        if (!password || !this.salt) return '';
        var salt = new Buffer(this.salt, 'base64');
        return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
    }
};

mongoose.model('CabinQuestUserModel', CabinQuestUserSchema);