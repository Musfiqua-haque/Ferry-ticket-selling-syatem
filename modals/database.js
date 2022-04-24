const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/ferryDatabase",{useNewUrlParser:true})
.then(()=>{console.log('connected');})
.catch((err)=>{console.log("not connected");})