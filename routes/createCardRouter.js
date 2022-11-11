/* eslint-disable camelcase */
const express = require('express');

const rendertemplate = require('../lib/renderTemplate');
// const loginCheck = require('../config/functions/loginCheck');

const CreateCardForm = require('../views/CreateCardForm');
const { Theme, Word, Wordstatus} = require('../db/models');

const createCardRouter = express.Router();

createCardRouter.get('/', async (req, res) => {
    const userInSession = req.session.user
  const themeList = await Theme.findAll();

  rendertemplate(CreateCardForm, { themeList, userInSession}, res);
});

createCardRouter.post('/', async (req, res) => {
  const { word, translation, theme_id } = req.body;
  const created_by = req.session.user.id;

  console.log(word, translation, theme_id);

  const createWord = await Word.create({ word, translation, theme_id, created_by });
  const createWordStatus = await Wordstatus.create({user_id: created_by, word_id: createWord.id, theme_id, status:false})

  res.redirect('/');
});

module.exports = createCardRouter;
