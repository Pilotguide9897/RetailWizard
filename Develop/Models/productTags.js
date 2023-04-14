const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const Product = require('./products');
const Tag = require('./tags');


// PRODUCT TAG
class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    modelName: 'ProductTag'
  }
);

module.exports = ProductTag;
