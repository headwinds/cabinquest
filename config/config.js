const _ = require("underscore");

// Load app configuration
// see all.js for properties

const env = String(process.env.NODE_ENV) !== "undefined" ? process.env.NODE_ENV : "development";

module.exports = _.extend(
  require(`${__dirname}/env/all.js`),
  require(`${__dirname}/env/${env}.js`) || {}
);
