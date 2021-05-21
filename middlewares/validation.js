const { celebrate, Joi } = require('celebrate');
const isURL = require('validator/lib/isURL');
const isEmail = require('validator/lib/isEmail');

const signInValidationBody = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().custom((value, helpers) => {
      if (isEmail(value)) {
        return value;
      }
      return helpers.message('Поле "email" заполнено не корректно');
    }).messages({
      'string.empty': 'поле "email" не может быть пустым',
      'any.required': 'поле "email" обязательно',
    }),
    password: Joi.string().required().messages({
      'string.empty': 'поле "password" не может быть пустым',
      'any.required': 'поле "password" обязательно',
      'string.base': 'данные "password" должны быть строкой',
    }),
  }),
});

const signUpValidationBody = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().custom((value, helpers) => {
      if (isEmail(value)) {
        return value;
      }
      return helpers.message('Поле "email" заполнено не корректно');
    }).messages({
      'string.empty': 'поле "email" не может быть пустым',
      'any.required': 'поле "email" обязательно',
    }),
    name: Joi.string().required().min(2).max(30)
      .messages({
        'any.required': 'поле "name" обязательно',
        'string.base': 'данные в поле "name" должны быть строкой',
        'string.min': 'поле "name" должно содержать не менее 2 символов',
        'string.max': 'поле "name" должно содержать не более 30 символов',
        'string.empty': 'поле "name" не может быть пустым',
      }),
    password: Joi.string().required().messages({
      'string.empty': 'поле "password" не может быть пустым',
      'any.required': 'поле "password" обязательно',
      'string.base': 'данные "password" должны быть строкой',
    }),
  }),
});

const userValidationBody = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().custom((value, helpers) => {
      if (isEmail(value)) {
        return value;
      }
      return helpers.message('Поле "email" заполнено не корректно');
    }).messages({
      'string.empty': 'поле "email" не может быть пустым',
      'any.required': 'поле "email" обязательно',
    }),
    name: Joi.string().required().min(2).max(30)
      .messages({
        'any.required': 'поле "name" обязательно',
        'string.base': 'данные в поле "name" должны быть строкой',
        'string.min': 'поле "name" должно содержать не менее 2 символов',
        'string.max': 'поле "name" должно содержать не более 30 символов',
        'string.empty': 'поле "name" не может быть пустым',
      }),
  }),
});

const movieValidationBody = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required().messages({
      'any.required': 'поле "country" обязательно',
      'string.base': 'данные в поле "country" должны быть строкой',
      'string.empty': 'поле "country" не может быть пустым',
    }),
    director: Joi.string().required().messages({
      'any.required': 'поле "director" обязательно',
      'string.base': 'данные в поле "director" должны быть строкой',
      'string.empty': 'поле "director" не может быть пустым',
    }),
    duration: Joi.number().required().messages({
      'any.required': 'поле "duration" обязательно',
      'string.base': 'данные в поле "duration" должны быть number',
      'string.empty': 'поле "duration" не может быть пустым',
    }),
    year: Joi.string().required().messages({
      'any.required': 'поле "year" обязательно',
      'string.base': 'данные в поле "year" должны быть строкой',
      'string.empty': 'поле "year" не может быть пустым',
    }),
    description: Joi.string().required().messages({
      'any.required': 'поле "description" обязательно',
      'string.base': 'данные в поле "description" должны быть строкой',
      'string.empty': 'поле "description" не может быть пустым',
    }),
    image: Joi.string().required().custom((value, helpers) => {
      if (isURL(value)) {
        return value;
      }
      return helpers.message('Поле "image" заполнено не корректно');
    }).messages({
      'string.empty': 'поле "image" не может быть пустым',
      'any.required': 'поле "image" обязательно',
    }),
    trailer: Joi.string().required().custom((value, helpers) => {
      if (isURL(value)) {
        return value;
      }
      return helpers.message('Поле "trailer" заполнено не корректно');
    }).messages({
      'string.empty': 'поле "trailer" не может быть пустым',
      'any.required': 'поле "trailer" обязательно',
    }),
    nameRU: Joi.string().required().messages({
      'string.empty': 'поле "nameRU" не может быть пустым',
      'any.required': 'поле "nameRU" обязательно',
    }),
    nameEN: Joi.string().required().messages({
      'string.empty': 'поле "nameEN" не может быть пустым',
      'any.required': 'поле "nameEN" обязательно',
    }),
    thumbnail: Joi.string().required().custom((value, helpers) => {
      if (isURL(value)) {
        return value;
      }
      return helpers.message('Поле "thumbnail" заполнено не корректно');
    }).messages({
      'string.empty': 'поле "thumbnail" не может быть пустым',
      'any.required': 'поле "thumbnail" обязательно',
    }),
    movieId: Joi.number().required()
      .messages({
        'any.required': 'movieId обязательое поле',
        'string.empty': 'поле "movieId" не может быть пустым',
      }),
  }),
});

const movieValidationParams = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().hex().length(24).messages({
      'string.length': 'movieId должно состоять из 24 символов',
      'string.hex': 'movieId должно состоять из 24 hex символов',
    }),
  }),
});

module.exports = {
  signInValidationBody,
  signUpValidationBody,
  userValidationBody,
  movieValidationBody,
  movieValidationParams,
};
