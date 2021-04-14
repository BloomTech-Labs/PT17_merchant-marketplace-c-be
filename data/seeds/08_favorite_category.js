exports.seed = function (knex) {
  // Inserts seed entries
  return knex('favorite_category').insert([
    { buyer_id: '00ulthapbErtuwVJy4x6', category_id: 1 },
    { buyer_id: '00ulthapbErtuwVJy4x6', category_id: 2 },
    { buyer_id: '00ulthapbEropwVJy4x6', category_id: 1 },
    { buyer_id: '00ulthapbEropwVJy4x6', category_id: 2 },
    { buyer_id: '00ulthapbEr78wVJy4x6', category_id: 1 },
    { buyer_id: '00ulthapbEr78wVJy4x6', category_id: 2 },
  ]);
};
