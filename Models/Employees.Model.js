const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({

salutation:{
    type:String,
    required:[true, "please add salutation"]
},
firstName:{
    type:String,
    required:[true, "please add firstName"]
},
lastName:{
    type:String,
    required:[true, "please add lastName"]
},
email:{
    type:String,
    required:[true, "please add email"]
},
phone:{
    type:String,
    required:[true, "please add phone"]
},
address:{
    type:String,
    required:[true, "please add address"]
},
gender:{
    type:String,
    required:[true, "please add gender"]
},
qualifications:{
    type:String,
    required:[true, "please add qualifications"]
},
dob:{
    type:String,
    required:[true, "please add dob"]
},
password:{
    type:String,
    required:[true, "please add password"]
},
country:{
    type:String,
    required:[true, "please add country"]
},
state:{
    type:String,
    required:[true, "please add state"]
},
city:{
    type:String,
    required:[true, "please add salutation"]
},
pin:{
    type:String,
    required:[true, "please add city"]
},
username:{
    type:String,
    required:[true, "please add username"]
},
image:{
    type:String,
},
},{
timestamps: true
})

module.exports = mongoose.model('employees' , employeeSchema)