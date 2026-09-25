"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Rewards", [
      {
        name: "Eco Tumbler",
        description: "Reusable tumbler for your daily drinks.",
        points_required: 500,
        stock: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Eco Tote Bag",
        description: "Reusable tote bag to reduce plastic bag usage.",
        points_required: 300,
        stock: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Plant Seed Kit",
        description: "A small planting kit to support a greener environment.",
        points_required: 400,
        stock: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Eco Voucher",
        description: "Voucher that can be exchanged for selected eco-friendly products.",
        points_required: 750,
        stock: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rewards", null, {});
  },
};