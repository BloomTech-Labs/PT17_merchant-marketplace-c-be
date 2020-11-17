exports.seed = function (knex) {
  // Deletes ALL existing entries
  knex('tag')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('tag').insert([
        { id: 1, name: 'junk' },
        { id: 2, name: 'clothes' },
        { id: 3, name: 'poor quality' },
        { id: 4, name: 'good quality' },
        { id: 5, name: 'media' },
        { id: 6, name: 'space' },
      ]);
    });

  return knex('tag_item')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('tag_item').insert([
        { id: 1, item_id: 1, tag_id: 4 },
        { id: 2, item_id: 2, tag_id: 3 },
        { id: 3, item_id: 2, tag_id: 1 },
        { id: 4, item_id: 3, tag_id: 4 },
        { id: 5, item_id: 4, tag_id: 2 },
        { id: 6, item_id: 4, tag_id: 4 },
        { id: 7, item_id: 5, tag_id: 1 },
        { id: 8, item_id: 6, tag_id: 4 },
        { id: 9, item_id: 7, tag_id: 5 },
        { id: 10, item_id: 7, tag_id: 4 },
        { id: 11, item_id: 8, tag_id: 6 },
        { id: 12, item_id: 8, tag_id: 4 },
        { id: 13, item_id: 9, tag_id: 5 },
        { id: 14, item_id: 9, tag_id: 3 },
      ]);
    });
};
