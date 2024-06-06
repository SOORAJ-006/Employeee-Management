const express = require('express')
const connectDb = require('./Config/ConnectDb')
const dotenv = require('dotenv').config()
const app = express()

connectDb()
app.use(express.json())
app.use('/employees' , require('./Routes/Employees.Route'))
app.use('/users' , require('./Routes/Users.Route'))

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`server running at ${port}`)
})  