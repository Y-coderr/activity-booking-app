const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes.js");
const activityRoutes = require("./routes/activityRoutes.js");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize express app
const app = express();
app.use(express.json()); // To parse JSON bodies

// Import Routes


const cors = require("cors");
app.use(cors());

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});


// Use Routes
app.use("/api/auth", authRoutes);
app.use("/api/activities", activityRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Activity Booking API ");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
