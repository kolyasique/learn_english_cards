/* eslint-disable camelcase */
const express = require('express');

const rendertemplate = require('../lib/renderTemplate');
// const loginCheck = require('../config/functions/loginCheck');

const CreateCardForm = require('../views/CreateCardForm');
const { Theme, Word } = require('../db/models');

const createCardRouter = express.Router();

createCardRouter.get('/', async (req, res) => {
  const themeList = await Theme.findAll();

  rendertemplate(CreateCardForm, { themeList }, res);
});

createCardRouter.post('/', async (req, res) => {
  const { word, translation, theme_id } = req.body;
  const created_by = req.session.user.id;
  console.log(word, translation, theme_id);

  const createWord = await Word.create({ word, translation, theme_id, created_by });

  res.redirect('/')
});

module.exports = createCardRouter;
