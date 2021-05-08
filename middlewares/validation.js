const { celebrate, Joi } = require('celebrate');

const signInValidationBody = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().messages({
      'string.empty': 'поле "email" не может быть пустым',
      'any.required': 'поле "email" обязательно',
      'string.base': 'данные в строке "email" должны быть строкой',
      'string.email': 'не корректный емаил',
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
    email: Joi.string().required().email().messages({
      'string.empty': 'поле "email" не может быть пустым',
      'any.required': 'поле "email" обязательно',
      'string.base': 'данные в строке "email" должны быть строкой',
      'string.email': 'не корректный емаил',
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
    email: Joi.string().required().email().messages({
      'string.empty': 'поле "email" не может быть пустым',
      'any.required': 'поле "email" обязательно',
      'string.base': 'данные в строке "email" должны быть строкой',
      'string.email': 'не корректный емаил',
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
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(true),
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
    image: Joi.string().required().regex(/https?:\/\/w*[\da-z\W]+#?/).messages({
      'string.empty': 'поле "image" не может быть пустым',
      'any.required': 'поле "image" обязательно',
      'string.pattern.base': 'в поле "image" не корректный URL',
    }),
    trailer: Joi.string().required().regex(/https?:\/\/w*[\da-z\W]+#?/).messages({
      'string.empty': 'поле "trailer" не может быть пустым',
      'any.required': 'поле "trailer" обязательно',
      'string.pattern.base': 'в поле "trailer" не корректный URL',
    }),
    nameRU: Joi.string().required().regex(/^[а-яА-Я0-9]+$/).messages({
      'string.empty': 'поле "nameRU" не может быть пустым',
      'any.required': 'поле "nameRU" обязательно',
      'string.pattern.base': ' в поле "nameRU" должны использоваться кириллические символы',
    }),
    nameEN: Joi.string().required().regex(/^[a-zA-Z0-9]+$/).messages({
      'string.empty': 'поле "nameEN" не может быть пустым',
      'any.required': 'поле "nameEN" обязательно',
      'string.pattern.base': ' в поле "nameEN" должны использоваться латинские символы',
    }),
    thumbnail: Joi.string().required().regex(/https?:\/\/w*[\da-z\W]+#?/).messages({
      'string.empty': 'поле "thumbnail" не может быть пустым',
      'any.required': 'поле "thumbnail" обязательно',
      'string.pattern.base': 'в поле "thumbnail" не корректный URL',
    }),
    movieId: Joi.string().required().alphanum().length(24)
      .messages({
        'any.required': 'movieId обязательое поле',
        'string.empty': 'поле "movieId" не может быть пустым',
        'string.length': 'поле "movieId" должно состоять из 24 символов',
      }),
    headers: Joi.object().keys({
      authorization: Joi.string().required(),
    }).unknown(true),
  }),
});

const movieValidationParams = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().alphanum().length(24).messages({
      'string.length': 'movieId должно состоять из 24 символов',
    }),
  }),
  headers: Joi.object().keys({
    authorization: Joi.string().required(),
  }).unknown(true),
});

module.exports = {
  signInValidationBody,
  signUpValidationBody,
  userValidationBody,
  movieValidationBody,
  movieValidationParams,
};
