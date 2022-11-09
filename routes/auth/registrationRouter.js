const express = require('express');

// Функции
const rendertemplate = require('../../lib/renderTemplate');
const registrationProcess = require('../../config/functions/registrationProcess');

// Views
const Registration = require('../../views/auth/Registration');

const { Word, Wordstatus } = require('../../db/models');
const { User } = require('../../db/models');

const registrationRouter = express.Router();

registrationRouter.get('/', (req, res) => {
  rendertemplate(Registration, null, res);
});

registrationRouter.post('/', async (req, res) => {
  const { login, password, password2 } = req.body;

  const successfulRegistration = await registrationProcess(req.body.login, req.body.password, req.body.password2);
    // const createdUserId = await User.findOne({where:{login}})
    // console.log(createdUserId.id, 'Это айдишник созданного юзера')
    // const allWords = await Word.findAll();
    // let i
    // for(i=1, i <= allWords.length, i++ ){
    //     await Wordstatus.create({user_id:createdUserId.id, word_id: Number(i), status: false})
    // } 
  res.json(successfulRegistration);
});

module.exports = registrationRouter;