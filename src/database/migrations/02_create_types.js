exports.up = function(knex) {
  return knex.schema.createTable('types', (table) => {
    table.increments('id');
    table.string('type').notNullable();
    table.string('color').notNullable();

    table.string('pokemon_name')
      .notNullable()
      .references('name')
      .inTable('pokemons')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('types');
};
