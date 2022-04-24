const mongoose = require("mongoose");

var scheduleInfo = new mongoose.Schema({
    ferryName:String,
    ferryRoute:String,
    ferryTime:String,
    dateInput:Date,
    space:Number
})

module.exports = mongoose.model("ScheduleInfo",scheduleInfo);