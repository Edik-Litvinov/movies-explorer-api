const jwt = require('jsonwebtoken');
require('dotenv').config();
const UserModal = require('../models/user');
const { errorHandler } = require('../errors/errorHandler');

const login = (req, res, next) => {
  const { NODE_ENV, JWT_SECRET } = process.env;
  const { email, password } = req.body;
  UserModal.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
      res.send({ token });
    })
    .catch((err) => errorHandler(err, next));
};

module.exports = {
  login,
};
