const categoryRouter = require('express').Router();

// DON'T FORGET TO IMPORT THE MODELS YOU'LL WORK WITH
const Category = require("../../Models/categories");

// GET /api/categories to retrieve all categories from database, include associated Product data
router.get('/', async (req, res) => {
    try {
        const allCategoryData = await Category.findAll();
        console.log(category.every(category => category instanceof Category));
        console.log("All Categories:", JSON.stringify(categories));
        res.json(allCategoryData);
    } catch (error) {

    }
});

// GET /api/categories/:id to retrieve one category's data by it's `id` value, include associated Product data
router.get('/:id', async (req, res) => {
    try {
        const oneCategoryData = await Category.findAll({
            where: {
                id: req.params.id// how can I set this to the variable that the user puts in?
            }
        }).then((oneCategoryData) =>{
            res.json(oneCategoryData);
        })
    } catch (error) {

    }
});

// POST /api/categories to create data in Category model provided in req.body
router.post('/', async (req, res) => {
    console.log(req.body);
    try {
        Category.create(req.body).then((newCategory) => {
            res.json(Category)
        })
    } catch (error) {
        res.json(error);
    }
});

// PUT /api/categories/:id to update category by its `id` value
router.put('/:id', async (req, res) => {
    try {
        Category.update({

        },
        {
            where: {
                id: req.params.id,
            }
        }).then((updatedID) => {
            res.json(updatedID);
        })
    } catch (error) {

    }
});

// DELETE /api/categories/:id to delete a category by its `id` value
router.delete('/:id', async (req, res) => {
    try {
        Category.destroy({
            where:{
                id: req.params.id
            },
        }).then ((deletedCategory) => {
            res.json(deletedCategory);
        })
    } catch (error) {

    }
});

module.exports = categoryRouter;
