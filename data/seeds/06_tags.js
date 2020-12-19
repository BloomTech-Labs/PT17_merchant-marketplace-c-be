exports.seed = function (knex) {
  // Inserts seed entries
  return knex('tag').insert([
    { tag_name: 'junk' },
    { tag_name: 'clothes' },
    { tag_name: 'poor quality' },
    { tag_name: 'good quality' },
    { tag_name: 'media' },
    { tag_name: 'space' },
  ]);
};
