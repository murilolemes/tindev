const express = require('express');
const devController = require('./controllers/devController');

const routes = express.Router();

routes.post('/devs' , devController.store);

module.exports = routes;