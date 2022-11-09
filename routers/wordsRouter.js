const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Words = require('../views/Words');

const { Theme, Word } = require('../db/models');

router.get('/:id', async (req, res) => {
  try {
    const userInSession = req.session.user
    const { id } = req.params;
    const theme = await Theme.findOne({ where: { id }, raw: true });
    const wordsRaw = await Word.findAll({ include: Theme, where: { theme_id: req.params.id } });
    const words = wordsRaw.map((el) => el.dataValues);
    renderTemplate(Words, { userInSession, theme, words }, res);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
