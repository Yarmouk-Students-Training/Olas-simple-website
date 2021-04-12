'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Lawyer, { foreignKey: 'lawyer_id'})

      this.belongsToMany(models.User, {through: models.blog_vote, foreignKey: 'user_id'})

    }
  };
  Blog.init({
    blog_id: {
      type: DataTypes.INTEGER,
      allowNull: false ,
      primaryKey:true ,
    },
    lawyer_id:{
      type: DataTypes.STRING,
      allowNull: false ,
      unique: true,
    },
    content:{
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    tableName : 'blogs',
    modelName: 'Blog',
  });
  return Blog;
};