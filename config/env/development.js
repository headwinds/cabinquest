module.exports = {
  // db: "mongodb+srv://headwinds:Bedford22@cluster0-djtby.mongodb.net/nationalpark?retryWrites=true",
  // db: "mongodb://localhost/nationalpark",
  db: "mongodb://headwinds:Bedford22@ds045614.mlab.com:45614/nationalpark",
  // db: "mongodb://brandonflowers@gmail.com:pe$rohaR8u@jello.modulusmongo.net:27017/Aget3ebu",
  app: {
    name: "cabinquest",
  },
  facebook: {
    clientID: "1523865861168072",
    clientSecret: "5520ce4a6ef9746c3a6ed7278f9df393",
    callbackURL: "http://localhost:3000/auth/facebook/callback",
  },
  twitter: {
    clientID: "GX6Zh0AyFv4OVXg5jncCkLkg9",
    clientSecret: "YLzKwcUWnhYOGtUiyo9QnQYEjQIKjk80WKNsVlBjeqADONZyWl",
    callbackURL: "http://localhost:3000/auth/twitter/callback",
  },
  github: {
    clientID: "c2b4a2674c27571e7c80",
    clientSecret: "31b30ad2948165852381a2c7d7c506cb7966401e",
    callbackURL: "http://localhost:3000/auth/github/callback",
  },
  google: {
    clientID: "347820260770-3h2jms65i96gur0s5nevtgl4h9gch1of.apps.googleusercontent.com",
    clientSecret: "bSJtwAoNAE66UfBh191hEU_Q",
    callbackURL: "http://localhost:3000/auth/google/callback",
  },
  port: process.env.PORT || 3000,
  host: "localhost",
};
