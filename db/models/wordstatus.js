const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Wordstatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Word, User }) {
      Wordstatus.belongsTo(User, { foreignKey: 'user_by' });
      Wordstatus.belongsTo(Word, { foreignKey: 'word_by' });
    }
  }
  Wordstatus.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    word_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Words',
        key: 'id',
      },
    },
    status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Wordstatus',
  });
  return Wordstatus;
};
