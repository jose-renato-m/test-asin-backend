const express = require('express');
const PokemonsController = require('./controllers/PokemonsController');

const routes = express.Router();

routes.get('/pokemons', PokemonsController.all);
routes.get('/pokemon/:id', PokemonsController.single);

module.exports = routes;
