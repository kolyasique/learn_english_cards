const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Word extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme, User, Wordstatus }) {
      Word.hasMany(Wordstatus, { foreignKey: 'word_id' });
      Word.belongsTo(Theme, { foreignKey: 'theme_id' });
      Word.belongsTo(User, { foreignKey: 'created_by' });
    }
  }
  Word.init({
    word: DataTypes.TEXT,
    translation: DataTypes.TEXT,
    theme_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Themes',
        key: 'id',
      },
    },
    created_by: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Word',
  });
  return Word;
};
