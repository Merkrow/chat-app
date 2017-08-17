const { User } = require('../models');

const create = (data, callback) => {
  const newUser = new User(data);
  newRoom.save(callback);
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
  User.update({ _id: id, }, data, callback);
}

module.exports = {
  create,
  find,
  findOne,
  findById,
  updateUser,
}
