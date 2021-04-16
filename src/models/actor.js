'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  Actor.init({
    name: DataTypes.STRING,
    birthDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Actor',
  });

  Actor.associate = models => {
    Actor.belongsToMany(models.Movie, { 
      through: 'associate-actor-movie',
      as: 'movies',
      foreignKey: 'actorId',
    });
  };

  return Actor;
};