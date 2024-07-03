import React, { useState } from "react";
import './SearchInput.css'

const SearchInput = ({ pokemonList, onPokemonSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);


    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (value) {
            const filteredSuggestions = pokemonList.filter( name => name.toLowerCase().startsWith(value.toLowerCase()));
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleKeyPress = (e) => {
        if ( e.key === 'Enter') {
            onPokemonSelect(searchTerm);
            setSuggestions([]);
        }
    };

    const handleSuggestionsClick = (suggestions) => {
        setSearchTerm(suggestions);
        onPokemonSelect(suggestions);
        setSuggestions([]);
    };

    return (
        <div className="search-input">
            <input 
                type="text"
                value={searchTerm}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter pokemon name"
            />
            {suggestions.length > 0 && (
                <ul>
                    {suggestions.map((suggestions, index) => (
                        <li key={index} onClick={() => handleSuggestionsClick(suggestions)}>
                            {suggestions}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchInput