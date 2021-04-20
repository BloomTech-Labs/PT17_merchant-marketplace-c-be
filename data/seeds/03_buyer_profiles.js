exports.seed = function (knex) {
  // Inserts seed entries
  return knex('buyer_profile').insert([
    {
      id: '00ulthapbErtuwVJy4x6',
      buyer_name: 'Ron Wilson',
      email_address: 'llama101@maildrop.cc',
      physical_address: '100 Davidson Street, Maine',
      avatarUrl: '',
      description: 'Friendly',
    },

    {
      id: '00ulthapbEropwVJy4x6',
      buyer_name: 'Sally Nichols',
      email_address: 'llama102@maildrop.cc',
      physical_address: '100 Davidson Street, Maine',
      avatarUrl: '',
      description: 'Adventurous',
    },

    {
      id: '00ulthapbEr78wVJy4x6',
      buyer_name: 'Robert Holt',
      email_address: 'llama103@maildrop.cc',
      physical_address: '100 Davidson Street, Maine',
      avatarUrl: '',
      description: 'Artisan',
    },
  ]);
};