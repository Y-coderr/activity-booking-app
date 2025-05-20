const express = require("express");
const router = express.Router();

const { getActivities, bookActivity, getMyBookings } = require("../controllers/activityController");
const authenticate = require("../middlewares/authMiddleware");

// Public: List activities
router.get("/", getActivities);

// Protected: Book an activity
router.post("/book/:id", authenticate, bookActivity);

router.get("/my-bookings", authenticate, getMyBookings);

module.exports = router;
