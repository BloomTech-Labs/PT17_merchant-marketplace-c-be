const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('../globalModel');
const router = express.Router();

// GET a photo item id
router.get('/:itemID', authRequired, async (req, res) => {
  const { itemID } = req.params;
  const response = await Model.getPhotoByItemID(itemID);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).send({ message: 'This item does not have photos' });
  }
});
// POST a photo for an item
router.post('/:itemID', authRequired, async (req, res) => {
  const data = req.body;
  const { itemID } = req.params;
  const response = await Model.createAndInsertById('photo', data, itemID);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({
      message: 'You have successfully created a photo for the item',
    });
  }
});

module.exports = router;
