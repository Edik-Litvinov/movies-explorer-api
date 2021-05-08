const { isCelebrateError } = require('celebrate');

const celebrateErrorsHandler = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    let errorBody;
    if (err.details.get('body')) {
      errorBody = err.details.get('body');
    } else if (err.details.get('params')) {
      errorBody = err.details.get('params');
    } else if (err.details.get('headers')) {
      errorBody = err.details.get('headers');
    }
    return res.status(400).send({ message: errorBody.message });
  }
  return next(err);
};
module.exports = {
  celebrateErrorsHandler,
};
