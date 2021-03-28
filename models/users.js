'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.hasMany(models.Post,{foreignKey:'userId'});
      this.hasMany(models.Comment,{foreignKey:'userId'});
      this.hasMany(models.Like,{foreignKey:'userId'});
      
      this.belongsToMany(this , {through:models.Friendship , as: 'accept' , foreignKey:'reject'});
    }
  };
  users.init({
    firstName: {
      type:DataTypes.STRING,
      allowNull :false, 
    },
    userId: {
      type:DataTypes.STRING,
      allowNull :false, 
      primaryKey :true ,
    },
    lastName:{
      type:DataTypes.STRING,
      allowNull :false, 
     
    },
    email: {
      type:DataTypes.STRING,
      allowNull :false, 
       unique:true,
    },

    
  }, {
    sequelize,
    tableName:'user',
    modelName: 'User',
  });
  return users;
};