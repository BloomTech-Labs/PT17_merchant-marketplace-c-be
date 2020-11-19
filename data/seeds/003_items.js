exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('item')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('item').insert([
        {
          id: 1,
          seller_profile_id: '00ulthapbErVUwVJy4x6',
          name: 'Persian rug',
          quantity_available: 3,
          price_in_cents: 3400000,
          description:
            'Fancy rug! Great pattern! Perfect for living room, wall or sauna!',
          published: true,
        },

        {
          id: 2,
          seller_profile_id: '00ulthapbErVUwVJy4x6',
          name: 'Bathroom rug!',
          quantity_available: 40,
          price_in_cents: 500,
          description:
            'Bathroom rug! Keep your feet from touching cold tile. Complete garbage!',
          published: true,
        },

        {
          id: 3,
          seller_profile_id: '00ulthapbErVUwVJy4x6',
          name: 'Office carpet!',
          quantity_available: 7000,
          price_in_cents: 5000,
          description:
            'Colorless office carpeting! Stain resistant and optically offensive!',
          published: true,
        },

        {
          id: 4,
          seller_profile_id: '00ultwew80Onb2vOT4x6',
          name: 'Hawaiian shirt',
          quantity_available: 1,
          price_in_cents: 20000,
          description:
            'Casual but stylish. Excellent for unwanted office jobs.',
          published: true,
        },

        {
          id: 5,
          seller_profile_id: '00ultwew80Onb2vOT4x6',
          name: 'Champagne gold, 1997 Toyota Camry',
          quantity_available: 1,
          price_in_cents: 0,
          description:
            'Just take it off my hands. Totally reliable and unblievably unsightly.',
          published: true,
        },

        {
          id: 6,
          seller_profile_id: '00ultwew80Onb2vOT4x6',
          name: 'Mixed ammunition',
          quantity_available: 90000,
          price_in_cents: 100,
          description:
            'Loads of the stuff! Buy in boxes, buckets, pallets! Prepare for the Apocalypse.',
          published: true,
        },

        {
          id: 7,
          seller_profile_id: '00ultx74kMUmEW8054x6',
          name: 'Book',
          quantity_available: 1,
          price_in_cents: 1000,
          description: 'Paperback. Like new. Subject unknown.',
          published: false,
        },

        {
          id: 8,
          seller_profile_id: '00ultx74kMUmEW8054x6',
          name: 'Rocket',
          quantity_available: 3,
          price_in_cents: 999999999,
          description: "Cool, but it doesn't go as high as Elon's.",
          published: true,
        },

        {
          id: 9,
          seller_profile_id: '00ultx74kMUmEW8054x6',
          name: 'Washington Post',
          quantity_available: 1,
          price_in_cents: 250000000,
          description:
            'Gold plate your reputation and legacy! Gain political capital! Slander your enemies!',
          published: true,
        },
      ]);
    });
};
