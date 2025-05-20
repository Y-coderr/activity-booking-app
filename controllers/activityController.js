const Activity = require("../models/Activity");
const Booking = require("../models/Booking");

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching activities", error });
  }
};


exports.bookActivity = async (req, res) => {
  try {
    const activityId = req.params.id;
    const userId = req.user.id;

    const booking = new Booking({ user: userId, activity: activityId });
    await booking.save();

    res.status(201).json({ message: "Activity booked successfully", booking });
  } catch (error) {
    res.status(500).json({ message: "Booking failed", error });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const userId = req.user.id;

    const bookings = await Booking.find({ user: userId }).populate("activity");

    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch bookings", error });
  }
};