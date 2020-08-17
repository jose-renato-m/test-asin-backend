exports.up = function(knex) {
  return knex.schema.createTable('abilities', (table) => {
    table.increments('id');
    table.string('ability').notNullable();

    table.string('pokemon_name')
      .notNullable()
      .references('name')
      .inTable('pokemons')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('abilities');
}
