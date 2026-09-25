"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("WasteCategories", [
      {
        name: "Plastic",
        description: "Plastic waste such as bottles, cups, and food packaging.",
        points_per_kg: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Paper",
        description: "Paper waste such as newspapers, cardboard, and used paper.",
        points_per_kg: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Organic",
        description: "Organic waste such as food scraps and leaves.",
        points_per_kg: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Metal",
        description: "Metal waste such as cans and other recyclable metal.",
        points_per_kg: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Glass",
        description: "Glass waste such as bottles and glass containers.",
        points_per_kg: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("WasteCategories", null, {});
  },
};