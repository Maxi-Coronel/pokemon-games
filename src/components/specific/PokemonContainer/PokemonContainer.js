import React, { useState, useEffect } from "react";
import { fetchPokemonList } from "../../../services/PokeApi";
import PokemonSearch from '../PokemonSearch/PokemonSearch';
import Pokemon from "../../common/Pokemon/Pokemon";

const PokemonContainer = () => {
    const [pokemonName, setPokemonName] = useState('pikachu');
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const getPokemonList = async () => {
            try {
                const list = await fetchPokemonList();
                setPokemonList(list)
            } catch (err) {
                console.error(err);
            }
        };

        getPokemonList();
    }, []);

    const handlePokemonSelect = (name) => {
        setPokemonName(name);
    };

    return (
        <div>
            <PokemonSearch pokemonList={pokemonList} onPokemonSelect={handlePokemonSelect} />
            <Pokemon name={pokemonName} />
        </div>
    );
};

export default PokemonContainer;