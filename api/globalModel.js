const db = require('../data/db-config');

const findAll = async (text) => {
  return await db(text);
};

const findAllProducts = async (text, id) => {
  return await db(text).select('*').where({ id });
};

const findBy = (text, filter) => {
  return db(text).where(filter);
};

const findById = async (text, id) => {
  return db(text).where({ id }).first().select('*');
};

const create = async (text, profile) => {
  return db(text).insert(profile).returning('*');
};
const createAndInsertById = async (text, item, id) => {
  return db(text).insert(item).where(id).returning('*');
};

const update = (text, id, obj) => {
  return db(text).where({ id: id }).first().update(obj).returning('*');
};

const remove = async (text, id) => {
  return await db(text).where({ id }).del();
};

const findOrCreate = async (obj) => {
  const foundItem = await findById(obj.id).then((item) => item);
  if (foundItem) {
    return foundItem;
  } else {
    return await create(obj).then((newItem) => {
      return newItem ? newItem[0] : newItem;
    });
  }
};

module.exports = {
  findAll,
  findBy,
  findById,
  create,
  update,
  remove,
  findOrCreate,
  findAllProducts,
  createAndInsertById,
};
