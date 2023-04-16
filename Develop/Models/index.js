const Category = require('./categories');
const Product = require('./products');
const Tag = require('./tags');
const ProductTag = require('./productTags');

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' });

module.exports = {
  Category,
  Product,
  Tag,
  ProductTag
};
