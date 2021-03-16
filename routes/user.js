const user = require('express').Router();
const userController = require('../controllers/user');
const config = require('config');

user.get('/get', userController.get);

user.post('/add', userController.add);

module.exports = user;
