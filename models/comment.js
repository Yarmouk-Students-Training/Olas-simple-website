'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User , {foreignKey:'userId'});
      this.belongsTo(models.Post , {foreignKey:'postId'});
    }
  };
  comment.init({

    comment_Id: {
      type:DataTypes.STRING,
      allowNull :false, 
      primaryKey:true
    },
    content: {
      type:DataTypes.STRING,
      allowNull :false, 
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    postId:{
     
      type:DataTypes.INTEGER,
      allowNull :false
    },

  
  }, {
    sequelize,
    tableName:'comment',
    modelName: 'Comment',
  });
  return comment;
};