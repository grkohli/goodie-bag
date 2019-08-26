const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    //must validate notEmpty
    validate: {
      notEmpty: true
    },
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    notEmpty: true,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0,
      max: 10
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://www.hersheys.com/is/image/content/dam/smartlabelproductsimage/hersheys/00034000002399-0011.png?wid=570&hei=570&fmt=png-alpha'
  }
});
