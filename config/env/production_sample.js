module.exports = {
  db: "",
  app: {
    name: "cabinquest",
  },
  facebook: {
    clientID: "",
    clientSecret: "",
    callbackURL: "https://cabinquest.now.sh/auth/facebook/callback",
  },
  twitter: {
    clientID: "",
    clientSecret: "",
    callbackURL: "https://cabinquest.now.sh/auth/twitter/callback",
  },
  github: {
    clientID: "",
    clientSecret: "",
    callbackURL: "https://cabinquest.now.sh/auth/github/callback",
  },
  google: {
    clientID: "",
    clientSecret: "",
    callbackURL: "https://cabinquest.now.sh/auth/google/callback",
  },
  port: process.env.PORT || 80,
  host: "",
};
