import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import next from "next";
import favicon from "serve-favicon";
import path from "path";
import passport from "passport";
import fs from "fs";

const router = express.Router();

// yarn dev!

// if test env, load example file
const env = process.env.NODE_ENV;
const config = require("./config/config");

const port = parseInt(process.env.PORT, 10) || config.port;
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();
const TreesRoutesController = require("./config/routes/bellwoods/trees/PortholeTreesRoutesController");

// Bootstrap models
/*
const models_path = `${__dirname}/app/models`;
const walk = function (path) {
  fs.readdirSync(path).forEach((file) => {
    const newPath = `${path}/${file}`;
    const stat = fs.statSync(newPath);
    if (stat.isFile()) {
      if (/(.*)\.(js$|coffee$)/.test(file)) {
        require(newPath);
      }
    } else if (stat.isDirectory()) {
      walk(newPath);
    }
  });
};

walk(`${models_path}/auth`);
walk(`${models_path}/user`);
walk(`${models_path}/takeout`);
walk(`${models_path}/article`);
walk(`${models_path}/achievement`);
walk(`${models_path}/bellwoods/tree`);
walk(`${models_path}/bellwoods/forest`);
walk(`${models_path}/bellwoods/feed`);
walk(`${models_path}/bellwoods/game/quest`);
walk(`${models_path}/bellwoods/game/item`);
walk(`${models_path}/bellwoods/game/avatar`);
walk(`${models_path}/bellwoods/game`);
walk(`${models_path}/bellwoods/cabin`);
walk(`${models_path}/porthole`);
walk(`${models_path}/porthole/settings`);

// ROUTES
// require('./app/controllers/routes/RoutesController')(app, config);
const auth = require("./config/middlewares/authorization");
const RoutesController = require("./config/routes");
*/

app.prepare().then(() => {
  const server = express();

  server.use(favicon(path.join(__dirname, "static", "favicon.ico")));
  server.use(cors());

  // DATABASE
  /*
  require("./app/controllers/mongoose/MongooseController")(server, config, env);
  // PASSPORT
  require("./app/controllers/passport/PassportController")(server, config, env);
  */
  // const routes = new RoutesController(server, passport, auth, router);

  server.get("/api/user/:username", (req, res) => {
    const { username } = req.params;

    console.log(`-----------${username}----------------`);

    // I need register an app on instagram and do oAuth

    return fetch(`https://instagram.com/${username}/media`)
      .then(data => data.json())
      .then(json => res.json(json));
  });

  server.get("/", (req, res) => {
    return app.render(req, res, "/home", req.query);
  });

  const treesRoutesController = new TreesRoutesController(server);

  // wildcard last
  /*
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.all('/*', (req, res, next) ={
    res.header("Access-Control-Allow-Origin", "*");
    next();
}); */

  const serverConnectionCallback = (err) => {
    if (err) {
      console.error(err);
    }
    console.info("----\n==> 🚀  %s is running", config.app.name);
    console.info(
      "==> 🌲 Open http://%s:%s in a browser to view Cabin Quest. 🌲",
      config.host,
      config.port
    );
  };

  server.listen(port, (err) => {
    if (err) throw err;
    serverConnectionCallback();
  });
});
