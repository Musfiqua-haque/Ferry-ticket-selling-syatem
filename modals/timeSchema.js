const mongoose=require("mongoose");


var timeSchedule = new mongoose.Schema({
    timeSchedule:String
})

module.exports= mongoose.model("timeSchedule",timeSchedule);