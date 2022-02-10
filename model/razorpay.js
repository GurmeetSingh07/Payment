const mongoose = require("../database/connection");

const schema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },

  amount: {
    type: Number,
    require: true,
  },

  currency: {
    type: String,
    require: true,
  },
  receipt: {
    type: String,
    require: true,
  },
  notes: [],
});

module.exports = new mongoose.model("razorData", schema);
