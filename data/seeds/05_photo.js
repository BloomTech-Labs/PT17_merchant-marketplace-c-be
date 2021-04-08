exports.seed = function (knex) {
  // Inserts seed entries
  return knex('photo').insert([
    {
      item_id: 1,
      url: 'https://chriskresser.com/wp-content/uploads/177433263.jpg',
    },
    {
      item_id: 2,
      url:
        'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/milk-dairy/2-1-3-1dairyfoods_cheese_detailfeature_thumb.jpg?sfvrsn=aba8c621_4',
    },
    {
      item_id: 3,
      url:
        'https://i.pinimg.com/736x/e9/fe/77/e9fe773d22f2e81953a0dafe25395fe2.jpg',
    },
    {
      item_id: 4,
      url:
        'https://cdn.shopify.com/s/files/1/0849/4704/products/Art-deco-rocking-chair-1_2048x2048.jpg?v=1522047892',
    },
    {
      item_id: 5,
      url: 'https://chriskresser.com/wp-content/uploads/177433263.jpg',
    },
    {
      item_id: 6,
      url:
        'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/milk-dairy/2-1-3-1dairyfoods_cheese_detailfeature_thumb.jpg?sfvrsn=aba8c621_4',
    },
    {
      item_id: 7,
      url:
        'https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/milk-dairy/2-1-3-1dairyfoods_cheese_detailfeature_thumb.jpg?sfvrsn=aba8c621_4',
    },
    {
      item_id: 8,
      url:
        'https://images-na.ssl-images-amazon.com/images/I/71c1wT84ddL._AC_SL1500_.jpg',
    },

    {
      item_id: 9,
      url:
        'https://ucarecdn.com/d838aa8d-cdee-4a81-b102-0dcb60a6c77e/71v1hQHZDML_AC_UL1200_.jpg',
    },
    {
      item_id: 10,
      url:
        'https://ucarecdn.com/fb62a644-cbc1-412b-bad6-0e67ff89c1d8/6797851604336449220648.jpg',
    },
    {
      item_id: 11,
      url:
        'https://ucarecdn.com/7e038723-ab8a-4b69-a208-42e1a6f320ec/dartpilee1417213657157.jpg',
    },
    {
      item_id: 12,
      url:
        'https://ucarecdn.com/be984572-e392-45dd-be97-d94ed54ada75/lostbook.jpg',
    },
    {
      item_id: 13,
      url:
        'https://ucarecdn.com/7306922c-ad15-4fbc-bc1c-47b8fe5a77b3/KerbalSpaceProgram2.jpg',
    },
    {
      item_id: 14,
      url:
        'https://ucarecdn.com/2efcfd41-67a2-4569-ad2c-73daa58e1945/small_logo.png',
    },
  ]);
};
