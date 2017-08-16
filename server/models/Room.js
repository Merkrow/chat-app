const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  messages: {
    type: [
      {
        date: {
          type: Date,
          required: true,
        },
        message: {
          type: String,
          required: true,
        },
      }
    ],
  },
  title: {
    type: String,
  },
});

module.exports = mongoose.model('Room', RoomSchema);
