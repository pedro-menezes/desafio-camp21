'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable(
      'votes',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        userId: {
          allowNull: false,
          type: Sequelize.UUID,
          primaryKey: true,
        },
        movieId: {
          allowNull: false,
          type: Sequelize.UUID,
          primaryKey: true,
        },
        note: {
          type: Sequelize.INTEGER
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable('votes');
  },
};