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
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });

  Movie.associate = models => {
    Movie.belongsToMany(models.User, { through: 'vote'});
    Movie.belongsToMany(models.Actor, { through: 'associate-actor-movie'});
    Movie.belongsToMany(models.Genre, { through: 'associate-genre-movie'});
  };

  return Movie;
};