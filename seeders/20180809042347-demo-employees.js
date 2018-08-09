'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    const demoEmployees = [{
      birthdate: '10/10/1990',
      first_name: 'Berto',
      last_name: 'Kohling',
      gender: 'M',
      hire_date: '10/10/2010',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      birthdate: '10/10/1991',
      first_name: 'Bert',
      last_name: 'Kohling',
      gender: 'F',
      hire_date: '10/10/2011',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      birthdate: '10/10/1992',
      first_name: 'Ber',
      last_name: 'Kohling',
      gender: 'M',
      hire_date: '10/10/2012',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      birthdate: '10/10/1993',
      first_name: 'Berto',
      last_name: 'Kohlin',
      gender: 'M',
      hire_date: '10/10/2013',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      birthdate: '10/10/1994',
      first_name: 'Bert',
      last_name: 'Kohl',
      gender: 'F',
      hire_date: '10/10/2014',
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    return queryInterface.bulkInsert('Employees', demoEmployees, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Employees', null, {});
  }
};