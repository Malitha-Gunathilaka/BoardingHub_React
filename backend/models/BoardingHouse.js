const mongoose = require("mongoose");

const boardingHouseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    roomType: {
      type: String,
      required: true,
    },
    availableRooms: {
      type: Number,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BoardingHouse = mongoose.model("BoardingHouse", boardingHouseSchema);

module.exports = BoardingHouse;
