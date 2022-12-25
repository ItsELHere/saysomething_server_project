const messageModel = require("../model/message.model.js");

const getMessage = (req, res) => {
  messageModel.find((err, response) => {
    if (err && !response) {
      res.status(400).json({
        msg: "cant get the data",
        detail: err,
      });
    } else {
      res.status(200).json(response);
    }
  });
};

const postMessage = (req, res) => {
  let { name, message } = req.body;
  let time = new Date().toDateString();

  console.log(time);
  if (!name) {
    name = "Anonymous";
  }
  let newMessage = new messageModel({
    name: name,
    message: message,
    createdAt: time,
  });

  newMessage.save((err, response) => {
    if (!err) {
      res.status(201).json({
        name: response.name,
        message: response.message,
        createdAt: response.createdAt,
      });
    } else {
      res.status(400).json({
        msg: "cant post the data",
        detail: err,
      });
    }
  });
};

module.exports = { getMessage, postMessage };
