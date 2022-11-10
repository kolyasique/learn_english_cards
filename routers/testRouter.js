const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Test = require('../views/Test');

const { Theme, Word, TestStatus } = require('../db/models');

router.get('/:id', async (req, res) => {
  try {
    const userInSession = req.session.user;
    const { id } = req.params;
    const theme = await Theme.findOne({ where: { id }, raw: true });
    const wordsRaw = await Word.findAll({ where: { theme_id: id } });
    const words = wordsRaw.map((el) => el.dataValues);
    console.log(words, 'это вордс++++++++++++++++++++++++');
    renderTemplate(Test, { theme, words, userInSession }, res);
  } catch (error) {
    console.log(error);
  }
});

router.post('/:id', async (req, res) => {
  const { user } = req.session;
  // console.log('user==>', user);
  const { answer } = req.body;
  try {
    const findWord = await Word.findOne({ where: { id: +req.params.id } });
    // console.log('findWord=====>', findWord);
    if (findWord) {
      if (answer === findWord.translation) {
        const createUseranswerTrue = await TestStatus.create({
          user_id: user.id, theme_id: findWord.theme_id, word_id: req.params.id, answer: true,
        });
        // console.log('createUseranswerTrue===>', createUseranswerTrue);
        res.json({ answerCorrect: 'Ответ верный' });
      } else {
        const createUseranswerFalse = await TestStatus.create({
          user_id: user.id, theme_id: findWord.theme_id, word_id: req.params.id, answer: false,
        });
        // console.log('createUseranswerFalse===>', createUseranswerFalse);
        res.json({ answerNotCorrect: 'Ответ не верный' });
      }
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
