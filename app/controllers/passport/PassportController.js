let passport = require("passport"),
  FacebookStrategy = require("passport-facebook"),
  TwitterStrategy = require("passport-twitter"),
  TwitterTokenStrategy = require('passport-twitter-token'),
  GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const session = require('express-session');

const AuthUsersController = require("../auth/AuthUsersController");

module.exports = function (app, config, env) {
  const authUsers = new AuthUsersController();

  app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'bla bla bla'
  }));

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    // done(null, user.id);
    done(null, user);
  });

  passport.deserializeUser((obj, done) => {
    // Users.findById(obj, done);
    done(null, obj);
  });

  passport.use(
    new GoogleStrategy(
      config.google,

      (accessToken, refreshToken, profile, done) => {
        return done(null, profile);
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      config.facebook,

      (accessToken, refreshToken, profile, done) => {
        return done(null, profile);
      }
    )
  );

  passport.use(
    new TwitterTokenStrategy({
      consumerKey: 'GX6Zh0AyFv4OVXg5jncCkLkg9',
      consumerSecret: 'YLzKwcUWnhYOGtUiyo9QnQYEjQIKjk80WKNsVlBjeqADONZyWl',
      includeEmail: true
    },
    function (token, tokenSecret, profile, done) {
      console.log("Twitter token success: ", profile);
      /*
      User.upsertTwitterUser(token, tokenSecret, profile, function(err, user) {
        return done(err, user);
      });
      */
    }));

    passport.use(new TwitterStrategy({
      consumerKey: 'Sbrkfm4VFG8YhS4QriGrQD5aR',
      consumerSecret: 'm31nnfIIm8ppvI44hcAgn4YBQQXM7APBmd359kl4lsxcb3XIBk',
      callbackURL: "https://goldfarming.now.sh/auth/twitter/callback"
    },
    function(token, tokenSecret, profile, cb) {
      /*
      User.findOrCreate({ twitterId: profile.id }, function (err, user) {
        return cb(err, user);
      });
      */
    }


  ));
  /*
	passport.use(new TwitterStrategy(
	  config.twitter,

	  function(accessToken, refreshToken, profile, done) {
	    return done(null, profile);
	  }
	));

	app.get('/auth/twitter', passport.authenticate('twitter'));

	app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login'} ), authUsers.authCallback
	);
	*/

  app.get("/auth/google", passport.authenticate("google", { scope: ["openid email profile"] }));

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    authUsers.authCallback
  );

  app.get(
    "/auth/facebook",
    passport.authenticate("facebook", { scope: ["email", "user_about_me"] })
  );

  app.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    authUsers.authCallback
  );

  app.get('/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

  app.get('/auth/twitter', passport.authenticate('twitter'));



  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
