const { getAllPokemon, getSinglePokemon } = require('../../service/api.services');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('abilities').del()
    .then(async function () {
      // Inserts seed entries
      const pokemons = await getAllPokemon();

      const pokemonAbility = await Promise.all(pokemons.data.results.map(async (item) => {
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

        const newAbility = {
          pokemon_name: singlePokemon.data.name,
          ability: singlePokemon.data.abilities.map(item => item.ability.name),
        };

        return newAbility;
      }));

      return knex('abilities').insert(pokemonAbility);
    });
};
