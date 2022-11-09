const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

module.exports = async function loginCheck(login, password) {
  const findLoginInDatabase = await User.findOne({ raw: true, where: { login } });
  console.log(findLoginInDatabase, 'find login in db');

  let compareBcryptPasswords;
  if (findLoginInDatabase) {
    compareBcryptPasswords = await bcrypt.compare(password, findLoginInDatabase.password);
  }
  console.log(compareBcryptPasswords, 'compare bcrypt passwords');
  
  if (findLoginInDatabase && !compareBcryptPasswords) {
    return { status: 'wrong password' };
  }
  if (findLoginInDatabase && compareBcryptPasswords) {
    return { status: 'true' };
  }
  //   const findPasswordInDatabase = await User.findOne({ where: { password } });
  if (!findLoginInDatabase) {
    return { status: 'false' };
  }
};
