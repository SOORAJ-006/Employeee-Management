const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../Models/Users.Model')

const validateToken = asyncHandler(async(req,res,next)=>{
    let token;
    if((req.headers.authorization || req.headers.Authorization) && req.headers.authorization.startsWith('Bearer')){
        try {
            // getting the token from the header
            token = req.headers.authorization.split(' ')[1]

            // verifying the token
            const decoded = jwt.verify(token , process.env.SECRET_TOKEN)

            // get user from the token
            req.user = await User.findById(decoded.id)

            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('not authorised')
        }
    }
})

module.exports = validateToken;