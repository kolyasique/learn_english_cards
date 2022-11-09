/* eslint-disable camelcase */
const express = require('express');

const rendertemplate = require('../lib/renderTemplate');
// const loginCheck = require('../config/functions/loginCheck');

const CreateThemeForm = require('../views/CreateThemeForm');
const { Theme, Word } = require('../db/models');

const createThemeRouter = express.Router();

createThemeRouter.get('/', async (req, res) => {
  const themeList = await Theme.findAll();

  rendertemplate(createThemeRouter, null, res);
});

createThemeRouter.post('/', async (req, res) => {
  const { title } = req.body;
  const created_by = req.session.user.id;
  console.log(title);

  const createTheme = await Theme.create({ title, created_by });

  res.redirect('/')
});

module.exports = createThemeRouter;