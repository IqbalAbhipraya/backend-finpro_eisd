'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      mainImage: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.JSON
      },
      accessibilityFeatures: {
        type: Sequelize.JSON
      },
      overallRating: {
        type: Sequelize.DECIMAL
      },
      totalReviews: {
        type: Sequelize.INTEGER
      },
      comfortRating: {
        type: Sequelize.DECIMAL
      },
      cleanlinessRating: {
        type: Sequelize.DECIMAL
      },
      facilitiesRating: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Locations');
  }
};