'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class blog_vote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //many to many relations 
      this.belongsToMany(models.User, {through: models.blog_vote, foreignKey: 'user_id'})
      this.belongsToMany(models.blogs, {through: models.blog_vote, foreignKey: 'user_id'})
    }
  };
  blog_vote.init({
    point_id:{
      type: DataTypes.INTEGER,
      allowNull: false ,
      primaryKey: true
    },
    blog_id: { type: DataTypes.INTEGER,
      allowNull: false ,

    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false ,
      unique: true,
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false ,
    },
  }, {
    sequelize,
    tableName: 'blog_vote ',
    modelName: 'Blog_vote',
  });
  return blog_vote;
};