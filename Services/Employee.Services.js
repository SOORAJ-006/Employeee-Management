const Employees = require('../Models/Employees.Model')

// get all Employees
    const getEmployees = async(req, res)=>{
        const employees = await Employees.find()
        res.status(200).json(employees)
    }

    module.exports = {getEmployees}