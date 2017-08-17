const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  title: {
    type: String,
  },
  users: [String],
});

module.exports = mongoose.model('Room', RoomSchema);
