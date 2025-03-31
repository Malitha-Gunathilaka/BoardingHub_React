const express = require("express");
const BoardingHouse = require("../models/BoardingHouse");

const router = express.Router();

// Get all available boarding houses with filters
router.get("/", async (req, res) => {
  try {
    const { location, minPrice, maxPrice, roomType, available } = req.query;

    let filters = {};

    if (location) filters.location = { $regex: location, $options: "i" }; // Case-insensitive search
    if (minPrice) filters.price = { ...filters.price, $gte: Number(minPrice) };
    if (maxPrice) filters.price = { ...filters.price, $lte: Number(maxPrice) };
    if (roomType) filters.roomType = roomType;
    if (available === "true") filters.availableRooms = { $gt: 0 };

    const houses = await BoardingHouse.find(filters);
    res.json(houses);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
