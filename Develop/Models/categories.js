const { sequelize, DataTypes } = require ('sequelize');
const sequelize = require('../Config/connections');

// CATEGORY
class Category extends Model {}

Category.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'Category'
});

module.exports = Category;
