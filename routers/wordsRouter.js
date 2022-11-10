/* eslint-disable camelcase */
const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Words = require('../views/Words');

const { Theme, Word, Wordstatus } = require('../db/models');

router.get('/:id', async (req, res) => {
  try {
    const userInSession = req.session.user;

    const { id } = req.params;
    const theme = await Theme.findOne({ where: { id }, raw: true });
    const wordsExtended = await Word.findAll({ include: Wordstatus });

    // console.log(wordsExtended)
    // const wordsRaw = await Word.findAll({ include: Wordstatus });
    const wordsRaw = wordsExtended.filter((el) => el.theme_id == req.params.id);
    const words = wordsRaw.map((el) => el.dataValues);

    renderTemplate(Words, { theme, words, userInSession }, res);
  } catch (error) {
    console.log(error);
  }
});

router.put('/remember/:tid/:wid', async (req, res) => {
  try {
    const user_id = req.session.user.id;    
    const { wid } = req.params;
    const { tid } = req.params;

    // const findAllWordsInTheme = await Word.findAll({where:{theme_id: Number(tid)}})
    // const findAllWordsDone = await Wordstatus.findAll({where:{user_id, word_id:findAllWordsInTheme.id}})
    // console.log( "Это длины всякой чушни", findAllWordsInTheme.id)

    const wordStatusUpd = await Wordstatus.upsert({ user_id:user_id, word_id: Number(wid), theme_id:Number(tid), status: true });
    console.log(wordStatusUpd, '++++++++++++++++');
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(300);
  }
});
module.exports = router;
