const Activity = require("../models/Activity");

// @route   GET /api/activities
// @desc    List all activities (public)
exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    res.json(activities);
  } catch (error) {
    console.error("Error fetching activities:", error);
    res.status(500).json({ message: "Server error" });
  }
};
