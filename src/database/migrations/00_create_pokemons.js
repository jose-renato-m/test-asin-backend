exports.up = function(knex) {
  return knex.schema.createTable('pokemons', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('order').notNullable();
    table.string('height').notNullable();
    table.string('weight').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pokemons');
}
