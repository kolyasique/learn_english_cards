const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Main = require('../views/Main');
const { Theme } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const userInSession = req.session.user;
    const arrThemes = await Theme.findAll();
    renderTemplate(Main, { arrThemes, userInSession }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
