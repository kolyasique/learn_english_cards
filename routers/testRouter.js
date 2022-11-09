const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Test = require('../views/Test');

const { Theme, Word } = require('../db/models');

router.get('/:id', async (req, res) => {
  try {
    const userInSession = req.session.user;
    const { id } = req.params;
    const theme = await Theme.findOne({ where: { id }, raw: true });
    const wordsRaw = await Word.findAll({ include: Theme, where: { theme_id: req.params.id } });
    const words = wordsRaw.map((el) => el.dataValues);
    console.log(words, 'это вордс++++++++++++++++++++++++')
    renderTemplate(Test, { theme, words, userInSession }, res);
  } catch (error) {
    console.log(error);
  }
});

router.post('/:id', async (req, res) => {
  const { answer } = req.body;
  try {
    const findWord = await Word.findOne({ where: { id: +req.params.id } });
    if (findWord) {
      if (answer === findWord.translation) {
        res.json({ answerCorrect: 'Ответ верный' });
      } else {
        res.json({ answerNotCorrect: 'Ответ не верный' });
      }
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
