const pokemons = require('./data/pokemons.json');
const { Router } = require('express');

const routes = Router();

routes.get('/pokemons', (req, res) => {
  res.send(pokemons);
});

module.exports = routes;