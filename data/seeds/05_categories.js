exports.seed = function (knex) {
  // Deletes ALL existing entries


      // Inserts seed entries
      return knex('category').insert([
        {  category_name: 'Consumer Goods' },
        {  category_name: 'Billionaire Toys' },
      ]);

};
