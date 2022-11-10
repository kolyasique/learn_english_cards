const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TestStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Theme, Word }) {
      TestStatus.belongsTo(User, { foreignKey: 'user_id' });
      TestStatus.belongsTo(Theme, { foreignKey: 'theme_id' });
      TestStatus.belongsTo(Word, { foreignKey: 'word_id' });
    }
  }
  TestStatus.init({
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    theme_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
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
    answer: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'TestStatus',
  });
  return TestStatus;
};
