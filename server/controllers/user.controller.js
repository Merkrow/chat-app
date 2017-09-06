const { User } = require('../models');

const create = (data, callback) => {
  const newUser = new User(data);
  newUser.save(callback);
}

const find = (data, callback) => {
	User.find(data, callback);
}

const findOne = (data, callback) => {
	User.findOne(data, callback);
}

const findById = (id, callback) => {
	User.findById(id, callback);
}

const updateUser = (id, data, callback) => {
  User.findByIdAndUpdate(id, { $set: data }, { upsert: true, new: true }, callback);
}

const deleteUser = (id, callback) => {
  User.deleteOne({ _id: id }, callback);
}

const findByUsername = (username, callback) => {
  User.find({ username: { $regex: username, $options: "i" } }, callback);
}

const addFriend = (userId, friendId, callback) => {
  User.findByIdAndUpdate(userId, { $push: { friends: friendId } }, { upsert: true, new: true }, callback);
}

module.exports = {
  create,
  find,
  findOne,
  findById,
  updateUser,
  deleteUser,
  findByUsername,
  addFriend,
}
