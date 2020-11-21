const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('../globalModel');
const router = express.Router();
// GET all tags
router.get('/', authRequired, async (req, res) => {
  const response = await Model.findAll('tag');
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: 'There are no tags' });
  }
});

// GET all tags of item id with the item info
router.get('/item/:itemID/', authRequired, async (req, res) => {
  const { itemID } = req.params;
  const response = await Model.getTagByItemId(itemID);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: 'This item does not have a tag' });
  }
});

// POST tag
router.post('/', authRequired, async (req, res) => {
  const response = await Model.create('tag', req.body);
  if (response) {
    res.status(200).json(req.body);
  } else {
    res.status(404).json({ message: 'Could not create tag' });
  }
});

// TODO: POST CONNECT A TAG TO AN ITEM ID

module.exports = router;
