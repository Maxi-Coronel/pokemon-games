import React, { useEffect, useState } from "react";
import './SearchInput.css'
import { List, ListItem, ListItemText, Paper, TextField } from "@mui/material";

const SearchInput = ({ pokemonList, onPokemonSelect, selectedGame }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {
        let filtered = pokemonList
        if (selectedGame) {
            filtered = pokemonList.filter(pokemon => pokemon.games.includes(selectedGame));
        }
        setFilteredPokemons(filtered)
    }, [selectedGame, pokemonList])

    const handleChange = (e) => {
        const term = e.target.term;
        setSearchTerm(term);
        const filtered = pokemonList.filter(pokemon => pokemon.toLowerCase().includes(term.toLowerCase()));
        setFilteredPokemons(filtered)
    };

    const handleSelected = (pokemon) => {
        onPokemonSelect(pokemon);
        setSearchTerm('');
        setFilteredPokemons([]);
    };

    return (
        <div className="search-input">
            <TextField 
                fullWidth
                label='Search Pokemon'
                value={searchTerm}
                onChange={handleChange}
                variant="outlined"
            />
            {filteredPokemons.length > 0 && (
                <Paper className="search-results">
                    <List>
                        {filteredPokemons.map((pokemon, index) => (
                            <ListItem button key={index} onClick={() => handleSelected(pokemon)}>
                                <ListItemText primary={pokemon} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            )}
        </div>
    );
};

export default SearchInput