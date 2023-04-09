const Category = require('./categories');
const Product = require('./products');
const Tag = require('./tags');
const ProductTag = require('./productTags');

Product.belongsTo(Category);
Category.hasMany(Product);
Tag.belongsToMany(Product, {through: 'ProductTag' });
Product.belongsToMany(Tag, {through: 'ProductTag' });

module.exports = {
    Category,
    Product,
    Tag,
    ProductTag
};