const db = require("mongoose");
require("dotenv").config();

db.set("strictQuery", true);

db.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

console.log(`Connection Status is : ${db.connection.readyState}`);

module.exports = db;
