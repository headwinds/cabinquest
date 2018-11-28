const util = require('util');
const events = require('events');
const _ = require('underscore');

const AuthUsersController = require('../app/controllers/auth/AuthUsersController');
const CabinQuestUsersController = require('../app/controllers/user/CabinQuestUsersController');
const PortholeSettingsController = require('../app/controllers/porthole/PortholeSettingsController');
const IndexController = require('../app/controllers/IndexController');
const ArticlesController = require('../app/controllers/articles/ArticlesController');
const FileUploadService = require('../app/services/fileupload/FileUploadService');
const takeoutMongoService = require('../app/services/takeout/TakeoutMongoService');

const TreesRoutesController = require('../config/routes/bellwoods/trees/TreesRoutesController');
const ArticlesRoutesController = require('../config/routes/bellwoods/articles/ArticlesRoutesController');
const ForestRoutesController = require('../config/routes/bellwoods/forest/ForestRoutesController');
const FeedRoutesController = require('../config/routes/bellwoods/feed/FeedRoutesController');

const AvatarRoutesController = require('../config/routes/bellwoods/game/avatar/AvatarRoutesController');

const RoutesController = function(app, passport, auth, router) {
    events.EventEmitter.call(this);

    console.log('RoutesController init');

    const self = this;

    // /////////////////////////////////////////////////////////////// PORTHOLE

    const portholeSettingsController = new PortholeSettingsController();

    // save
    app.post(
        '/bellwoods/porthole/setting/save',
        portholeSettingsController.saveSetting
    );
    // create
    app.post(
        '/bellwoods/porthole/settings/create',
        portholeSettingsController.create
    );
    // get
    app.post(
        '/bellwoods/porthole/settings/get',
        portholeSettingsController.get
    );

    // /////////////////////////////////////////////////////////////// FILEUPLOAD

    // Upload
    const fileupload = new FileUploadService();

    app.post('/upload', (req, res) => {
        req.session.fileupload = fileupload;
        fileupload.uploadFile(req, res);
    });

    fileupload.on('FileUploadService_uploadComplete', data => {
        console.log(data, 'routes - EVENT: FileUploadService_uploadComplete');
        self.emit('routes_uploadComplete', data);
    });

    // /++ API

    // /////////////////////////////////////////////////////////////// BETA

    app.get('/beta', (req, res) => {
        res.send('placeholder for beta info which I hope to write one day');
    });

    // /////////////////////////////////////////////////////////////// WEATHER DATA

    // var hive = require('../app/services/hive/HiveService');
    app.get('/data/dataSnow.json', (req, res) => {
        res.send('data/dataSnow.json');
    });

    // /////////////////////////////////////////////////////////////// HIVE

    const hive = require('../app/services/hive/HiveService');
    app.get('/hive/logs', hive.getLogs);

    // /////////////////////////////////////////////////////////////// TAKEOUT

    // Takeouts Route
    // Setting up the takeouts api
    // var takeoutMongoService = require('../app/services/mongo/TakeoutMongoService');
    app.get('/takeout', takeoutMongoService.getTakeout);

    app.get('/takeout/getTakeoutInfo', takeoutMongoService.getTakeoutInfo);

    // /////////////////////////////////////////////////////////////// CABIN

    // Cabin Route
    const cabin = require('../app/controllers/cabin/CabinController');
    app.get('/cabin', cabin.render);

    // /////////////////////////////////////////////////////////////// BETA

    // /////////////////////////////////////////////////////////////// CABIN QUEST USERS

    // CabinQuest User
    const cabinQuestUsers = new CabinQuestUsersController();

    // Setting up the cabinQuestUsers api
    app.post('/cabinQuestUsers', (req, res) => {
        console.log(
            'routes.js - /cabinQuestUsers - create auth user without explicit path'
        );

        cabinQuestUsers.create(req, res);
    });

    // create - DELETE ME!
    app.get('/cabinQuestUsers/create', (req, res) => {
        console.log('routes.js - /cabinQuestUsers/create / create auth user');

        cabinQuestUsers.create(req, res);
    });

    // create
    app.post(
        '/cabinQuestUsers/achievements/total',
        cabinQuestUsers.getTotalAchievements
    );

    // update status
    app.post('/cabinQuestUsers/updateStatus', cabinQuestUsers.updateStatus);

    // update achievements
    app.post(
        '/cabinQuestUsers/updateAchievements',
        cabinQuestUsers.updateAchievements
    );

    app.post('/cabinQuestUsers/getUserByEmail', (req, res, next) => {
        console.log('routes - /cabinQuestUsers/getUserByEmail - req: ');

        cabinQuestUsers.getUserByEmail(req, res, next);
    });

    // update achievements
    // app.post('/cabinQuestUsers/updatePortholeSettings', cabinQuestUsers.updatePortholeSettings);

    app.get('/cabinQuestUsers/me', (req, res, next) => {
        console.log('routes - /cabinQuestUsers/me - me');

        req.session.cabinQuestUsers = cabinQuestUsers;

        cabinQuestUsers.me(req, res, next);
    });

    // app.get('/cabinQuestUsers/:id', cabinQuestUsers.user);

    // /////////////////////////////////////////////// AUTH

    // User Routes
    const authUsers = new AuthUsersController();

    // Setting up the authUsers api
    app.post('/authUsers', (req, res) => {
        console.log('routes.js - create auth user');

        authUsers.create(req, res);
    });

    // Setting up the authUsers api
    app.post('/authUsers/addSocialLogin', (req, res) => {
        console.log('routes.js - addSocialLogin auth user');

        authUsers.addSocialLogin(req, res);
    });

    // /////////////////////////////////////////////// SIGN IN / UP

    app.get('/signin', (req, res) => {
        console.log(authUsers, 'routes - signin');

        req.session.authUsers = authUsers;

        authUsers.signin(req, res);
    });

    app.get('/signup', authUsers.signup);
    app.get('/signout', authUsers.signout);

    // ///////////////////////////////////////////////

    app.get('/authUsers/me', authUsers.me); // works in the browser

    app.get('/authUsers/user', authUsers.user); // doesn't work in the browser

    app.post('/authUsers/getUserByProvider', authUsers.getUserByProvider);
    // app.get('/authUsers/getUserByProvider/:provider', authUsers.getUserByProvider);

    authUsers.on('routes_signedIn', data => {
        console.log(`routes - signedIn - ${data}`);

        self.emit('server_signedIn', data);
    });

    // ////////////////////////////////////////////////////////////////// LOCAL - not working

    // Setting the local strategy route
    /*
    app.post('/authUsers/session', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: true
    }), authUsers.session);
    */

    app.post(
        '/auth/local',
        passport.authenticate('local', {
            failureRedirect: '/signin',
            failureFlash: true
        }),
        authUsers.session
    );

    // ////////////////////////////////////////////////////////////////// OFFLINE - not working

    // Setting the offline oauth routes
    app.get(
        '/auth/offline',
        passport.authenticate('offline', {
            scope: [],
            failureRedirect: '/offline'
        }),
        authUsers.offline
    );

    app.get(
        '/auth/offline/callback',
        passport.authenticate('offline', {
            failureRedirect: '/offline'
        }),
        authUsers.authCallback
    );

    // ////////////////////////////////////////////////////////////////// FACEBOOK

    // Setting the facebook oauth routes
    app.get(
        '/auth/facebook',
        passport.authenticate('facebook', {
            scope: ['email', 'user_about_me'],
            failureRedirect: '/signin'
        }),
        authUsers.signin
    );

    app.get(
        '/auth/facebook/callback',
        passport.authenticate('facebook', {
            failureRedirect: '/signin'
        }),
        authUsers.authCallback
    );

    // ////////////////////////////////////////////////////////////////// GITHUB

    // Setting the github oauth routes
    app.get(
        '/auth/github',
        passport.authenticate('github', {
            failureRedirect: '/signin'
        }),
        authUsers.signin
    );

    app.get(
        '/auth/github/callback',
        passport.authenticate('github', {
            failureRedirect: '/signin'
        }),
        authUsers.authCallback
    );

    // ////////////////////////////////////////////////////////////////// TWITTER

    // Setting the twitter oauth routes
    app.get(
        '/auth/twitter',
        passport.authenticate('twitter', {
            failureRedirect: '/signin'
        }),
        authUsers.signin
    );

    app.get(
        '/auth/twitter/callback',
        passport.authenticate('twitter', {
            failureRedirect: '/signin'
        }),
        authUsers.authCallback
    );

    // ////////////////////////////////////////////////////////////////// GOOGLE

    // Setting the google oauth routes
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            failureRedirect: '/signin',
            scope: [
                'https://www.googleapis.com/auth/userinfo.profile',
                'https://www.googleapis.com/auth/userinfo.email'
            ]
        }),
        authUsers.signin
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google', {
            failureRedirect: '/signin'
        }),
        authUsers.authCallback
    );

    // Finish with setting up the userId param
    app.param('userId', authUsers.user);

    // //////////////////////////////////////////////////////////// PORTHOLE TWITTER & FACEBOOK

    /*

     //Setting the twitter oauth routes
    app.get('/porthole/auth/twitter', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), authUsers.signin);

    app.get('/porthole/auth/twitter/callback', passport.authenticate('twitter', {
        failureRedirect: '/signin'
    }), authUsers.authPortholeCallback);

     //Setting the twitter oauth routes
    app.get('/porthole/auth/facebook', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }), authUsers.signin);

    app.get('/porthole/auth/twitter/callback', passport.authenticate('facebook', {
        failureRedirect: '/signin'
    }), authUsers.authPortholeCallback);

    */

    // //////////////////////////////////////////////////////////// TREES

    const treesRoutesController = new TreesRoutesController(
        app,
        passport,
        auth
    );

    // //////////////////////////////////////////////////////////// ARTICLES

    const articlesRoutesController = new ArticlesRoutesController(
        app,
        passport,
        auth
    );

    // //////////////////////////////////////////////////////////// FOREST

    const forestRoutesController = new ForestRoutesController(
        app,
        passport,
        auth
    );

    // //////////////////////////////////////////////////////////// FEED

    const feedRoutesController = new FeedRoutesController(app, passport, auth);

    // //////////////////////////////////////////////////////////// GAME

    // //////////////////////////// AVATAR

    const avatarRoutesController = new AvatarRoutesController(
        app,
        passport,
        auth
    );

    // Home route
    // var index = new IndexController();

    router.get('/', (req, res) => {
        console.log('app>controllers>IndexController - render - v0.8');

        res.locals = {
            title: 'cabinquest',
            user: req.user ? JSON.stringify(req.user) : 'null'
        };

        return res.render('index/index');
    });
};

util.inherits(RoutesController, events.EventEmitter);

module.exports = RoutesController;
