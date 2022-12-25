const { Schema } = require("mongoose");

const db = require("../config/db.js");

const messageSchema = new Schema(
  {
    name: {
      type: String,
      isRequire: true,
    },
    message: {
      type: String,
      isRequire: true,
    },
    createdAt: {
      type: String,
      isRequire: true,
    },
  },
  {
    freezeTimeStamp: false,
  }
);

const messageModel = db.model("message", messageSchema, "message");

module.exports = messageModel;
