'use strict';
module.exports = {
  up: async (queryInterface,DataTypes) => {
    await queryInterface.createTable('posts', {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:DataTypes.INTEGER
      },
      postId: {
        type:DataTypes.INTEGER,
        allowNull :false, 
      },
      creator: {
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
    await queryInterface.dropTable('posts');
  }
};