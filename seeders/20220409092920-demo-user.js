'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('Users', [{
     email: "hello@gmail.com",
     createdAt: new Date(),
     updatedAt: new Date()
   }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
