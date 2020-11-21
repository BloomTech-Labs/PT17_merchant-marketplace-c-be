const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('../globalModel');
const router = express.Router();

// GET items by profile ID
router.get('/profile/:profileID/', authRequired, async (req, res) => {
  const profileID = String(req.params.profileID);
  const response = await Model.findItemByProfile(profileID);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: 'You have not created any products' });
  }
});
// get item by id
router.get('/:itemID', authRequired, async (req, res) => {
  const { itemID } = req.params;
  const response = await Model.findAllProducts('item', itemID);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: 'Could not find this item' });
  }
});

// POST profile can create an item
router.post('/', authRequired, async (req, res) => {
  const data = req.body;
  const response = await Model.create('item', data);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: 'There was a problem creating an item' });
  }
});
// PUT profile can edit an item
router.put('/:productId', authRequired, async (req, res) => {
  const data = req.body;
  const { productId } = req.params;
  const response = await Model.update('item', productId, data);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: `You have updated ${data.name}` });
  }
});
// DELETE profile can delete an item
router.delete('/:productId/', authRequired, async (req, res) => {
  const { productId } = req.params;
  const response = await Model.remove('item', productId);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: `You have deleted ${productId}` });
  }
});

module.exports = router;
