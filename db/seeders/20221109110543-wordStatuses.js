/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Wordstatuses', [{
      user_id: 1,
      word_id: 1,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 2,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 3,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 4,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 5,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 6,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 7,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 8,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 9,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 10,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 11,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 12,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 13,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 14,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 15,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      word_id: 16,
      status: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
