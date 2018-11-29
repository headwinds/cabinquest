module.exports = {
  db: "",
  app: {
    name: "cabinquest",
  },
  facebook: {
    clientID: "",
    clientSecret: "",
    callbackURL: "http://localhost:3000/auth/facebook/callback",
  },
  twitter: {
    clientID: "",
    clientSecret: "",
    callbackURL: "http://localhost:3000/auth/twitter/callback",
  },
  github: {
    clientID: "",
    clientSecret: "",
    callbackURL: "http://localhost:3000/auth/github/callback",
  },
  google: {
    clientID: "",
    clientSecret: "",
    callbackURL: "http://localhost:3000/auth/google/callback",
  },
  port: process.env.PORT || 3000,
  host: "localhost",
};
