const categoryRouter = require('express').Router();

// DON'T FORGET TO IMPORT THE MODELS YOU'LL WORK WITH
const Category = require("../../Models/categories");

// GET /api/categories to retrieve all categories from database, include associated Product data
router.get('/', (req, res) => {
    try {

    } catch {

    }
});

// GET /api/categories/:id to retrieve one category's data by it's `id` value, include associated Product data
router.get('/:id', (req, res) => {
    try {

    } catch {

    }
});

// POST /api/categories to create data in Category model provided in req.body
router.post('/', (req, res) => {
    try {

    } catch {

    }
});

// PUT /api/categories/:id to update category by its `id` value
router.put('/:id', (req, res) => {
    try {

    } catch {

    }
});

// DELETE /api/categories/:id to delete a category by its `id` value
router.delete('/:id', (req, res) => {
    try {

    } catch {

    }
});

module.exports = categoryRouter;
