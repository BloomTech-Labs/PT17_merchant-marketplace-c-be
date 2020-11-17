exports.seed = function (knex) {
  // Deletes ALL existing entries
  knex('category')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        { id: 1, name: 'Consumer Goods' },
        { id: 2, name: 'Billionaire Toys' },
      ]);
    });

  return knex('category_item')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('category_item').insert([
        { id: 1, item_id: 1, category_id: 1 },
        { id: 2, item_id: 2, category_id: 1 },
        { id: 3, item_id: 3, category_id: 1 },
        { id: 4, item_id: 4, category_id: 1 },
        { id: 5, item_id: 5, category_id: 1 },
        { id: 6, item_id: 6, category_id: 1 },
        { id: 7, item_id: 7, category_id: 1 },
        { id: 8, item_id: 8, category_id: 2 },
        { id: 9, item_id: 9, category_id: 2 },
      ]);
    });
};
