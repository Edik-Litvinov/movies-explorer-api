const routerUsers = require('express').Router();
const { getUserData, updateProfile } = require('../controllers/users');
const { userValidationBody } = require('../middlewares/validation');

routerUsers.get('/me', getUserData);
routerUsers.patch('/me', userValidationBody, updateProfile);

module.exports = {
  routerUsers,
};
