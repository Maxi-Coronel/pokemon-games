import React, { useState, useEffect } from "react";
import { fetchPokemonDatails } from '../../../services/PokeApi'

const Pokemon = ({name}) => {
    const [pokemon, setPokemon] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getPokemonDetails = async() => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchPokemonDatails(name);
                setPokemon(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false)
            }
        };

        if (name) {
            getPokemonDetails();
        }
    },[name]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>Height: {pokemon.heigth}</p>
            <p>Weight: {pokemon.weigth}</p>
        </div>
    );
};

export default Pokemon;