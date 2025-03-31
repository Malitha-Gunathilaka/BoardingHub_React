const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const boardingRoutes = require("./routes/boardingRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json()); // Middleware for JSON
app.use(cors()); // Enable CORS

app.get("/", (req, res) => {
  res.send("BoardingHub API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api/users", userRoutes); // User routes
app.use("/api/boardings", boardingRoutes); // Boarding house routes
app.use("/api/bookings", bookingRoutes); // Booking routes
