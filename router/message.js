const express = require("express");

const {
  getMessage,
  postMessage,
} = require("../controller/message.controller.js");

const Router = express.Router();

Router.get("/api/message", getMessage);

Router.post("/api/message", postMessage);

module.exports = Router;
