var mongoose = require("mongoose");
//database connection
const mlaburl = "mongodb://root:admin123@ds161295.mlab.com:61295/blog-site";
const localurl = "mongodb://localhost/test";

mongoose.connect(mlaburl);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  // we're connected!
  console.log("Database connected");
});

module.exports.db = db;
