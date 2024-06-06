const express = require('express')
const validateToken = require('../Middleware/Validate.Token')
const viewController = require('../Controllers/View.Controller')
const router = express.Router()


router.route('/home').get(validateToken ,viewController.renderindex )

module.exports = router