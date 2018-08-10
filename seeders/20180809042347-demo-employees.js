'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const demoEmployees = [{
      birth_date: '10-10-1990',
      first_name: 'Berto',
      last_name: 'Alex',
      gender: 'M',
      hire_date: '10-10-2010',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      birth_date: '10-10-1991',
      first_name: 'Karl',
      last_name: 'Steven',
      gender: 'F',
      hire_date: '10-10-2011',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      birth_date: '10-10-1992',
      first_name: 'John',
      last_name: 'Cena',
      gender: 'M',
      hire_date: '10-10-2012',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      birth_date: '10-10-1993',
      first_name: 'Roberto',
      last_name: 'Kohlin',
      gender: 'M',
      hire_date: '10-10-2013',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      birth_date: '10-10-1994',
      first_name: 'James',
      last_name: 'Bond',
      gender: 'F',
      hire_date: '10-10-2014',
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    return queryInterface.bulkInsert('employees', demoEmployees, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('employees', null, {});
  }
};