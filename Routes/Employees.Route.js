const express = require('express');
const { getAllEmployees, postEmployee, updateEmployee, deleteEmployee, getEmployee, postImg } = require('../Controllers/Employees.Controller');
const upload = require('../Config/Multer');
const router = express.Router()


router.route("/").get(getAllEmployees).post(postEmployee)
router.route('/:id/image').post(upload.single("image"),postImg)
router.route("/:id").put(updateEmployee).delete(deleteEmployee).get(getEmployee)

module.exports = router