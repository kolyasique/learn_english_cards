const express = require('express');

// Функции
const rendertemplate = require('../../lib/renderTemplate');
const registrationProcess = require('../../config/functions/registrationProcess');

// Views
const Registration = require('../../views/auth/Registration');

const { User } = require('../../db/models');

const registrationRouter = express.Router();

registrationRouter.get('/', (req, res) => {
  rendertemplate(Registration, null, res);
});

registrationRouter.post('/', async (req, res) => {
  const { login, password, password2 } = req.body;

  const successfulRegistration = await registrationProcess(req.body.login, req.body.password, req.body.password2);

  res.json(successfulRegistration);
});

module.exports = registrationRouter;