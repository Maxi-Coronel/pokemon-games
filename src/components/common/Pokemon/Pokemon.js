import React, { useState, useEffect } from "react";
import { getPokemonDatails } from "../../../services/PokeApi";
import './Pokemon.css'

const Pokemon = ({ pokemonName }) => {
    const [details, setDetails] = useState('null')
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            setError(null);
            try {
                const pokemonDetails = await getPokemonDatails(pokemonName);
                setDetails(pokemonDetails);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false)
            }
        };

        if (pokemonName) {
            fetchDetails();
        }
    }, [pokemonName]);

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!details.sprites) {
        return <div>Pokemon not found or missing image</div>;
    }

    return (
        <div className="pokemon-container">
            <h2>{details.name}</h2>
            <img src={details.sprites.front_default} alt={details.name} />
            <p>Height: {details.height}</p>
            <p>Weight: {details.weight}</p>
            <p>Base Experience: {details.base_experience}</p>
            <h3>Stats:</h3>
            <ul>
                {details.starts.map((stat, index) => (
                    <li key={index}>
                        {stat.stat.name}: {stat.base_stat}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Pokemon;