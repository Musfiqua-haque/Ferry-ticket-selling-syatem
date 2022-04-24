const mongoose=require("mongoose");


var routeName = new mongoose.Schema({
    routeName:String
})

module.exports= mongoose.model("routeName",routeName);