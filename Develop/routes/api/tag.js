const tagRouter = require('express').Router();

// DON'T FORGET TO IMPORT THE MODELS YOU'LL WORK WITH
const Tag = require("../../Models/tags");

// GET /api/tags to retrieve all tags from database, include associated Product data through ProductTag
router.get('/', async (req, res) => {
    try {

    } catch {

    }
});

// GET /api/tags/:id to retrieve a tag from database by its `id`, include associated Product data through ProductTag
router.get('/:id', async (req, res) => {
    const productID = req.params.id;
    try {

    } catch {

    }
});

// POST /api/tags to create a tag
router.post('/', async (req, res) => {
    console.log(req.body);
    try {

    } catch {

    }
});

// PUT /api/tags/:id to update a tag's information by its `id`
router.put('/:id', async (req, res) => {
    console.log(req.body);
    const productID = req.params.id;
    try {

    } catch {

    }
});

// DELETE /api/tags/:id to delete a tag by its `id`
router.delete('/:id', async (req, res) => {
    const productID = req.params.id;
    try {

    } catch {

    }
});

module.exports = tagRouter;
