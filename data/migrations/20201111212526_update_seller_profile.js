
exports.up = function (knex) {
  return knex.schema.table('seller_profile', (tb) => {
    tb.string('name', 255);
    tb.string('email_address', 255);
    tb.string('phone_number', 255);
    tb.text('description');
    tb.text('physical_address');
  });
};

exports.down = function (knex) {
  return knex.schema.table('seller_profile', (tb) => {
    tb.dropColumns(
      'name',
      'email_address',
      'phone_number',
      'description',
      'physical_address'
    );
  });
};
