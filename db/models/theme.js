const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Word, User }) {
      Theme.hasMany(Word, { foreignKey: 'theme_id' });
      Theme.belongsTo(User, { foreignKey: 'created_by' });
    }
  }
  Theme.init({
    title: DataTypes.TEXT,
    created_by: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Theme',
  });
  return Theme;
};
