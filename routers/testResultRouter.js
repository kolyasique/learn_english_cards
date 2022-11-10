const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const renderEl = require('../lib/renderEl')
const TestResult = require('../views/TestResult');

const { User, Theme, Word, TestStatus } = require('../db/models');

router.get('/result', async (req, res) => {
  console.log('hello')
  try {
    const userInSession = req.session.user;
    const resultTestUser = await TestStatus.findAll({ raw: true });
    const results = {
      allCorrectAnswer: resultTestUser.filter((el) => el.answer === true).length,
      allUncorrectAnswer: resultTestUser.filter((el) => el.answer === false).length,
    };
    renderEl(TestResult, { results }, res);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
