'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class like extends Model {
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
  like.init({
    like_id:{
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
     
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    postId:{
     
      type:DataTypes.INTEGER,
      allowNull :false
    },

    likeReaction: {
      type:DataTypes.STRING,
      allowNull :false, 
    },
  }, {
    sequelize,
    tableName:'like',
    modelName: 'Like',
  });
  return like;
};