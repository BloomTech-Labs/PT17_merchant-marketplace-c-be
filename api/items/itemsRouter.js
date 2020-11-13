const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('../globalModel');
const router = express.Router();

// GET items
router.get('/:profileID/', authRequired, async (req, res) => {
  const { profileID } = req.params;
  const response = await Model.findAllProducts('item', profileID);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: 'You have not created any products' });
  }
});

router.post('/', authRequired, async (req, res) => {
  const data = req.body;
  const response = await Model.create('item', data);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: 'There was a problem creating an item' });
  }
});

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

router.delete('/:productId/', authRequired, async (req, res) => {
  const { productId } = req.params;
  const response = await Model.delete('item', productId);
  if (response) {
    res.status(200).json(response);
  } else {
    res.status(404).json({ message: `You have deleted ${productId}` });
  }
});

module.exports = router;
