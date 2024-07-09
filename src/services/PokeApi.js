import axios from "axios";

const API_BASE_URL = 'https://pokeapi.co/api/v2';

export const getGames = async () => {
    const response = await axios.get(`${API_BASE_URL}/version-group/`);
    return response.data.results.map(game => game.name);
};

export const getPokemonsByGame = async (game) => {
    const response = await axios.get(`${API_BASE_URL}/version-group/${game}`);
    const pokedexUrl = response.data.pokedexes[0].url;
    const pokedexResponse = await axios.get(pokedexUrl);
    return pokedexResponse.data.pokemon_entries.map(entry => entry.pokemon_species.name);
}

export const fetchPokemonList =async () => {
    const response = await axios.get(`${API_BASE_URL}/pokemon?limit=1000`);
    return response.data.results.map(pokemon => pokemon.name);
};

export const getPokemonDatails = async (name) => {
    const response = await axios.get(`${API_BASE_URL}/pokemon/${name}`);
    return response.data;
};