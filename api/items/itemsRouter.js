const express = require('express');
const authRequired = require('../middleware/authRequired');
const Model = require('../globalModel');
const endpointCreator = require('../endPoints');
const helper = require('../helper');
const router = express.Router();
const queryString = require('../middleware/query_string');

// GET items by profile ID
router.get('/profile/:profileID/', authRequired, async (req, res) => {
  const profileID = String(req.params.profileID);
  const response = await Model.findItemByProfile(profileID);
  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound('items');
    }
  } catch {
    helper.notFound(res);
  }
});

// get item by id
router.get('/:itemID', authRequired, async (req, res) => {
  const { itemID } = req.params;
  const response = await Model.findAllProducts('item', itemID);
  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound('items', res);
    }
  } catch {
    helper.dbError(res);
  }
});

// GET all items
router.get('/', queryString, async (req, res) => {
  const { itemID } = req.params;
  const response = await Model.getAllItemInfo('item', itemID);
  try {
    if (response) {
      res
        .status(200)
        .json({ message: `Retrieved all available items`, items: response });
    } else {
      res.status(404).json({ message: 'Unable to retrieve available items' });
    }
  } catch {
    helper.dbError(res);
  }
});

// GET items by category id
router.get('/category/:categoryID', authRequired, async (req, res) => {
  const { categoryID } = req.params;

  try {
    const response = await Model.getItemByCategoryID(Number(categoryID));

    if (response.length === 0) {
      res.status(404).json({
        message: `Category with id ${categoryID} is empty or does not exist`,
      });
    } else {
      console.log(response.length);
      res.status(200).json(response);
    }
  } catch {
    helper.dbError(res);
  }
});

// POST profile can create an item
router.post('/', authRequired, async (req, res) => {
  endpointCreator.createData('item', req, res);
});

// PUT profile can edit an item
router.put('/:productId', authRequired, async (req, res) => {
  const data = req.body;
  const { productId } = req.params;
  const response = await Model.update('item', productId, data);
  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound('items', res);
    }
  } catch {
    helper.dbError(res);
  }
});

// DELETE profile can delete an item
router.delete('/:productId/', authRequired, async (req, res) => {
  endpointCreator.deleteData('item', req, res);
});

//POST items and tags are connected
router.post('/:itemID/tag/:tagID', authRequired, async (req, res) => {
  const { itemID, tagID } = req.params;
  const response = await Model.connectItemsAndTags(itemID, tagID);
  try {
    if (response) {
      res
        .status(200)
        .json({ message: `You have added tag: ${tagID} to item: ${itemID}` });
    } else {
      res.status(404).json({ message: 'You cannot add this tag' });
    }
  } catch (err) {
    helper.dbError(res);
  }
});

//POST items and categories are connected
router.post('/:itemID/categories/:catID', async (req, res) => {
  const { itemID, catID } = req.params;
  const response = await Model.connectItemsAndCategories(itemID, catID);
  try {
    if (response) {
      res.status(200).json({
        message: `You have added category: ${catID} to item: ${itemID}`,
      });
    } else {
      res.status(404).json({ message: 'You cannot add this category' });
    }
  } catch (err) {
    helper.dbError(res);
  }
});
module.exports = router;
