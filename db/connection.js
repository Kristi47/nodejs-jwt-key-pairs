let mongoose = require("mongoose");

//this tells mongoose that we will use Promises and connect to DB
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser: true});

module.exports = {mongoose}