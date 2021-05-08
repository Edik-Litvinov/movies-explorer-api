const { BadRequest } = require('./BadRequest');

const errorHandler = (err, next) => {
  if (err.name === 'ValidationError' || err.name === 'CastError') {
    const validationError = new BadRequest('Не корректно введены данные');
    next(validationError);
  } else {
    next(err);
  }
};

module.exports = {
  errorHandler,
};
