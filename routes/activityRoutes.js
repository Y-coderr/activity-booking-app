const express = require("express");
const router = express.Router();

// Dummy test route
router.get("/test", (req, res) => {
  res.send("Activity route working!");
});

module.exports = router;
