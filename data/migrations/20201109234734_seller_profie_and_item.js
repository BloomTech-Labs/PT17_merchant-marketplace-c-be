exports.up = function (knex) {
  return knex.schema
    .createTable('stores', (tb) => {
      tb.string('id', 255).unique().notNullable().primary();
      tb.string('name', 255).notNullable().unique();
      tb.text('description');
      tb.string('address', 255);
      tb.string('phone_number', 255);
      tb.string('merchant_id')
        .notNullable()
        .unique()
        .references('profiles.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })
    .createTable('categories', (tb) => {
      tb.increments();
      tb.string('category_name', 255);
    })
    .createTable('tags', (tb) => {
      tb.increments();
      tb.string('tag_name', 255);
    })
    .createTable('products', (tb) => {
      tb.increments();
      tb.string('name', 255);
      tb.integer('stock').notNullable().unsigned().defaultTo(0);
      tb.double('price').notNullable().defaultTo(0.99);
      tb.text('description');
      tb.boolean('published').notNullable().defaultTo(false);
      tb.string('store_id')
        .notNullable()
        .references('stores.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('product_images', (tb) => {
      tb.increments();
      tb.string('url', 255);
      tb.integer('product_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('product_categories', (tb) => {
      tb.integer('product_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('categories')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.primary(['product_id', 'category_id']);
    })
    .createTable('product_tags', (tb) => {
      tb.integer('product_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.integer('tag_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tags')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tb.primary(['product_id', 'tag_id']);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('product_tags')
    .dropTableIfExists('product_categories')
    .dropTableIfExists('product_images')
    .dropTableIfExists('products')
    .dropTableIfExists('tags')
    .dropTableIfExists('categories')
    .dropTableIfExists('stores');
};
