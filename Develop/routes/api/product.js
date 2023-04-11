const productRouter = require('express').Router();

// DON'T FORGET TO IMPORT THE MODELS YOU'LL WORK WITH
const Product = require("../../Models/products");
const Tag = require("../../Models/tags");
const ProductTag = require("../../Models/productTags");
const Category = require('../../Models/categories');

// GET /api/products to retrieve all products from database, include associated Category and Tag data (through ProductTag)
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{
        model: Category,
      },
        {
        model: Tag,
        through: ProductTag,
        },
      ],
    });
      res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product data', error});
  }
});

// GET /api/products/:id to retrieve one product's data by it's `id` value, include associated Category and Tag data (through ProductTag)
router.get('/:id', async (req, res) => {
  const productID = req.params.id;
  try {
    const singleProduct = await Product.findAll({
      where: {
        id: req.params.id,
      },
      include: [{
        model: Category,
      },
      {
        model: Tag,
        through: ProductTag,
      },
    ],
    });
    if (singleProduct.length === 0){
      res.status(404).json({ message: `Product with ID ${productID} not found` });
    } else {
      res.json(singleProduct);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching data for the product with the associated id:', error});
  }
});

// POST /api/products to create data in Product model and associate any tags using the ProductTag through model
router.post('/', async (req, res) => {
  console.log(req.body);

  Product.create(req.body)
    .then(product => {
      if (tagIds.length) {
        const productTagIdArr = tagIds.map(TagId => ({ ProductId: product.id, TagId }));
        console.log(productTagIdArr);
        return ProductTag.bulkCreate(productTagIdArr);
      }
      res.status(200).json(product);
    })
    .then(productTagIds => res.status(200).json(productTagIds))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

// PUT /api/products/:id to update a post by it's `id`, fill in the question marks!
router.put('/:id', async (req, res) => {
   const productID = req.params.id;
   console.log(req.body);
  const tagIds = req.body.tagIds.split(',');
  // update product data
  Product.update({name: req.body.product_name, price: req.body.price, stock: req.body.stock}, {
    where: {
      id: productID,
    }
  })
    .then(product => {
      // find all associated tags from productTag
      return ProductTag.findAll({ where: { ProductId: req.params.id }, raw: true });
    })
    .then(productTags => {
      console.log(productTags);
      console.log(`tag id ${req.body.tagIds}`)
      const [{ProductId, TagId}] = productTags.filter(({ TagId }) => {
        console.log(TagId);
        return tagIds.includes(TagId.toString()) === false;
      });
      
      return ProductTag.destroy({ where: { ProductId, TagId } });
    })
    .then(destroyedId => res.status(200).json(destroyedId))
    .catch(err => {
      console.log(err);
      res.status(404).json(err)
    });
});

// DELETE 
// /api/products/:id to delete a product by its `id` value
router.delete('/:id', async (req, res) => {
  const productID = req.params.id;
  try {
   const productToDestroy = await Product.destroy({
      where: {
        id: productID,
      },
    });
  if (productToDestroy0 === 0) {
    res.status(404).json({ message: `Product with ID ${productID} not found` });
  } else {
    res.status(200).json({ message: `Successfully deleted product with ${productID}`});
  }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = productRouter;
