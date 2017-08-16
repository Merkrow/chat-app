const { Room } = require('../models');

const create = (data, callback) => {
  const newRoom = new Room(data);
  newRoom.save(callback);
}

const find = (data, callback) => {
	Room.find(data, callback);
}

const findOne = (data, callback) => {
	Room.findOne(data, callback);
}

const findById = (id, callback) => {
	Room.findById(id, callback);
}

const addMessage = (id, message, callback) => {
  Room.update({ _id: id, }, { $push: { messages: message } }, callback);
}

module.exports = {
  create,
  find,
  findOne,
  findById,
  addMessage,
}
