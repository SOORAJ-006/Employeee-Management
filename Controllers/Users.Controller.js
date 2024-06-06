const bcrypt = require('bcrypt')
const asyncHandler = require("express-async-handler");
const User = require('../Models/Users.Model')
const jwt = require('jsonwebtoken')

/**
 * @description User Register
 * @route POST /users/register
 * @access public
 */
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    console.log(`username: ${username} , email : ${email} , password: ${password}`)

    if (!username) {
        res.status(400)
        throw new Error('Username is required')
    }
    if (!email) {
        res.status(400)
        throw new Error('email is required')
    }
    if (!password) {
        res.status(400)
        throw new Error('password is required')
    }
    const userAvailable = await User.findOne({ email })
    if (userAvailable) {
        res.status(400)
        throw new Error('email already registered')
    } else {
        // hashing password
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(`hashedPassword : ${hashedPassword}`);

        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })
        res.status(201).json({ message: 'User Registration' })
    }

});

/**
 * @description User Login
 * @route POST /users/login
 * @access public
 */
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email) {
        res.status(400).json({ message: "email is required" })
        throw new Error('email is required')
    }
    if (!password) {
        res.status(400).json({ message: "password is required" })
        throw new Error('password is required')
    }

    // find the user with email in  Db
    const user = await User.findOne({ email })

    // comparing the hashed password and checking for user

    if (user && (await bcrypt.compare(password, user.password))) {

        const payload = {username:user.username,email:user.email,id:user.id}

        const accessToken = jwt.sign(payload,process.env.SECRET_TOKEN,{expiresIn:'15m'})
        res.status(200).json({accessToken})
    } else {
        res.status(400).json({ message: 'User Not Found' })
        throw new Error('User Not Found')
    }

});

/**
 * @description Current User
 * @route POST /users/current
 * @access private
 */
const currentUser = asyncHandler((req, res) => {
    res.status(200).json({ message: 'Current User' })
});

module.exports = { registerUser, loginUser, currentUser }