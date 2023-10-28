"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Todos", [
      {
        title: "Beli milo",
        waktu: new Date(), // Tanggal dan jam waktu 
        durasi: 60, // Durasi dalam menit
        hari: "Senin", // Hari
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Belajar pemrograman",
        waktu: new Date(), // Tanggal dan jam waktu 
        durasi: 120, // Durasi dalam menit
        hari: "Selasa", // Hari
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Buat database",
        waktu: new Date(), // Tanggal dan jam waktu 
        durasi: 90, // Durasi dalam menit
        hari: "Rabu", // Hari
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Todos", null, {});
  },
};