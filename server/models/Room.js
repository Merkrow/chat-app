const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  title: {
    type: String,
    default: '',
  },
  picture: String,
  users: [String],
});

module.exports = mongoose.model('Room', RoomSchema);
