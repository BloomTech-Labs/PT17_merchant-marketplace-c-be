const express = require('express');
// const authRequired = require('../middleware/authRequired');
const Model = require('../globalModel');
const router = express.Router();
// GET all tags for an item
router.get('/', async (req, res) => {
  const response = await Model.findAll('tag');
  console.log(response);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: 'There are no tags' });
  }
});

// GET all tags for an item
router.get('/:itemID', async (req, res) => {
  const { itemID } = req.params;
  const response = await Model.getTagByItemId(itemID);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: 'This item does not have a tag' });
  }
});

// POST tag for item
router.post('/', async (req, res) => {
  const response = await Model.create('tag', req.body);
  if (response) {
    res.status(200).json(req.body);
  } else {
    res.status(404).json({ message: 'Could not create tag' });
  }
});

module.exports = router;
