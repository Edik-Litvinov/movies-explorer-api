const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /https?:\/\/w*[\da-z\W]+#?/.test(v),
      message: (props) => `${props.value} введенный URL не верный`,
    },
  },
  trailer: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /https?:\/\/w*[\da-z\W]+#?/.test(v),
      message: (props) => `${props.value} введенный URL не верный`,
    },
  },
  thumbnail: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /https?:\/\/w*[\da-z\W]+#?/.test(v),
      message: (props) => `${props.value} введенный URL не верный`,
    },
  },
  owner: {
    type: mongoose.ObjectId,
    required: true,
  },
  movieId: {
    type: mongoose.ObjectId,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
