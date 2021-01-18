const express = require("express");

// const { dialogflowGateway, dialogflowWebhook } = require('./app/controllers/dialogflowController');
const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');

const userController = new UserController();
const sessionController = new SessionController();

const routes = express.Router();

routes.post('/users', userController.store);
routes.post('/sessions', sessionController.store);
// routes.post('/dialogflow', dialogflowGateway);
// routes.post('/webhook', dialogflowWebhook);

module.exports = routes;