exports.up = function(knex) {
    return knex.schema.createTable('seller_profile', tb => {
        tb.increments();
        tb.string('okta_id', 255).unique().notNullable();
    });

    return knex.schema.createTable('item', tb => {
        tb.increments();
        tb.string('name', 255);
        tb.text('description');
        tb.integer('quantity_available').notNullable().unsigned().defaultTo(0);
        tb.integer('price_in_cents').notNullable().unsigned();
        tb.boolean('published').notNullable().defaultTo(false);
        tb.integer('seller_profile_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('seller_profile')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
  
    return knex.schema.createTable('photo', tb => {
        tb.increments();
        tb.string('url' 255);
        tb.integer('item_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('item')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });

    return knex.schema.createTable('category', tb => {
        tb.increments();
        tb.string('name' 255);
    });

    return knex.schema.createTable('category_item', tb => {
        tb.increments();
        tb.integer('item_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('item')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tb.integer('category_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('category')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });

    return knex.schema.createTable('tag', tb => {
        tb.increments();
        tb.string('name' 255);
    });

    return knex.schema.createTable('tag_item', tb => {
        tb.increments();
        tb.integer('item_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('item')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tb.integer('tag_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('tag')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExist('seller_profile');
    return knex.schema.dropTableIfExist('item');
    return knex.schema.dropTableIfExist('photo');
    return knex.schema.dropTableIfExist('category');
    return knex.schema.dropTableIfExist('category_item');
    return knex.schema.dropTableIfExist('tag');
    return knex.schema.dropTableIfExist('tag_item');
};

