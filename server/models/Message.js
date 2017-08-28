const mongoose = require('mongoose');
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
    type: Object,
    required: true,
  },
  chatId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Message', MessageSchema);
