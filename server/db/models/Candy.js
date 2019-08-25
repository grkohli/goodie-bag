const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    notEmpty: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    notEmpty: true,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: ''
  }
});
