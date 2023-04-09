const { sequelize, DataTypes } = require ('sequelize');
const sequelize = require('../Config/connections');

// PRODUCT
class Product extends Model {}

Product.init({
  
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        isDecimal: true,
    }
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: "10",
    validate: {
        isNumeric: true,
    }
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
        model: category,
        key: 'id',
    }
  }
}, {
  sequelize, 
  modelName: 'Product'
});

module.exports = Product;