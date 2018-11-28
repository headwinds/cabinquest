/**
 * Module dependencies.
 */
const mongoose = require("mongoose");
const ObjectId = require("mongoose").Types.ObjectId;

const CabinQuestUser = mongoose.model("CabinQuestUserModel");
const AchievementModel = mongoose.model("AchievementModel");
const PortholeSettingsModel = mongoose.model("PortholeSettingsModel");
const util = require("util");
const events = require("events");
const _ = require("lodash");

const CabinQuestUsersController = function() {
  events.EventEmitter.call(this);
};

util.inherits(CabinQuestUsersController, events.EventEmitter);

/**
 * Auth callback
 */
CabinQuestUsersController.prototype.authCallback = function(req, res) {
  console.log("CabinQuestUsersController - authCallback - redirecting to profile");
  // phase 2 - I'm not doing authentication with cabinquest until later...
};

/**
 * Show login form
 */
CabinQuestUsersController.prototype.signin = function(req, res) {
  console.log("CabinQuestUsersController - signin");

  const data = { user: req.user };
  const cabinQuestUsers = req.session.cabinQuestUsers;

  cabinQuestUsers.emit("CabinQuestUsersController_signedIn", data);

  // users.write("routes_signin", { test: "Hello World" } );

  res.render("authUsers/signin", {
    title: "Signin",
    message: req.flash("error"),
  });
};

/**
 * Show sign up form
 */
CabinQuestUsersController.prototype.signup = function(req, res) {
  console.log("CabinQuestUsersController - signup - attempt ");

  /*
    res.render('users/signup', {
        title: 'Sign up',
        user: new CabinQuestUser()
    });

    */
};

/**
 * Logout
 */
CabinQuestUsersController.prototype.signout = function(req, res) {
  req.logout();
  res.redirect("/");
};

/**
 * Session
 */
CabinQuestUsersController.prototype.session = function(req, res) {
  res.redirect("/");
};

const addProvider = function(providerStr, providers, user) {
  const result = _.contains(providers, providerStr);

  if (!result) {
    providers.push(providerStr);

    user.save();
  }

  return providers;
};

/**
 * Create user
 */
CabinQuestUsersController.prototype.create = function(req, res, next) {
  console.log("CabinQuestUsersController - create");

  const authUser = req.body;

  const user = new CabinQuestUser();
  let message = null;

  user.status = "minted";

  // user.treesCollection = { bTakeoutUploaded: false }; moved to achievements

  user.name = authUser.name;
  user.email = authUser.email;
  user.photoProvider = authUser.provider;
  user.points = 0;
  user.username = undefined !== authUser.username ? authUser.username : "please update";

  // var firstAchievement = { title: "first sign in", description: "", points: "10" };
  // user.achievements.push(firstAchievement);

  // ensure the new CabinQuestUser is stored in session
  // req.session.cabinQuestUser = user;

  // I'm creating a new user so I can safely add the the provider without checking if it already has one
  user.providers.push(authUser.provider);

  user.save(err => {
    if (err) {
      switch (err.code) {
        case 11000:
        case 11001:
          message = "Username already exists";
          break;
        default:
          message = "Please fill all the required fields";
      }

      console.log(`CabinQuestUsersController - create - error code: ${err} message: ${message}`);

      return res.render("authUsers/signup", {
        message,
        user,
      });
    }

    /*

        new user is already logged in...

        req.logIn(user, function(err) {

            console.log(user, "CabinQuestUsersController - create - logIn");

            if (err) return next(err);
            return res.redirect('/');
        });

        */

    return res.jsonp({ model: user, message: "newly minted cabinquest user", bNewUser: true });
  });
};

/**
 * Send User
 */
CabinQuestUsersController.prototype.me = function(req, res, next) {
  console.log("CabinQuestUsersController - me");

  // if ( undefined !== req.session.cabinQuestUsers ) {
  //    req.session.cabinQuestUsers.getUserByEmail(req, res, next);
  // }

  // return res.redirect('/cabinQuestUsers/getUserByEmail');
};

/**
 * Update a user status -- needs to be reworked
 */
CabinQuestUsersController.prototype.updateStatus = function(req, res) {
  const cabinQuestUser = req.body.params;

  console.log("CabinQuestUsersController - updateStatus: ", cabinQuestUser);

  CabinQuestUser.findOne({
    _id: cabinQuestUser._id,
  }).exec((err, user) => {
    if (err) return next(err);

    if (user) {
      // update
      user.status = cabinQuestUser.status;
      //
      user.save(err => {
        res.jsonp({ model: user, action: "updateStatus", message: "update success" });
      });

      console.log(user, "CabinQuestUsersController - status and points should have changed");
    }
  });
};

/**
 * Update a porthole settings
 */
CabinQuestUsersController.prototype.updatePortholeSettings = function(req, res) {
  console.log(req.body.params, "CabinQuestUsersController - updatePortholeSettings");

  const curUser = req.session.cabinQuestUser;
  const curPortholeSettings = req.body.params;

  console.log("---------------------");

  PortholeSettingsModel.findOne({ user: ObjectId(curUser._id) }, (err, portholeSettingsModel) => {
    if (portholeSettingsModel !== null) {
      for (var ix in curPortholeSettings) {
        portholeSettingsModel[ix] = curPortholeSettings[ix];
      }

      /*
              portholeSettingsModel.bAcceptedFeatureUpdate: false,
              portholeSettingsModel.bUsePersonalPhoto: false,
              portholeSettingsModel.bUsePersonalTree: false,
              portholeSettingsModel.personalPhoto: personalPhoto,
              portholeSettingsModel.personalTree: personalTree,
              portholeSettingsModel.forestModel: forestModel,
              portholeSettingsModel.presentation: "full",
              portholeSettingsModel.order: "shuffled",
              portholeSettingsModel.transition: "instant",
              portholeSettingsModel.bUsePinnedPhoto: false,
              pinnedPhotoUrl: ""
            */

      portholeSettingsModel.save(err => {
        if (err) {
          console.log(`CabinQuestUsersController updatePortholeSettings err code: ${err}`);
          return res.send("bellwoods/error", {
            errors: err.errors,
            model: null,
            message: "problem attempting to update the Porthole settings",
          });
        } else {
          const result = { model: portholeSettingsModel, message: "Porthole settings updated" };
          res.jsonp(result);
        }
      });
    } else {
      console.log(
        "CabinQuestUsersController - did not find the portholeSettingsModel since its null and needs to be created"
      );

      var portholeSettingsModel = new PortholeSettingsModel();

      for (var ix in curPortholeSettings) {
        portholeSettingsModel[ix] = curPortholeSettings[ix];
      }

      portholeSettingsModel.user = curUser._id;

      console.log(
        "CabinQuestUsersController - about to save portholeSettingsModel: ",
        portholeSettingsModel
      );

      portholeSettingsModel.save((err, model) => {
        if (err) {
          console.log("CabinQuestUsersController - create portholeSettingsModel - error: ", err);
          return res.send("bellwoods/error", {
            errors: err.errors,
            model: null,
            message: "problem attempting to update the Porthole settings",
          });
        }

        return res.jsonp({ model, message: "portholeSettingsModel saved on the server" });
      });
    }
  });
};

/**
 * Update a user achievements
 */
CabinQuestUsersController.prototype.updateAchievements = function(req, res) {
  console.log(req.body.params, "CabinQuestUsersController - updateAchievements");

  const curUser = req.session.cabinQuestUser;
  const curAchievement = req.body.params;

  // curUser.achievements.push(curAchievement);
  // var allAchievements = curUser.achievements;

  CabinQuestUser.findOne({
    _id: curUser._id,
  })
    .populate("achievements")
    .exec((err, userModel) => {
      if (err) return next(err);

      if (userModel) {
        // userModel.achievements = allAchievements;
        //
        const achievementModel = new AchievementModel(curAchievement);
        achievementModel.user = userModel;

        console.log(achievementModel, "CabinQuestUsersController updateAchievements about to save");

        achievementModel.save(err => {
          if (err !== null) {
            console.log(
              `CabinQuestUsersController updateAchievements achievementModel err code: ${err}`
            );
            return res.send("bellwoods/error", {
              errors: err,
              userModel,
            });
          } else {
            console.log(
              "CabinQuestUsersController updateAchievements achievementModel saved success"
            );
          }
          // thats it!
        });

        // userModel.achievements.push( { id: achievementModel._id, title: achievementModel.title, description: achievementModel.description, points: achievementModel.points} );
        userModel.achievements.push(achievementModel);

        userModel.save(err => {
          if (err) {
            console.log(`CabinQuestUsersController updateAchievements err code: ${err}`);
            return res.send("bellwoods/error", {
              errors: err.errors,
              userModel,
            });
          } else {
            console.log(
              userModel,
              "CabinQuestUsersController - all achievements have been updated"
            );

            // userModel.populate('achievements');

            const resultData = {
              model: userModel,
              message: "CabinQuestUsersController - all achievements have been updated",
            };

            res.jsonp(resultData);

            // userModel
            // .find({achievements: {$all:[req.params.id]}})
            //   .populate('achievements.user')
            // .exec(function(err, userModel) { console.log(userModel, "no dice? CabinQuestUserModel"); })
          }
        });
      }
    });
};

/**
 * Update a user achievements
 */
CabinQuestUsersController.prototype.getTotalAchievements = function(req, res) {
  const curAchievement = req.body.params;

  console.log(req.body.params, "CabinQuestUsersController - getTotalAchievements - params");
  console.log(
    `CabinQuestUsersController - getTotalAchievements - curAchievement.title: ${
      curAchievement.title
    }`
  );

  AchievementModel.count(
    { title: curAchievement.title, points: curAchievement.points },
    (err, count) => {
      if (err) {
        return res.send("bellwoods/error", {
          errors: err.errors,
          count: null,
        });
      } else {
        console.log(`CabinQuestUsersController - getTotalAchievements - count: ${count}`);

        const resultData = {
          count,
          message: `AchievementModel - total achievements for ${curAchievement.title}`,
        };

        res.jsonp(resultData);
      }
    }
  );
};

/**
 * Find user by id
 */
CabinQuestUsersController.prototype.user = function(id, req, res, next) {
  console.log("CabinQuestUsersController - user - req.user.email - but who is calling this?!");

  // console.log(arguments, "CabinQuestUsersController - user - arguments?");

  // 0 has a cast error for id
  // 1 - req
  // 2 - res
  // 3 - next <-- callback

  // id is not an id but a function!

  // need to make sure the user is created before we can try to find one!
  /*
    var next = function(err){
        console.log(err, "CabinQuestUsersController - user - error")
    };

    CabinQuestUser
        .findOne({
            _id: id
        })
        .exec(function(err, user) {

            if (err) return next(err);

            if ( user === null ) return next(new Error('Failed to load User ' + id));

            req.profile = user;

            if ( null !== user ) {
                return res.jsonp( { model: user, message: "found cabinquest user"} )
            }

            //next();
        });
    */
};

/**
 * Find user by email
 */
CabinQuestUsersController.prototype.getUserByEmail = function(req, res, next) {
  const controllerScope = this;

  const authUserObj = req.body;

  console.log("CabinQuestUsersController - getUserByEmail - cabinQuestUser: ");
  // console.log(req.session.cabinQuestUser, "CabinQuestUsersController - getUserByEmail");
  // console.log("CabinQuestUsersController - getUserByEmail - req: ");
  // console.log(req);
  // console.log("CabinQuestUsersController - getUserByEmail - req.session.authUser: ");
  // console.log(req.session.authUser);

  if (undefined === authUserObj) {
    console.log(
      "CabinQuestUsersController - getUserByEmail - authUserObj is undefined!!!!",
      authUserObj
    );
    // return res.jsonp( { model: null, message: "error! CabinQuestUsersController user needs to sign in", action: "getUserByEmail"} );
    return res.jsonp({
      model: null,
      message: "authUserObj is undefined",
      action: "getUserByEmail",
    });
  }

  const userEmail = authUserObj.email; // req.session.cabinQuestUser.email;

  // console.log(`CabinQuestUsersController - getUserByEmail - userEmail: ${userEmail}`);

  CabinQuestUser.findOne({
    email: userEmail,
  })
    .populate("achievements")
    .exec((err, cabinQuestUserModel) => {
      if (err) return next(err);

      // console.log(user, "CabinQuestUsersController - getUserByEmail - no error but what is user?! ");

      // user should be null if not found!

      if (cabinQuestUserModel !== null) {
        console.log("CabinQuestUsersController - user exists ");

        // req.profile = user;
        // var provider = req.session.authUser.provider; // auth
        // var providers = req.session.cabinQuestUser.providers;  // cabinquest

        // addProvider(provider, providers, cabinQuestUserModel); // adds the provider if the cabin user doesn't have it

        // I want to pass the cabinquestUser to the profile
        console.log("CabinQuestUsersController - found it and sent it to client");

        // return res.redirect('/#!/profile', {user: user} );
        // how do I redirect to profile and include this cabinquest user?!?!?!

        // lets store it in session - don't really need the session anymore with redux eh?!
        // req.session.cabinQuestUser = cabinQuestUserModel;

        // res.jsonp( user );

        return res.jsonp({ model: cabinQuestUserModel, message: "found cabinquest user" });

        // res.redirect('/#!/profile');
      } else {
        console.log(
          "CabinQuestUsersController - user is null doesn't exist so we need to create it!"
        );

        // return res.redirect('/cabinQuestUsers/create');

        controllerScope.create(req, res);

        // return res.jsonp( { model: null, message: "cabinquest user not found"} )
      }
    });
};

module.exports = CabinQuestUsersController;
