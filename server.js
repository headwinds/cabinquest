import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import next from "next";
import favicon from "serve-favicon";
import path from "path";
import passport from "passport";
import bodyParser from "body-parser";
import fs from "fs";

const multer = require("multer");

const config = require("./config/config");

/*
yarn dev
https://github.com/iaincollins/nextjs-starter
*/

const env = process.env.NODE_ENV || "development";
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const router = express.Router();

// 1. Bootstrap models before any controllers

const models_path = `${__dirname}/app/models`;
const walk = function(path) {
  fs.readdirSync(path).forEach(file => {
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

// 2. after bootstrapping models, then controllers can use them via mongoose
// const TreesRoutesController = require("./config/routes/bellwoods/trees/PortholeTreesRoutesController");
const TreesRoutesController = require("./config/routes/bellwoods/trees/TreesRoutesController");

const includeMongoDB = true;

// app is nextjs not express
app.prepare().then(() => {
  const server = express();

  server.use(cors());
  server.use(favicon(path.join(__dirname, "static", "favicon.ico")));

  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(bodyParser.json());
  // server.use(multer()); // for parsing multipart/form-data

  server.get("/", (req, res) => {
    return app.render(req, res, "/home", req.query);
  });

  if (includeMongoDB) {
    // DATABASE
    require("./app/controllers/mongoose/MongooseController")(server, config, env);
    // PASSPORT
    require("./app/controllers/passport/PassportController")(server, config, env);

    const treesRoutesController = new TreesRoutesController(server, passport, auth);
    const routes = new RoutesController(server, passport, auth, router);
  }

  server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  const serverConnectionCallback = err => {
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

  server.listen(port, err => {
    if (err) throw err;
    serverConnectionCallback();
  });
});
