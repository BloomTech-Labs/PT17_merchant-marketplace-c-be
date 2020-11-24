const Model = require('./globalModel');
const helper = require('./helper');

module.exports = {
  createData,
  deleteData,
  findAllData,
};
async function createData(table, req, res) {
  const data = req.body;
  const response = await Model.create(table, data);
  try {
    res.status(201).json(response);
  } catch {
    res.status(404).json({ message: 'There was a problem creating an item' });
  }
}

async function deleteData(table, req, res) {
  const { productId } = req.params;
  const response = await Model.remove(table, productId);
  try {
    if (response) {
      res.status(200).send(productId);
    } else {
      helper.notFound(table, res);
    }
  } catch {
    helper.dbError(res);
  }
}

async function findAllData(table, req, res) {
  const response = await Model.findAll(table);
  try {
    if (response) {
      res.status(200).json(response);
    } else {
      helper.notFound(table, res);
    }
  } catch {
    helper.dbError(res);
  }
}
