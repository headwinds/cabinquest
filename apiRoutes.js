const express = require("express");
const passport = require("passport");
const Account = require("./account");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { user: req.user });
});

router.get("/register", (req, res) => {
  res.render("register", {});
});

router.post("/register", (req, res) => {
  Account.register(new Account({ username: req.body.username }), req.body.password, (
    err,
    account
  ) => {
    if (err) {
      return res.render("register", { account });
    }

    passport.authenticate("local")(req, res, () => {
      res.redirect("/");
    });
  });
});

router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.redirect("/");
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get("/ping", (req, res) => {
  res.status(200).send("pong!");
});

// Setting the facebook oauth routes
const callbackSignin = function () {
  console.log("Facebook auth callbackSignin");
};

const callbackSuccess = function () {
  console.log("Facebook auth callbackSuccess");
};

router.get(
  "/auth/facebook",
  passport.authenticate("facebook", {
    scope: ["email", "user_about_me"],
    failureRedirect: "/",
  }),
  callbackSignin
);

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/",
  }),
  callbackSuccess
);

module.exports = router;
