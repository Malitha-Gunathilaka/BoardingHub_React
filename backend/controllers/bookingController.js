const Booking = require("../models/Booking");

// Create a new booking
const createBooking = async (req, res) => {
  const { boardingHouse, checkInDate, checkOutDate } = req.body;

  try {
    const booking = new Booking({
      user: req.user._id,
      boardingHouse,
      checkInDate,
      checkOutDate,
      status: "pending",
    });

    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get bookings for a user
const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate("boardingHouse");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createBooking, getUserBookings };
