const categoryRouter = require('express').Router();

// DON'T FORGET TO IMPORT THE MODELS YOU'LL WORK WITH
const Category = require("../../Models/categories");

// GET /api/categories to retrieve all categories from database, include associated Product data
router.get('/', async (req, res) => {
    try {
        const categories = await Category.findAll();
        console.log(category.every(category => category instanceof Category));
        console.log("All Categories:", JSON.stringify(categories));
        res.json(categories)
    } catch (error) {

    }
});

// GET /api/categories/:id to retrieve one category's data by it's `id` value, include associated Product data
router.get('/:id', async (req, res) => {
    try {

    } catch (error) {

    }
});

// POST /api/categories to create data in Category model provided in req.body
router.post('/', async (req, res) => {
    try {

    } catch (error) {

    }
});

// PUT /api/categories/:id to update category by its `id` value
router.put('/:id', async (req, res) => {
    try {

    } catch (error) {

    }
});

// DELETE /api/categories/:id to delete a category by its `id` value
router.delete('/:id', async (req, res) => {
    try {

    } catch (error) {

    }
});

module.exports = categoryRouter;
