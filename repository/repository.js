import models from '../models/index';

function getUser(id) {
  return models.User.findOne({ where: id }).then(user => user);
}

function allUsers() {
  return models.User.findAll().then(users => users);
}

function createUser(data) {
  return models.User.create(data).then(user => user);
}

function deleteUser(id) {
  return models.User.destroy({ where: id }).then('User deleted successfully');
}

module.exports = {
  getUser,
  allUsers,
  createUser,
  deleteUser,
};
