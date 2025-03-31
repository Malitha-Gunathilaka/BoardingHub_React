const BoardingHouse = require("../models/BoardingHouse");

// Create a boarding house
const createBoardingHouse = async (req, res) => {
  const { name, location, price, roomType, availableRooms } = req.body;

  try {
    const newBoardingHouse = new BoardingHouse({
      name,
      location,
      price,
      roomType,
      availableRooms,
      owner: req.user._id, // Set owner to the authenticated user
    });

    const boardingHouse = await newBoardingHouse.save();
    res.status(201).json(boardingHouse);
  } catch (error) {
    res.status(500).json({ message: "Failed to create boarding house" });
  }
};

// Get all boarding houses
const getBoardingHouses = async (req, res) => {
  try {
    const boardingHouses = await BoardingHouse.find();

    res.status(200).json(boardingHouses);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch boarding houses" });
  }
};

module.exports = { createBoardingHouse, getBoardingHouses };
