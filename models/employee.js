'use strict';
module.exports = (sequelize, DataTypes) => {
  var Employee = sequelize.define('employee', {
    emp_no: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    birth_date: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    first_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    last_name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    gender: {
      allowNull: false,
      type: DataTypes.ENUM('M', 'F')
    },
    hire_date: {
      allowNull: false,
      type: DataTypes.DATEONLY
    }
  }, {});
  Employee.associate = function (models) {
    // associations can be defined here
  };
  return Employee;
};