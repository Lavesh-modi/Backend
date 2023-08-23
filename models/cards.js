const mongoose = require("mongoose");

const cardsSchema = new mongoose.Schema({
  Role: {
    type: String,
    required: true,
    maxLength: 50,
  },
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  About: {
    type: String,
    required: true,
    maxLength: 500,
  },


  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Cards", cardsSchema);
