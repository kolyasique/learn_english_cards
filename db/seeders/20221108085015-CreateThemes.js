/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Themes',
      [
        {
          title: 'Погода и времена года',
          created_by: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Семья',
          created_by: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Еда',
          created_by: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Одежда',
          created_by: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Профессии',
          created_by: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Внешность',
          created_by: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Животные',
          created_by: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Анатомия',
          created_by: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Цвета',
          created_by: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Themes', null, {});
  },
};
