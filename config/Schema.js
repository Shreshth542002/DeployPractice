const mongoose = require('mongoose');

const readingSchema = new mongoose.Schema({
    heart_rate:{
        type: Number,
        required: true,
    },
    pulse_rate:{
        type: Number,
        required: true,
    }
  },
  // add other fields as needed
);

const userSchema = new mongoose.Schema({
  assigned: {
    type: Boolean,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  readings: [readingSchema],
});
const User = mongoose.model('collection0', userSchema);

module.exports = User;