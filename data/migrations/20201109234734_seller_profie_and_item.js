exports.up = function (knex) {
  return knex.schema
    .createTable('seller_profile', (tb) => {
      tb.string('id', 255).unique().notNullable().primary();
      tb.string('seller_name', 255);
      tb.string('email_address', 255);
      tb.string('phone_number', 255);
      tb.string('physical_address', 255);
      tb.text('description');
    })
    .createTable('buyer_profile', (tb) => {
      tb.string('id', 255).unique().notNullable().primary();
      tb.string('buyer_name', 255);
      tb.string('email_address', 255);
      tb.string('physical_address', 255);
      tb.string('avatarUrl').nullable();
      tb.string('description');
    })
    .createTable('category', (tb) => {
      tb.increments();
      tb.string('category_name', 255);
    })
    .createTable('favorite_category', (tb) => {
      tb.increments();
      tb.integer('category_id')
        .references('id')
        .inTable('category')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.string('buyer_profile_id')
        .notNullable()
        .references('id')
        .inTable('buyer_profile')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('item', (tb) => {
      tb.increments();
      tb.string('item_name', 255);
      tb.text('description');
      tb.integer('quantity_available').notNullable().unsigned().defaultTo(0);
      tb.integer('price_in_cents').notNullable().unsigned();
      tb.boolean('published').notNullable().defaultTo(false);
      tb.string('seller_profile_id')
        .notNullable()
        .references('id')
        .inTable('seller_profile')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.boolean('pickup').defaultTo(false);
      tb.boolean('delivery').defaultTo(false);
    })
    .createTable('photo', (tb) => {
      tb.increments();
      tb.string('url', 255);
      tb.integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('item')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('category_item', (tb) => {
      tb.integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('item')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('category')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('category_item')
    .dropTableIfExists('favorite_category')
    .dropTableIfExists('photo')
    .dropTableIfExists('item')
    .dropTableIfExists('category')
    .dropTableIfExists('seller_profile')
    .dropTableIfExists('buyer_profile');
};
