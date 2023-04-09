const { sequelize, DataTypes } = require ('sequelize');
const sequelize = new Sequelize('mysql::memory:');

// CATEGORY
class Category extends Model {}

Category.init({
  // Model attributes are defined here
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
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// PRODUCT
class Product extends Model {}

Product.init({
  // Model attributes are defined here
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
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// TAG
class Tag extends Model {}

Tag.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  tag_name: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// PRODUCT TAG
class ProductTag extends Model {}

ProductTag.init({
  // Model attributes are defined here
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
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});


Product.belongsTo(Category);
Category.hasMany(Product);
Tag.belongsToMany(Product, {through: 'ProductTag'});
Product.belongsToMany(Tag, {through: 'ProductTag'});
