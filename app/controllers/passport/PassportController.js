let passport = require("passport"),
  FacebookStrategy = require("passport-facebook"),
  TwitterStrategy = require("passport-twitter"),
  GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

const AuthUsersController = require("../auth/AuthUsersController");

module.exports = function (app, config, env) {
  const authUsers = new AuthUsersController();

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

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
