const { body } = require("express-validator");

exports.registerValidation = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("phone").notEmpty().withMessage("Phone number is required"),
  body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),
];

exports.loginValidation = [
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

exports.activityBookingValidation = [
  body("activityId").notEmpty().withMessage("Activity ID is required"),
];
