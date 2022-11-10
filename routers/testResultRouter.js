const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const renderEl = require('../lib/renderEl');
const TestResult = require('../views/TestResult');

const {
  User, Theme, Word, TestStatus, AllTest,
} = require('../db/models');

router.get('/result', async (req, res) => {
  console.log('hello');
  try {
    const { id } = req.session.user;

    const userInSession = req.session.user;
    const resultTestUser = await TestStatus.findAll({ raw: true });
    const themeExample = await TestStatus.findOne({ where: { user_id: id } });
    const countCorrectAnswer = resultTestUser.filter((el) => el.answer === true).length;
    const countUncorrectAnswer = resultTestUser.filter((el) => el.answer === false).length;
    const results = {
      allCorrectAnswer: resultTestUser.filter((el) => el.answer === true).length,
      allUncorrectAnswer: resultTestUser.filter((el) => el.answer === false).length,
    };
    const saveResult = await AllTest.create({
      user_id: id, test_id: null, theme_id: Number(themeExample.theme_id), correct: countCorrectAnswer, incorrect: countUncorrectAnswer,
    });
    const deleteTemporaryResult = await TestStatus.destroy({ where: { user_id: id } });
    renderEl(TestResult, { results }, res);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
