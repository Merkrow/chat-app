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

const updateRoom = (id, data, callback) => {
  Room.update({ _id: id, }, { $set: data }, { upsert:true }, callback);
}

const deleteRoom = (id, callback) => {
  Room.deleteOne({ _id: id }, callback);
}

const findTwoUsersRoom = (ids, callback) => {
  Room.findOne({ users: { $all: ids } }, callback);
}

module.exports = {
  create,
  find,
  findOne,
  findById,
  deleteRoom,
  findTwoUsersRoom,
}

// { $and: [{ users: { $elemMatch: { userId: users[0]._id }}}, { users: { $elemMatch: { userId: users[1]._id }}}]
