let session = require('express-session'),
    mongoStore = require('connect-mongo')(session),
    mongoose = require('mongoose'),
    db;

module.exports = function(app, config, env) {
    mongoose.connect(config.db);

    mongoose.connection.on(
        'error',
        console.error.bind(
            console,
            'ERROR!!!! Please start MongoDB config.db: ',
            config.db
        )
    );
    mongoose.connection.once('open', function() {
        console.log('Mongoose connection success ', config.db);

        app.use(
            session({
                secret: 'cabinquestforever!1',
                resave: false,
                saveUninitialized: false,
                cookie: { maxAge: 60000, secure: true },
                store: new mongoStore({
                    db: this.db,
                    collection: config.sessionCollection
                })
            })
        );
    });

    return mongoose.connection;
};
