"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn('alunos', 'sobreNome', 'sobrenome', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  async down(queryInterface) {
    await queryInterface.renameColumn('alunos', 'sobrenome', 'sobreNome');
  },
};
