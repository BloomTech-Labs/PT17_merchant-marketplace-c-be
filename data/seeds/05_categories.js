exports.seed = function (knex) {
  // Inserts seed entries
  return knex('categories').insert([
    { category_name: 'Consumer Goods' },
    { category_name: 'Billionaire Toys' },
  ]);
};
