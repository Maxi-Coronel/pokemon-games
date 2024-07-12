import axios from 'axios';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonByName = async (name) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
};

export const getPokemonByRange = async (start, limit = 24) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemon`, {
      params: { offset: start, limit }
    });
    const pokemonPromises = response.data.results.map(p => axios.get(p.url));
    const pokemons = await Promise.all(pokemonPromises);
    return pokemons.map(p => p.data);
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
};

export const getGames = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/version-group`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};

export const getPokemonByGame = async (gameName, offset = 0, limit = 24) => {
  try {
    const gameResponse = await axios.get(`${API_BASE_URL}/version-group/${gameName}`);
    const pokedexUrl = gameResponse.data.pokedexes[0].url;
    const pokedexResponse = await axios.get(pokedexUrl);
    const pokemonEntries = pokedexResponse.data.pokemon_entries.slice(offset, offset + limit);
    const pokemonPromises = pokemonEntries.map(entry => axios.get(entry.pokemon_species.url));
    const pokemons = await Promise.all(pokemonPromises);
    const detailedPokemons = await Promise.all(
      pokemons.map(async (p) => {
        const details = await axios.get(`${API_BASE_URL}/pokemon/${p.data.id}`);
        return details.data;
      })
    );
    return detailedPokemons;
  } catch (error) {
    console.error("Error fetching Pokémon by game:", error);
    throw error;
  }
};