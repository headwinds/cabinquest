/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto'),
    authTypes = ['github', 'twitter', 'facebook', 'google'];

/**
 * User Schema
 */
var AuthUserSchema = new Schema({
    name: String,
    email: String,
    username: {
        type: String,
        unique: false
    },
    hashed_password: String,
    provider: String,
    salt: String,
    facebook: {},
    twitter: {},
    github: {},
    google: {}
});

/**
 * Virtuals
 */
AuthUserSchema.virtual('password')
    .set(function(password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function() {
        return this._password;
    });

/**
 * Validations
 */
var validatePresenceOf = function(value) {
    return value && value.length;
};

// the below 4 validations only apply if you are signing up traditionally
AuthUserSchema.path('name').validate(function(name) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return name.length;
}, 'Name cannot be blank');

AuthUserSchema.path('email').validate(function(email) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return email.length;
}, 'Email cannot be blank');

AuthUserSchema.path('username').validate(function(username) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return username.length;
}, 'Username cannot be blank');

/*
AuthUserSchema.path('hashed_password').validate(function(hashed_password) {
    // if you are authenticating by any of the oauth strategies, don't validate
    if (authTypes.indexOf(this.provider) !== -1) return true;
    return hashed_password.length;
}, 'Password cannot be blank');
*/

/**
 * Pre-save hook
 */
AuthUserSchema.pre('save', function(next) {
    //console.log(next.toString(), "AuthUserModel users pre");

    if (!this.isNew) return next();
    else
        /*
    if (
        !validatePresenceOf(this.password) &&
        authTypes.indexOf(this.provider) === -1
    )
        next(new Error('Invalid password'));
        */
        next();
});

/**
 * Methods
 */
AuthUserSchema.methods = {
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

mongoose.model('AuthUserModel', AuthUserSchema);
