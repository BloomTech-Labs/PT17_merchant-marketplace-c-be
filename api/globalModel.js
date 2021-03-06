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
  console.log('hello');
  return db('item as i')
    .join('category_item as ci', {
      'ci.item_id': 'i.id',
    })
    .join('photo as p', { 'i.id': 'p.id' })
    .select('i.*', 'ci.category_id', 'p.url')
    .where({ 'ci.category_id': categoryID, 'i.published': true });
};

//GET all items master model for db search
const getAllItemInfo = async (query) => {
  let allItems = db('item as i')
    .join('photo as p', 'i.id', 'p.id')
    .join('category_item as ci', 'ci.item_id', 'i.id')
    .select(
      'i.item_name',
      'i.description',
      'i.quantity_available',
      'i.price_in_cents',
      'i.seller_profile_id',
      'p.url',
      'p.id',
      'ci.category_id'
    );
  // params: q, c, pH, pL

  // need to figure out way to first filter by category
  if (query['c']) {
    // will get all items matching category
    // want to compare item_id from category_item to id from allItems
    allItems.where('ci.category_id', '=', `${query['c']}`);
  }
  if (query['q']) {
    allItems.where('i.item_name', 'ilike', `%${query['q']}%`);
  }
  // sort by price high first
  if (query['p'] === 'desc') {
    allItems.orderBy('price_in_cents', 'desc');
  }
  // sort price low first
  if (query['p'] === 'asc') {
    allItems.orderBy('price_in_cents', 'asc');
  }
  return allItems.where({ 'i.published': true });
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
};
