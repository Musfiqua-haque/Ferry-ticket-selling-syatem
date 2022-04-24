const mongoose = require("mongoose");

var ferryname = new mongoose.Schema({
    ferryName:String
})


module.exports = mongoose.model("ferryName",ferryname);