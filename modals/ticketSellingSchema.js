const mongoose = require("mongoose");




var ticketInfo = new mongoose.Schema({
    tickeFor:String,
    routeName:String,
    vehicleName:String,
    vehicleNumber:String,
    vehicleQuantity:String,
    dateForVehicle:String,
    passangerName:String,
    passangerNumber:String,
    passangerQuantity:String,
    passangerDate:String,
    timeSchedule:String,
    ferryName:String,
    price:String
})



module.exports = mongoose.model("ticketInfo",ticketInfo);