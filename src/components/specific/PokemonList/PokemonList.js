import React, { useState, useEffect } from "react";
import { getPokemonsByGame } from "../../../services/PokeApi";
import SearchInput from "../../common/SearchInput/SearchInput";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const PokemonList = ({ game, onPokemonSelect }) => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchPokemons = async () => {
            if (game) {
                const pokemons = await getPokemonsByGame(game);
                setPokemonList(pokemons);
            }
        };
        fetchPokemons();
    }, [game]);

    return (
        <div>
            <Typography variant="h5" gutterBottom>
                Pokemon List
            </Typography>
            <SearchInput pokemonList={pokemonList} onPokemonSelect={onPokemonSelect}/>
            <List>
                {pokemonList.map((pokemon, index) => (
                    <ListItem button key={index} onClick={() => onPokemonSelect(pokemon)}>
                        <ListItemText primary={pokemon}/>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default PokemonList;