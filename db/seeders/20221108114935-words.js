/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Words', [{
      word: 'word1',
      translation: 'перевод1',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'word2',
      translation: 'перевод2',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'word3',
      translation: 'перевод3',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'word4',
      translation: 'перевод4',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'word5',
      translation: 'перевод5',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'word6',
      translation: 'перевод6',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'word7',
      translation: 'перевод7',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'word8',
      translation: 'перевод8',
      theme_id: 1,
      created_by: null,
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
