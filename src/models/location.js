'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Location.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    description: DataTypes.TEXT,
    mainImage: DataTypes.STRING,
    images: DataTypes.JSON,
    accessibilityFeatures: DataTypes.JSON,
    overallRating: DataTypes.DECIMAL,
    totalReviews: DataTypes.INTEGER,
    comfortRating: DataTypes.DECIMAL,
    cleanlinessRating: DataTypes.DECIMAL,
    facilitiesRating: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Location',
  });
  return Location;
};