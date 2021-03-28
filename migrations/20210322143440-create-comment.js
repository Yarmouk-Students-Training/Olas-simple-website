'use strict';
module.exports = {
  up: async (queryInterface,DataTypes) => {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type:DataTypes.INTEGER
      },
      content: {
        type: DataTypes.STRING,
        allowNull :false,   

      },
      postId: {
        type:DataTypese.INTEGER,
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
    await queryInterface.dropTable('comments');
  }
};