const express = require("express");
const router = express.Router();
const { activityBookingValidation } = require("../middlewares/validationMiddleware");
const { getActivities, bookActivity, getMyBookings , createActivity} = require("../controllers/activityController");
const authenticate = require("../middlewares/authMiddleware");

router.get("/activities", getActivities);

router.post("/activities", createActivity);

router.post("/book/:id", authenticate, bookActivity);

router.get("/my-bookings", authenticate, getMyBookings);

router.post("/book", authenticate, activityBookingValidation, (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  next();
}, bookActivity);

module.exports = router;
