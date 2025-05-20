const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const { registerValidation, loginValidation } = require("../middlewares/validationMiddleware");
const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
};

router.post("/register",registerValidation,validate,registerUser);
router.post("/login", loginValidation, validate, loginUser);

module.exports = router;
