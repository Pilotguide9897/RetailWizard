const { sequelize, DataTypes } = require ('sequelize');
const sequelize = require('../Config/connections');

// PRODUCT TAG
class ProductTag extends Model {}

ProductTag.init({
 id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
        model: product,
        key: 'id',
    }
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
        model: tag,
        key: 'id',
    }
  }
}, {
  sequelize, 
  modelName: 'ProductTag'
});

module.exports = ProductTag;