const UserModal = require('../models/user');
const { ErrorNotFound } = require('../errors/ErrorNotFound');
const { errorHandler } = require('../errors/errorHandler');
const { EmailAlreadyUse } = require('../errors/EmailAlreadyUse');

const getUserData = (req, res, next) => {
  const { _id } = req.user;
  UserModal.findById(_id)
    .orFail(() => {
      throw new ErrorNotFound('Такого пользователя нет');
    })
    .then((user) => {
      res.send(user);
    })
    .catch(next);
};

const updateProfile = (req, res, next) => {
  const { _id } = req.user;
  const { email, name } = req.body;
  UserModal.findByIdAndUpdate(_id, { email, name },
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
    })
    .orFail(() => {
      throw new ErrorNotFound('Такого пользовотеля в базе нет');
    })
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      throw new EmailAlreadyUse('Такой емаил уже используется');
    })
    .catch((err) => errorHandler(err, next));
};

module.exports = {
  getUserData,
  updateProfile,
};
