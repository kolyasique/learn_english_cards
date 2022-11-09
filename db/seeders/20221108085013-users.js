'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      login: 'Миша',
      password: '$2b$10$mmuJKkIiTyWj.gtsWf8ZmuC4myIYAm/Zo7fOulOeaetrpKNSCy56K',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
  {},
);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
