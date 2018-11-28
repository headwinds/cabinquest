module.exports = function(app, config) {
    // Simple route middleware to ensure user is authenticated.
    var ensureAuthenticated = function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    };

    app.get('/special', function(req, res) {
        console.log('RoutesController /special req.user: ', req.user);

        /*
	  res.render('index', {
	    user: ( req.user ) ? req.user :  "unknown - not logged in"
	  });
	  */

        res.redirect('/widgets');
    });

    app.get('/user', function(req, res) {
        console.log('RoutesController /user ', req);

        /*
	  res.render('index', {
	    user: ( req.user ) ? req.user :  "unknown - not logged in"
	  });
	  */

        //res.send( req );
    });

    app.get('/login', function(req, res) {
        res.render('login', {
            user: req.user ? req.user : 'unknown - not logged in'
        });
    });

    app.get('/account', ensureAuthenticated, function(req, res) {
        res.render('account', {
            user: req.user
        });
    });

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};
