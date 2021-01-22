exports.seed = function (knex) {
  // Inserts seed entries
  return knex('stores').insert([
    {
      id: '00ulthapbErVUwVJy4x6-SuperStore_Rug_Emporium',
      name: 'SuperStore Rug Emporium',
      phone_number: '(555) 444-3333',
      address: '100 Davidson Street, Maine',
      description: 'Rugs, Rugs, Rugs! Discount Rugs, Fine Rugs, Bathroom Rugs!',
      merchant_id: '00ulthapbErVUwVJy4x6',
    },

    {
      id: '00ultwew80Onb2vOT4x6-Nicholas_Mullen',
      name: 'Nicholas Mullen',
      phone_number: '(555) 123-4567',
      address: '35 Sampsonite Avenue, Lingdon Nevada, 22556',
      description:
        'Selling my personal Junk: Hawaiian shirts, mixed ammunition, unmatched fine china.',
      merchant_id: '00ultwew80Onb2vOT4x6',
    },

    {
      id: "00ultx74kMUmEW8054x6-Bezo's_Enterprises",
      name: "Bezo's Enterprises",
      phone_number: '(555) 987-6543',
      address: '1378 California Drive, California, 00012',
      description: 'Books, Rockets, Washington News Media',
      merchant_id: '00ultx74kMUmEW8054x6',
    },
  ]);
};
