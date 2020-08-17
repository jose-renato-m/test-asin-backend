const { getAllPokemon, getSinglePokemon } = require('../../service/api.services');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pokemons').del()
    .then(async function () {
      // Inserts seed entries
      const pokemons = await getAllPokemon();

      const pokemon = await Promise.all(pokemons.data.results.map(async (item) => {
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

        const newPokemon = {
          name: singlePokemon.data.name,
          avatar: singlePokemon.data.sprites.front_default,
          order: singlePokemon.data.order,
          height: singlePokemon.data.height,
          weight: singlePokemon.data.weight
        };

        return newPokemon;
      }));

      return knex('pokemons').insert(pokemon);
    });
};
