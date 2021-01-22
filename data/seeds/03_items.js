exports.seed = function (knex) {
  // Inserts seed entries
  return knex('products').insert([
    {
      store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
      name: 'Persian rug',
      stock: 3,
      price: 34000,
      description:
        'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
      published: true,
    },

    {
      store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
      name: 'Bathroom rug!',
      stock: 40,
      price: 5,
      description:
        'Bathroom rug! Keep your feet from touching cold tile. Complete garbage!',
      published: true,
    },

    {
      store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
      name: 'Office carpet!',
      stock: 7000,
      price: 50,
      description:
        'Colorless office carpeting! Stain resistant and optically offensive!',
      published: true,
    },

    {
      store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
      name: 'Another Persian rug!',
      stock: 5,
      price: 44000,
      description:
        'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
      published: true,
    },

    {
      store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
      name: 'Persian rug, but better!',
      stock: 5,
      price: 44000,
      description:
        'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
      published: true,
    },

    {
      store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
      name: 'Persian rug, again',
      stock: 5,
      price: 44000,
      description:
        'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
      published: true,
    },

    {
      store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
      name: 'Persian Rug',
      stock: 5,
      price: 44000,
      description: 'Are we serious with all of these persion rugs? Yes we are!',
      published: true,
    },

    {
      store_id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
      name: 'Final Persian Rug',
      stock: 5,
      price: 44000,
      description: 'Are we serious with all of these persion rugs? Yes we are!',
      published: true,
    },

    {
      store_id: '00ultwew80Onb2vOT4x6-Nicholas_Mullen',
      name: 'Hawaiian shirt',
      stock: 1,
      price: 200,
      description: 'Casual but stylish. Excellent for unwanted office jobs.',
      published: true,
    },

    {
      store_id: '00ultwew80Onb2vOT4x6-Nicholas_Mullen',
      name: 'Champagne gold, 1997 Toyota Camry',
      stock: 1,
      price: 0,
      description:
        'Just take it off my hands. Totally reliable and unblievably unsightly.',
      published: true,
    },

    {
      store_id: '00ultwew80Onb2vOT4x6-Nicholas_Mullen',
      name: 'Mixed ammunition',
      stock: 90000,
      price: 1,
      description:
        'Loads of the stuff! Buy in boxes, buckets, pallets! Prepare for the Apocalypse.',
      published: true,
    },

    {
      store_id: "00ultx74kMUmEW8054x6-Bezo's_Enterprises",
      name: 'Book',
      stock: 1,
      price: 10,
      description: 'Paperback. Like new. Subject unknown.',
      published: false,
    },

    {
      store_id: "00ultx74kMUmEW8054x6-Bezo's_Enterprises",
      name: 'Rocket',
      stock: 3,
      price: 9999999.99,
      description: "Cool, but it doesn't go as high as Elon's.",
      published: true,
    },

    {
      store_id: "00ultx74kMUmEW8054x6-Bezo's_Enterprises",
      name: 'Washington Post',
      stock: 1,
      price: 2500000,
      description:
        'Gold plate your reputation and legacy! Gain political capital! Slander your enemies!',
      published: true,
    },
  ]);
};
