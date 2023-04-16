const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

// TAG
class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    modelName: 'tag'
  }
);

module.exports = Tag;
