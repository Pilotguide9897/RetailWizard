const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/connections');

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
    modelName: 'Tag'
  }
);

module.exports = Tag;
