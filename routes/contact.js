const contact = require('express').Router();
const contactController = require('../controllers/contact');
const config = require('config');

contact.get('/get', contactController.get);

contact.post('/add', contactController.add);

module.exports = contact;
