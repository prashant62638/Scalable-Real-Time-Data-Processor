const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  value: String,
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  }
});

module.exports = mongoose.model("Data", dataSchema);
