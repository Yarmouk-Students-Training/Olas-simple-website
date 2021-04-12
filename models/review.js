'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //many to one 
      this.belongsTo(models.Regular , { foreignKey: 'uuid'})
      this.belongsTo(models.Lawyer , { foreignKey: 'lawyer_id'})
      
    }
  };
  Review.init({
    lawyer_id:{
      type: DataTypes.STRING,
      allowNull: false,

    },
    uuid: {
      type: DataTypes.UUID,
      unique: true,
      allowNull: false
    },

    content:{
        type: DataTypes.UUID,
       allowNull: false
    
    }
  }, {
    sequelize,
    tableName: 'review',
    modelName: 'Review',
  });
  return Review;
};