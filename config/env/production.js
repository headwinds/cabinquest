// pe$rohaR8u
// mongo jello.modulusmongo.net:27017/Aget3ebu -u headwinds -p bedford22
// mongo ds045614.mlab.com:45614/nationalpark -u headwinds -p bedford22

// "mongodb://headwinds:bedford22@ds045614.mlab.com:45614/nationalpark"
// "mongodb://headwinds:bedford22@jello.modulusmongo.net:27017/Aget3ebu",

module.exports = {
  // db: "mongodb+srv://headwinds:Bedford22@cluster0-djtby.mongodb.net/test?retryWrites=true",
  // db: "mongodb://headwinds:bedford22@jello.modulusmongo.net:27017/Aget3ebu",
  db: "mongodb://headwinds:Bedford22@ds045614.mlab.com:45614/nationalpark",
  app: {
    name: "cabinquest",
  },
  facebook: {
    clientID: "1523864221168236",
    clientSecret: "f2a4451fcc3f213db8b03e580f3edc5f",
    callbackURL: "https://cabinquest.now.sh/auth/facebook/callback",
  },
  twitter: {
    clientID: "Sbrkfm4VFG8YhS4QriGrQD5aR",
    clientSecret: "m31nnfIIm8ppvI44hcAgn4YBQQXM7APBmd359kl4lsxcb3XIBk",
    callbackURL: "https://cabinquest.now.sh/auth/twitter/callback",
  },
  github: {
    clientID: "b463b763d963b98427eb",
    clientSecret: "e66caa9000194bf718c8d7189c8df147ad5dfbf3",
    callbackURL: "https://cabinquest.now.sh/auth/github/callback",
  },
  google: {
    clientID: "519628292035-d5kmnmf00tgtnhpi2n3tiblcnnlpba1e.apps.googleusercontent.com",
    clientSecret: "Ka_fJNc6zBmoCvYv_Sp8lsUl",
    callbackURL: "https://cabinquest.now.sh/auth/google/callback",
  },
  port: process.env.PORT || 80,
  host: "cabinquest.mod.bz",
};
