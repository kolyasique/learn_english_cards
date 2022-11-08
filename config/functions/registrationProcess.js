/* eslint-disable no-unused-vars */

const bcrypt = require('bcrypt');
// const renderTemplate = require('./renderTemplate');
const { User } = require('../../db/models');

module.exports = async function registrationProcess(login, password, password2) {
  const userExistInDatabaseCheck = await User.findOne({ where: { login } });

  let passIsGood;

  if (userExistInDatabaseCheck) {
    passIsGood = await bcrypt.compare(password, userExistInDatabaseCheck.password);
  }
  const bcryptPassword = await bcrypt.hash(password, 10);

  // Пароли совпадают, юзер есть в базе, введенный пароль совпадает с базой
  if ((password === password2) && userExistInDatabaseCheck && passIsGood) {
    return { status: 'user already exists' };
  }
  // Пароли совпадают, юзерa нет в базе, введенный пароль совпадает с базой
  if ((password === password2) && !userExistInDatabaseCheck) {
    const createNewUser = await User.create({ login, password: bcryptPassword });
    return { status: 'user created!' };
  }
  // Пароли совпадают, юзер есть в базе, введенный пароль совпадает с базой
  if ((password === password2) && userExistInDatabaseCheck && !passIsGood) {
    return { status: 'nickname exists' };
  }

  if (!(password === password2) && userExistInDatabaseCheck && !passIsGood) {
    return { status: 'check password' };
  }
  if (!(password === password2) && !userExistInDatabaseCheck && !passIsGood) {
    return { status: 'check password' };
  }
  if (!(password === password2) && userExistInDatabaseCheck && passIsGood) {
    return { status: 'check password' };
  }
  if (!(password === password2) && !userExistInDatabaseCheck) {
    return { status: 'check password' };
  }
};
