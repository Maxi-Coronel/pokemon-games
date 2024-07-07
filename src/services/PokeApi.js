import axios from "axios";

const API_BASE_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList =async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/pokemon?limit=1000`);
        return response.data.results.map(pokemon => pokemon.name);
    } catch (error) {
        throw error;
    }
};

export const fetchPokemonDatails = async (name) => {
    try{
        const response = await axios.get(`${API_BASE_URL}/pokemon/${name}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};