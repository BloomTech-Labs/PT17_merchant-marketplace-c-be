const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('../globalModel');
const endpointCreator = require('../endPoints');
const router = express.Router();

// GET all categories
router.get('/', authRequired, async (req, res) => {
  endpointCreator.findAllData('category', req, res);
});

// GET all categories for an item
router.get('/:itemID', authRequired, async (req, res) => {
  const { itemID } = req.params;
  const response = await Model.getCategoryItem(itemID);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: 'This item does not have a category' });
  }
});

// POST category
router.post('/', authRequired, async (req, res) => {
  endpointCreator.createData('category', req, res);
});

module.exports = router;
