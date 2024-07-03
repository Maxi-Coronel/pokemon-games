import React from "react";
import SearchInput from "../../common/SearchInput/SearchInput";

const pokemonSearch = ({ pokemonList, onPokemonSelect }) => {
    return(
        <div>
            <SearchInput pokemonList={pokemonList} onPokemonSelect={onPokemonSelect}/>
        </div>
    );
};

export default pokemonSearch;