const { getAllPokemon, getSinglePokemon } = require('../../service/api.services');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(async function () {
      // Inserts seed entries
      const pokemons = await getAllPokemon();

  const pokemonType = await Promise.all(pokemons.data.results.map(async (item) => {
    const [, splitedId] = item.url.split('pokemon');

    function replaceAll({ string, search, replace }) {
      return string.split(search).join(replace);
    }

    const id = replaceAll({
      string: splitedId,
      search: '/',
      replace: '',
    });

    const singlePokemon = await getSinglePokemon({ id });

    function findTypeColor(type) {
      if (type === 'grass') {
        return '#48d0b0'
      }

      else if (type === 'fire') {
        return '#fb6c6c'
      }

      else if (type === 'water') {
        return '#77bdfe'
      }

      else if (type === 'bug') {
        return '#6a8b5a'
      }

      else {
        return '#cd835a'
      }
    }

    const newType = {
      pokemon_name: singlePokemon.data.name,
      type: singlePokemon.data.types.map(item => item.type.name),
      color: findTypeColor(singlePokemon.data.types[0].type.name)
    };

    return newType;
  }));

      return knex('types').insert(pokemonType);
    });
};
