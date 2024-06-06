const asyncHandler = require('express-async-handler')
// const Employee = require('../models/Employees.Model')

exports.renderindex = asyncHandler( async (req,res) => {
    // const employees  =  await Employee.find()
    res.render("index")
})