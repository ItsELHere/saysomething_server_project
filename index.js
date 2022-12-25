//  Server Core
const express = require("express");

// Package
const bodyParser = require("body-parser");
const cors = require("cors");

//  Configuration
const Server = new express();
const port = 8080;

Server.use(cors());
Server.use(bodyParser.urlencoded({ extended: true }));

//  Router
const MessageRouter = require("./router/message.js");

Server.use(MessageRouter);

//  Server listen

Server.listen(port, (err) => {
  if (!err) {
    console.log(`Server was connected in ${port}`);
  } else {
    console.log("Server cant connected");
  }
});
