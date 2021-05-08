const bcrypt = require('bcryptjs');
const userModel = require('../models/user');
const { EmailAlreadyUse } = require('../errors/EmailAlreadyUse');

const registrationUser = (req, res, next) => {
  const { email, name, password } = req.body;
  bcrypt.hash(password, 7)
    .then((hash) => {
      userModel.create({ email, name, password: hash })
        .then(() => res.status(200).send({ message: 'Регистрация прошла успешно' }))
        .catch((err) => {
          if (err.name === 'MongoError' || err.code === '11000') {
            const emailConflict = new EmailAlreadyUse('Пользователь с таким емайлом уже существует');
            next(emailConflict);
          } else {
            next(err);
          }
        });
    });
};

module.exports = {
  registrationUser,
};
