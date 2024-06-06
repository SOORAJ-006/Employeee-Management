const express = require('express');
const { getAllEmployees, postEmployee, updateEmployee, deleteEmployee, getEmployee, postImg } = require('../Controllers/Employees.Controller');
const upload = require('../Config/Multer');
const validateToken = require('../Middleware/Validate.Token');
const router = express.Router()


router.route("/")
.get(validateToken , getAllEmployees)
.post(validateToken , postEmployee)
router.route('/:id/image')
.post(validateToken , upload.single("image"),postImg)
router.route("/:id")
.put(validateToken , updateEmployee)
.delete(validateToken , deleteEmployee)
.get(validateToken , getEmployee)

module.exports = router