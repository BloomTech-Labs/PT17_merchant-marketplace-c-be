const db = require('../data/db-config');

const findAll = async (text) => {
  return await db(text);
};

const findItemByProfile = async (seller_profile_id) => {
  return await db('item').select('*').where({ seller_profile_id });
};

const createBySellerID = async (sellerID, item) => {
  return await db('item').insert(item).where({ seller_profile_id: sellerID });
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
  return db(text).insert(item).where({ id });
};

const update = (text, id, obj) => {
  return db(text).where({ id: id }).first().update(obj).returning('*');
};

const remove = async (text, id) => {
  return await db(text).where({ id }).del();
};

const favorites = async (id) => {
  return db('favorite_category as fc ')
    .join('buyer_profile as bp', 'bp.id', 'fc.buyer_profile_id')
    .where({ 'fc.buyer_profile_id': id })
    .returning('*');
};

const findOrCreate = async (text, obj) => {
  const foundObj = await findById(text, obj.id).then((obj) => obj);
  if (foundObj) {
    return foundObj;
  } else {
    return await create(text, obj).then((newObj) => {
      return newObj ? newObj[0] : newObj;
    });
  }
};

// GET items based on category
const getItemByCategoryID = async (categoryID) => {
  return db('item as i')
    .join('category_item as ci', {
      'ci.item_id': 'i.id',
    })
    .select('i.*', 'ci.category_id')
    .where({ 'ci.category_id': categoryID, 'i.published': true });
};

//GET all items
const getAllItemInfo = async () => {
  return db('item as i')
    .join('photo as p', 'i.id', 'p.id')
    .select(
      'i.item_name',
      'i.description',
      'i.quantity_available',
      'i.price_in_cents',
      'i.seller_profile_id',
      'p.url',
      'p.id'
    )
    .where({ 'i.published': true });
};

const search = async (query) => {
  return db('item as i')
    .join('photo as p', 'i.id', 'p.id')
    .select(
      'i.item_name',
      'i.description',
      'i.quantity_available',
      'i.price_in_cents',
      'i.seller_profile_id',
      'p.url',
      'p.id'
    )
    .where('i.item_name', 'ilike', `%${query}%`);
};

// GET info from join table
const getCategoryItem = async (itemID) => {
  return db('item as i')
    .join('category_item as ci', 'i.id', 'ci.item_id')
    .join('category as c', 'c.id', 'ci.category_id')
    .where('ci.item_id', itemID)
    .returning('*');
};

// GET info from join table
const getPhotoByItemID = async (itemID) => {
  return db('photo').where({ item_id: itemID }).select('*');
};

//connect categories and items
const connectItemsAndCategories = async (itemID, catID) => {
  return db('category_item').insert({ item_id: itemID, category_id: catID });
};

module.exports = {
  findAll,
  findBy,
  findById,
  findItemByProfile,
  create,
  update,
  remove,
  findOrCreate,
  findAllProducts,
  getCategoryItem,
  getAllItemInfo,
  createAndInsertById,
  getPhotoByItemID,
  createBySellerID,
  connectItemsAndCategories,
  getItemByCategoryID,
  favorites,
  search,
};
