const api = require('./api');

module.exports = {
  async getAllPokemon() {
    const response = await api.get('pokemon/?offset=0&limit=50');

    return response;
  },

  async getSinglePokemon ({ id }) {
    const response = await api.get(`/pokemon/${id}`);

    return response;
  }
}
