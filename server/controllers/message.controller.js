const { Message } = require('../models');

const create = (data, callback) => {
  const newMessage = new Message(data);
  newMessage.save(callback);
}

const find = (data, callback) => {
	Message.find(data, callback);
}

const findOne = (data, callback) => {
	Message.findOne(data, callback);
}

const findByUser = (userId, callback) => {
  Message.find({ sender: userId }, callback);
}

const findLast = (callback) => {
  Message.findOne({}, {}, { sort: { 'created_at': -1 } }, callback);
}

const findById = (id, callback) => {
	Message.findById(id, callback);
}

const updateMessage = (id, data, callback) => {
  Message.update({ _id: id, }, data, callback);
}

const deleteByRoomId = (id, callback) => {
  Message.find({ chatId: id }).remove(callback);
}

module.exports = {
  create,
  find,
  findOne,
  findLast,
  findById,
  updateMessage,
}
