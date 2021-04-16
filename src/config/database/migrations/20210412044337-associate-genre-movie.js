'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // Product belongsToMany Tag
    return queryInterface.createTable(
      'associate-genre-movie',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        genreId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: 'genres', key: 'id'},
          onDelete: 'CASCADE',
          allowNull: false,
        },
        movieId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: { model: 'movies', key: 'id'},
          onDelete: 'CASCADE',
          allowNull: false,
        },
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    // remove table
    return queryInterface.dropTable('associate-genre-movie');
  },
};