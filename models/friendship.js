'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class friendship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({models}) {
      // define association here
    }
  };
  friendship.init({
    friendId: {
      type:DataTypes.INTEGER,
      allowNull :false, 
      primaryKey:true
    },
    reject: {
      type:DataTypes.STRING,
      allowNull :false, 
    },
    accept:{
      type:DataTypes.STRING,
      allowNull :false, 
    },
    userId: {
      type:DataTypes.INTEGER,
      allowNull :false, 
    },
  }, {
    sequelize,
    tableName: 'friendship',
    modelName: 'Friendship',
  });
  return friendship;
};