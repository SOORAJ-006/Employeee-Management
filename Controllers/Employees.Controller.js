const asyncHandler = require("express-async-handler");
const Employees = require("../Models/Employees.Model");
const { getEmployees } = require("../Services/Employee.Services");

/**
 * @description Get All Employee
 * @route GET /employees
 * @access public
 */
const getAllEmployees = asyncHandler(getEmployees);

/**
 * @description Get Employee
 * @route GET /employees/:id
 * @access public
 */
const getEmployee = asyncHandler(async (req, res) => {
  const employees = await Employees.findById(req.params.id);
  res.status(200).json(employees);
});

/**
 * @description Post Employee
 * @route POST /employees/:id
 * @access public
 */
const postEmployee = asyncHandler(async (req, res) => {
  const {
    salutation,
    firstName,
    lastName,
    email,
    phone,
    address,
    gender,
    qualifications,
    dob,
    password,
    country,
    state,
    city,
    pin,
    username,
  } = req.body;

  if (!salutation) {
    res.status(400);
    throw new Error("salutation is required");
  }
  if (!firstName) {
    res.status(400);
    throw new Error("firstName is required");
  }
  if (!lastName) {
    res.status(400);
    throw new Error("lastName is required");
  }
  if (!email) {
    res.status(400);
    throw new Error("email is required");
  }
  if (!phone) {
    res.status(400);
    throw new Error("phone is required");
  }
  if (!address) {
    res.status(400);
    throw new Error("address is required");
  }
  if (!gender) {
    res.status(400);
    throw new Error("gender is required");
  }
  if (!qualifications) {
    res.status(400);
    throw new Error("qualifications is required");
  }
  if (!dob) {
    res.status(400);
    throw new Error("dob is required");
  }
  if (!password) {
    res.status(400);
    throw new Error("password is required");
  }
  if (!country) {
    res.status(400);
    throw new Error("country is required");
  }
  if (!state) {
    res.status(400);
    throw new Error("state is required");
  }
  if (!city) {
    res.status(400);
    throw new Error("city is required");
  }
  if (!pin) {
    res.status(400);
    throw new Error("pin is required");
  }
  if (!username) {
    res.status(400);
    throw new Error("username is required");
  }

  const employee = await Employees.create({
    salutation,
    firstName,
    lastName,
    email,
    phone,
    address,
    gender,
    qualifications,
    dob,
    password,
    country,
    state,
    city,
    pin,
    username,
  });

  console.log("the req body is :", req.body);
  res.json(employee);
});

// image----------------------------------------------------------------

const postImg = asyncHandler(async (req, res) => {
  if (req.file) {
    const imgPath = `Public/uploads/${req.file.filename}`;
    const employee = await Employees.findByIdAndUpdate(
      req.params.id,
      { image: imgPath },
      { new: true }
    );
  }
});

/**
 * @description Put Employee
 * @route PUT /employees
 * @access public
 */
const updateEmployee = asyncHandler(async (req, res) => {
  const {
    salutation,
    firstName,
    lastName,
    email,
    phone,
    address,
    gender,
    qualifications,
    dob,
    password,
    country,
    state,
    city,
    pin,
    username,
  } = req.body;

  if (!salutation) {
    res.status(400);
    throw new Error("salutation is required");
  }
  if (!firstName) {
    res.status(400);
    throw new Error("firstName is required");
  }
  if (!lastName) {
    res.status(400);
    throw new Error("lastName is required");
  }
  if (!email) {
    res.status(400);
    throw new Error("email is required");
  }
  if (!phone) {
    res.status(400);
    throw new Error("phone is required");
  }
  if (!address) {
    res.status(400);
    throw new Error("address is required");
  }
  if (!gender) {
    res.status(400);
    throw new Error("gender is required");
  }
  if (!qualifications) {
    res.status(400);
    throw new Error("qualifications is required");
  }
  if (!dob) {
    res.status(400);
    throw new Error("dob is required");
  }
  if (!password) {
    res.status(400);
    throw new Error("password is required");
  }
  if (!country) {
    res.status(400);
    throw new Error("country is required");
  }
  if (!state) {
    res.status(400);
    throw new Error("state is required");
  }
  if (!city) {
    res.status(400);
    throw new Error("city is required");
  }
  if (!pin) {
    res.status(400);
    throw new Error("pin is required");
  }
  if (!username) {
    res.status(400);
    throw new Error("username is required");
  }
  const employee = await Employees.findById(req.params.id);
  if (!employee) {
    res.status(404);
    throw new Error("employee not found");
  }

  const updatedEmployee = await Employees.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(updatedEmployee);
});

/**
 * @description Delete Employee
 * @route DELETE /employees
 * @access public
 */
const deleteEmployee = asyncHandler(async (req, res) => {
  await Employees.deleteOne();
  res.json({ message: "delete emnployee" });
});

module.exports = {
  getAllEmployees,
  getEmployee,
  postEmployee,
  updateEmployee,
  deleteEmployee,
  postImg,
};
