const express = require('express');

const rendertemplate = require('../../lib/renderTemplate');
const loginCheck = require('../../config/functions/loginCheck');

const Login = require('../../views/auth/Login');
const { User } = require('../../db/models');

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
  rendertemplate(Login, null, res);
});

loginRouter.post('/', async (req, res) => {
  const { login, password } = req.body;
  const loginProcess = await loginCheck(login, password);

  console.log(loginProcess, 'Это логин прооцесс');

  if (loginProcess.status === 'true') {
    const userForSession = await User.findOne({ where: { login } });

    console.log(userForSession, ' Это userForSession');

    req.session.user = {
      id: userForSession.id,
      name: userForSession.login,
    };
    // res.json(loginProcess);
  }
  res.json(loginProcess);
});

loginRouter.get('/logout', async (req, res) => {
  req.session.destroy((error) => {
    // if (error) {
    //   return errorAuth(res);
    // }
    res.clearCookie('user_sid');
    res.redirect('/login');
  });
});

module.exports = loginRouter;
