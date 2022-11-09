const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Word, Theme, Wordstatus }) {
      User.hasMany(Word, { foreignKey: 'created_by' });
      User.hasMany(Theme, { foreignKey: 'created_by' });
      User.hasMany(Wordstatus, { foreignKey: 'user_id' });
    }
  }
  User.init({
    login: DataTypes.TEXT,
    password: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
