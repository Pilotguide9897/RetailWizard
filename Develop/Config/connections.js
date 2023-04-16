require('dotenv').config();
const Sequelize = require('sequelize');

console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  // Database location information
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;
