/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Words', [{
      word: 'weather',
      translation: 'погода',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'snow',
      translation: 'снег',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'sun',
      translation: 'солнце',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'cold',
      translation: 'холодно',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'hot',
      translation: 'жарко',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'warm',
      translation: 'тепло',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'rain',
      translation: 'дождь',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'wind',
      translation: 'ветер',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'winter',
      translation: 'зима',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'cloud',
      translation: 'облако',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'summer',
      translation: 'лето',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'mist',
      translation: 'туман',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'spring',
      translation: 'весна',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'storm',
      translation: 'буря',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'autumn',
      translation: 'осень',
      theme_id: 1,
      created_by: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      word: 'ice',
      translation: 'лёд',
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
