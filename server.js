const express = require('express')
const connectDb = require('./Config/ConnectDb')
const path = require('path')
const dotenv = require('dotenv').config()
const app = express()

connectDb()
app.use(express.json())
app.use('/employees' , require('./Routes/Employees.Route'))
app.use('/users' , require('./Routes/Users.Route'))

// set EJS as the view Engine
app.set('view engine' , 'ejs')

// set the path for ejs
app.set('Views' , path.join(__dirname, 'Views'))

// middleware to connect the public 
app.use(express.static(path.join(__dirname, 'Public')));

app.use('/' , require('./Routes/View.Router'));

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`server running at ${port}`)
})  