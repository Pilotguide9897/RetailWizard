const tagRouter = require('express').Router();

const ProductTag = require('../../Models/productTags');
const Product = require('../../Models/products');
// DON'T FORGET TO IMPORT THE MODELS YOU'LL WORK WITH
const Tag = require('../../Models/tags');

// GET /api/tags to retrieve all tags from the database, include associated Product data through ProductTag
tagRouter.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag
        }
      ]
    });
    res
      .status(200)
      .json({ message: `Successfully retrieved tags from the database!`, tagData: tags });
  } catch (error) {
    res.status(500).json({ message: `Error fetching tag data`, error });
  }
});

// GET /api/tags/:id to retrieve a tag from database by its `id`, include associated Product data through ProductTag
tagRouter.get('/:id', async (req, res) => {
  const tagID = req.params.id;
  try {
    const tag = await Tag.findAll({
      where: {
        id: tagID
      },
      include: [
        {
          model: Product,
          through: ProductTag
        }
      ]
    });
    res.status(200).json({
      message: `successfully retrieved individual tag data for tagId: ${tagID}`,
      tagData: tag
    });
  } catch (error) {
    res.status(500).json({ message: `Error fetching individual tag data`, error });
  }
});

// POST /api/tags to create a tag
tagRouter.post('/', async (req, res) => {
  console.log(req.body);

  //Validation
  if (!req.body.tag_name || typeof req.body.tag_name !== 'string') {
    return res
      .status(400)
      .json({ message: 'Invalid input data: tag_name is required and should be a string.' });
  }

  try {
    const createTag = await Tag.create(req.body);
    res.status(200).json({ message: 'Tag successfully created', tagData: createTag });
  } catch (error) {
    res.status(400).json({ message: 'Error creating tag', error });
  }
});

// PUT /api/tags/:id to update a tag's information by its `id`
tagRouter.put('/:id', async (req, res) => {
  console.log(req.body);
  const tagID = req.params.id;
  try {
    const updateTagInfo = await Tag.update(
      { tag_name: req.body.tag_name },
      {
        where: {
          id: tagID
        }
      }
    );
    if (updateTagInfo[0] === 0) {
      res.status(404).json({ message: `No tags found matching id: ${tagID}` });
    } else {
      res.status(200).json({ message: `successfully updated tag` });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE /api/tags/:id to delete a tag by its `id`
tagRouter.delete('/:id', async (req, res) => {
  const tagID = req.params.id;
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: tagID
      }
    });
    if (deleteTag === 0) {
      res.status(404).json({ message: `No tags found matching id: ${tagID}` });
    } else {
      res.status(200).json({ message: `successfully deleted tag` });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = tagRouter;
