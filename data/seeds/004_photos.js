exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('photo')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('photo').insert([
        {
          id: 1,
          item_id: 1,
          url:
            'https://ucarecdn.com/cf26a935-72c5-4ea8-8bc7-6b72c0e652db/7813Heriz.jpg',
        },

        {
          id: 2,
          item_id: 2,
          url:
            'https://ucarecdn.com/c87d040a-1e0f-4711-9372-057931c55397/W501001.jpg',
        },

        {
          id: 3,
          item_id: 3,
          url:
            'https://ucarecdn.com/0a83e130-76d4-4efb-a340-b9e37fb8182e/TuftedPolypropyleneFloorCarpetTileManufacturerPVCBackingOfficeCommercialCarpetTilesBuildingMaterialsFloorCarpetTile.jpg',
        },

        {
          id: 4,
          item_id: 4,
          url:
            'https://ucarecdn.com/d838aa8d-cdee-4a81-b102-0dcb60a6c77e/71v1hQHZDML_AC_UL1200_.jpg',
        },

        {
          id: 5,
          item_id: 5,
          url:
            'https://ucarecdn.com/fb62a644-cbc1-412b-bad6-0e67ff89c1d8/6797851604336449220648.jpg',
        },

        {
          id: 6,
          item_id: 6,
          url:
            'https://ucarecdn.com/7e038723-ab8a-4b69-a208-42e1a6f320ec/dartpilee1417213657157.jpg',
        },

        {
          id: 7,
          item_id: 7,
          url:
            'https://ucarecdn.com/be984572-e392-45dd-be97-d94ed54ada75/lostbook.jpg',
        },

        {
          id: 8,
          item_id: 8,
          url:
            'https://ucarecdn.com/7306922c-ad15-4fbc-bc1c-47b8fe5a77b3/KerbalSpaceProgram2.jpg',
        },

        {
          id: 9,
          item_id: 9,
          url:
            'https://ucarecdn.com/2efcfd41-67a2-4569-ad2c-73daa58e1945/small_logo.png',
        },
      ]);
    });
};
