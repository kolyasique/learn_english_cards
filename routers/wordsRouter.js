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

    const statusForLink = { status: false };

    const findAllWordsInTheme = await Word.findAll({ where: { theme_id: Number(id) } });
    const findAllWordsDone = await Wordstatus.findAll({ where: { user_id: userInSession.id, theme_id: Number(id), status: true } });
    if (findAllWordsInTheme.length <= findAllWordsDone.length) {
      statusForLink.status = true;
    }
    console.log(statusForLink.status, '+_+_+_+_+_ CTATYC', findAllWordsInTheme.length, '-- ВСЕ СЛОВА В ТЕМЕ', findAllWordsDone.length, '---ВСЕ ОТВЕЧЕННЫЕ СЛОВА ЮЗЕРОМ В ТЕМЕ');
    renderTemplate(Words, {
      theme, words, userInSession, statusForLink,
    }, res);
  } catch (error) {
    console.log(error);
  }
});

router.post('/remember/:tid/:wid', async (req, res) => {
  try {
    const user_id = req.session.user.id;
    const { wid } = req.params;
    const { tid } = req.params;

    const testStatus = { status: 'short_notuser' };
    const wordStatusUpd = await Wordstatus.upsert({
      user_id, word_id: Number(wid), theme_id: Number(tid), status: true,
    });

    const findAllWordsInTheme = await Word.findAll({ where: { theme_id: Number(tid) } });
    const findAllWordsDone = await Wordstatus.findAll(
      { where: { user_id, theme_id: Number(tid), status: true } },
    );
    const changedWord = await Word.findAll({where:{id:Number(wid), created_by: user_id}})
  console.log(changedWord, '+++++++++ SLOVO IZMENENO')
    if (findAllWordsInTheme.length !== findAllWordsDone.length && changedWord.length !== 0) {
      testStatus.status = 'short_user';
    }
    if (findAllWordsInTheme.length === findAllWordsDone.length && changedWord.length !== 0) {
      testStatus.status = 'long_user';
    }
    if (findAllWordsInTheme.length === findAllWordsDone.length && changedWord.length === 0) {
      testStatus.status = 'long_notuser';
    }
    console.log(testStatus)
    res.json(testStatus);
  } catch (error) {
    res.sendStatus(300);
  }
});

router.delete('/delete/:id', async (req, res) => {
  try {
    const { id } = req.body;
    const deleted = await Word.destroy({ where: { id: Number(id) } });
    if (deleted === 1) {
      res.json({ deleted: 'true' });
    } else {
      res.json({ notDeleted: 'true' });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
