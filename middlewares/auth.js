const jwt = require('jsonwebtoken');
require('dotenv').config();
const { ErrorAutorization } = require('../errors/ErrorAutorization');

const auth = (req, res, next) => {
  const { NODE_ENV, JWT_SECRET } = process.env;
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new ErrorAutorization('Необходима авторизация');
  }
  const token = authorization.replace('Bearer ', '');

  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    throw new ErrorAutorization('Необходима авторизация');
  }

  req.user = payload;
  return next();
};

module.exports = {
  auth,
};
