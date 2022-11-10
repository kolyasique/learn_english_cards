'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AllTest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AllTest.init({
    user_id: DataTypes.INTEGER,
    test_id: DataTypes.INTEGER,
    theme_id: DataTypes.INTEGER,
    correct: DataTypes.INTEGER,
    incorrect: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AllTest',
  });
  return AllTest;
};