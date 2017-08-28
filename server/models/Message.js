const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  chatId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Message', MessageSchema);
