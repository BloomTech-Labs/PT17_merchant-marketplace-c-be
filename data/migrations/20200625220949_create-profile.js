exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.string('billing_address').notNullable();
      table.string('shipping_address');
      table.string('avatarUrl');
      table.boolean('merchant').notNullable().defaultTo(false);
      table.timestamps(true, true);
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('profiles');
};
