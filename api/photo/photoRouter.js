const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('../globalModel');
const router = express.Router();
const endpointCreator = require('../endPoints');

// GET a photos item id
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
router.post('/', authRequired, async (req, res) => {
  endpointCreator.createData('photo', req, res);
});

module.exports = router;
