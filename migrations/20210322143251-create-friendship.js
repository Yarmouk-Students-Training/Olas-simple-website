'use strict';
module.exports = {
  up: async (queryInterface,DataTypes) => {
    await queryInterface.createTable('friendship', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:DataTypes.INTEGER
      },
      friendId: {
        type:DataTypes.INTEGER,
        allowNull :false,   

      },
      reject: {
        type:DataTypes.STRING,
        allowNull :false,   
        
      },
      accept: {
        type:DataTypes.STRING,
        allowNull :false,   

      },
      userId: {
        type:DataTypes.INTEGER,
        allowNull :false,   

      },
      createdAt: {
        allowNull: false,
        type:DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type:DataTypes.DATE
      }
    });
  },
  down: async (queryInterface,DataTypes) => {
    await queryInterface.dropTable('friendship');
  }
};