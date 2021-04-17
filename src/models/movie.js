'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Movie.init({
    title: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    director_name: DataTypes.STRING
  }, {
    sequelize,
    tableName: "movies",
    modelName: 'Movie',
  });

  Movie.prototype.toJSON = function () {
    const movie = { ...this.get() };
    return Object.fromEntries(Object.entries(movie));
  };

  Movie.associate = models => {
    Movie.belongsToMany(models.User, { 
      through: 'votes',
      as: 'users',
      foreignKey: 'movieId',
    });

    Movie.belongsToMany(models.Actor, { 
      through: 'associate-actor-movie',
      as: 'actors',
      foreignKey: 'movieId',
    });

    Movie.belongsToMany(models.Genre, { 
      through: 'associate-genre-movie',
      as: 'genres',
      foreignKey: 'movieId',
    });
  };

  return Movie;
};