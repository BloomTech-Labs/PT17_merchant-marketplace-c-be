exports.seed = function (knex) {
  // Inserts seed entries
  return knex('item').insert([
    {
      seller_profile_id: '00ulthapbErVUwVJy4x6',
      item_name: 'Olive Oil',
      quantity_available: 3,
      price_in_cents: 34,
      description: 'Cold-Pressed',
      published: true,
      pickup: false,
      delivery: true,
    },

    {
      seller_profile_id: '00ulthapbErVUwVJy4x6',
      item_name: 'Cheese',
      quantity_available: 40,
      price_in_cents: 500,
      description: 'Muenster',
      published: true,
      pickup: false,
      delivery: true,
    },

    {
      seller_profile_id: '00ulthapbErVUwVJy4x6',
      item_name: 'Coffee Table',
      quantity_available: 7000,
      price_in_cents: 5000,
      description: 'Hand made Western Coffee Table',
      published: true,
      pickup: false,
      delivery: true,
    },

    {
      seller_profile_id: '00ulthapbErVUwVJy4x6',
      item_name: 'Rocking Chair',
      quantity_available: 5,
      price_in_cents: 4400000,
      description: 'Country Porch Staple',
      published: true,
      pickup: false,
      delivery: true,
    },

    {
      seller_profile_id: '00ulthapbErVUwVJy4x6',
      item_name: 'Olive Oil',
      quantity_available: 5,
      price_in_cents: 4400000,
      description: 'Extra Virgin',
      published: true,
      pickup: true,
      delivery: true,
    },

    {
      seller_profile_id: '00ulthapbErVUwVJy4x6',
      item_name: 'Cheese',
      quantity_available: 5,
      price_in_cents: 4400000,
      description: 'Brie',
      published: true,
      pickup: true,
      delivery: true,
    },

    {
      seller_profile_id: '00ulthapbErVUwVJy4x6',
      item_name: 'Cheese',
      quantity_available: 5,
      price_in_cents: 4400000,
      description: 'Cheddar',
      published: true,
      pickup: true,
      delivery: true,
    },

    {
      seller_profile_id: '00ulthapbErVUwVJy4x6',
      item_name: 'Puzzle Box',
      quantity_available: 5,
      price_in_cents: 4400000,
      description: 'Storage for Puzzles',
      published: true,
      pickup: true,
      delivery: true,
    },

    {
      seller_profile_id: '00ultwew80Onb2vOT4x6',
      item_name: 'Hawaiian shirt',
      quantity_available: 1,
      price_in_cents: 20000,
      description: 'Casual but stylish. Excellent for unwanted office jobs.',
      published: true,
      pickup: true,
      delivery: false,
    },

    {
      seller_profile_id: '00ultwew80Onb2vOT4x6',
      item_name: 'Champagne gold, 1997 Toyota Camry',
      quantity_available: 1,
      price_in_cents: 0,
      description:
        'Just take it off my hands. Totally reliable and unblievably unsightly.',
      published: true,
      pickup: true,
      delivery: false,
    },

    {
      seller_profile_id: '00ultwew80Onb2vOT4x6',
      item_name: 'Mixed ammunition',
      quantity_available: 90000,
      price_in_cents: 100,
      description:
        'Loads of the stuff! Buy in boxes, buckets, pallets! Prepare for the Apocalypse.',
      published: true,
      pickup: true,
      delivery: false,
    },

    {
      seller_profile_id: '00ultx74kMUmEW8054x6',
      item_name: 'Book',
      quantity_available: 1,
      price_in_cents: 1000,
      description: 'Paperback. Like new. Subject unknown.',
      published: false,
      pickup: true,
      delivery: false,
    },

    {
      seller_profile_id: '00ultx74kMUmEW8054x6',
      item_name: 'Rocket',
      quantity_available: 3,
      price_in_cents: 999999999,
      description: "Cool, but it doesn't go as high as Elon's.",
      published: true,
      pickup: true,
      delivery: false,
    },

    {
      seller_profile_id: '00ultx74kMUmEW8054x6',
      item_name: 'Washington Post',
      quantity_available: 1,
      price_in_cents: 250000000,
      description:
        'Gold plate your reputation and legacy! Gain political capital! Slander your enemies!',
      published: true,
      pickup: true,
      delivery: false,
    },
  ]);
};
