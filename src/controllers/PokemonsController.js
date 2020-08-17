const db = require('../database/connection');

module.exports = {
  async all(request, response) {
    const pokemons = await db('pokemons')
      .join('types', 'types.pokemon_name', '=', 'pokemons.name')
      .join('abilities', 'abilities.pokemon_name', '=', 'pokemons.name')
      .select(['abilities.*', 'pokemons.*', 'types.*']);

    return response.json(pokemons);
  },

  async single(request, response) {
    const { id } = request.params;

    if (!id) {
      return response.status(400).json({
        error: 'Missing id to search pokemon'
      })
    };

    const pokemon = await db('pokemons')
      .join('types', 'types.pokemon_name', '=', 'pokemons.name')
      .join('abilities', 'abilities.pokemon_name', '=', 'pokemons.name')
      .select(['abilities.*', 'pokemons.*', 'types.*'])
      .where('pokemons.id', id);

    return response.json(pokemon);
  }
}
