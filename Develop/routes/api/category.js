const categoryRouter = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models/index');

// GET /api/categories to retrieve all categories from database, include associated Product data
categoryRouter.get('/', async (req, res) => {
  try {
        const allCategoryData = await Category.findAll({
           include: [{ model: Product }],
        });
        res.status(200).json({ message: 'Successfully fetched category data', data: allCategoryData });
      } catch (error) {
      res.status(500).json({ message: 'Failed to fetch category data', error });
    }
  });

// GET /api/categories/:id to retrieve one category's data by it's `id` value, include associated Product data
categoryRouter.get('/:id', async (req, res) => {
  const categoryId = req.params.id;
  try {
    const oneCategoryData = await Category.findAll({
      where: {
        id: categoryId
      },
      include: [{ model: Product }],
    });
    if (oneCategoryData.length === 0) {
      res.status(404).json({ message: `Category with id ${categoryId} not found` });
    } else {
      res.json(oneCategoryData);
    }
  } catch (error) {
    res.status(500).json({ message: `Error fetching data for the category with id: ${categoryId}`, error });
  }
});

// POST /api/categories to create data in Category model provided in req.body
categoryRouter.post('/', async (req, res) => {
  console.log(req.body);

  //Validation
  if (!req.body.category_name || typeof req.body.category_name !== 'string') {
    return res.status(400).json({ message: 'Invalid input data: category_name is required and should be a string.' });
  }

 try {
   const newCategory = await Category.create({ category_name: req.body.category_name });
   res.status(200).json({ message: `Successfully created new category!`, newCategory });
 } catch (error) {
   res.status(500).json({ message: `Error posting new category`, error });
 }

});

// PUT /api/categories/:id to update category by its `id` value
categoryRouter.put('/:id', async (req, res) => {
  const categoryId = req.params.id;
  console.log(req.body);
  console.log('Category ID:', categoryId);
  try {
    const updateCategory = await Category.update(
      { category_name: req.body.category_name },
      {
        where: {
          id: categoryId
        }
      }
    );
    console.log('Update result:', updateCategory);
    if (updateCategory[0] === 0) {
      res.status(404).json({ message: `No categories found matching id: ${categoryId}` });
    } else {
      res.status(200).json({ message: `successfully updated category` });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json(error);
  }
});

// DELETE /api/categories/:id to delete a category by its `id` value
categoryRouter.delete('/:id', async (req, res) => {
  const categoryId = req.params.id;
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: categoryId
      }
    });
    if (deleteCategory === 0) {
      res.status(404).json({ message: `Category with id: ${categoryId} not found` });
    } else {
      res.status(200).json({
        message: `Successfully deleted category with ${categoryId}`,
        deletedRecords: deleteCategory
      });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = categoryRouter;
