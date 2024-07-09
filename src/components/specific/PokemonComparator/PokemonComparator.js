import React, { useState } from "react";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import { Container, Grid, Typography } from "@mui/material";
import SearchInput from "../../common/SearchInput/SearchInput";

const PokemonComparator = () => {
    const [pokemonNames, setPokemonNames] = useState(['', '']);

    const handlePokemonSelect = (index, name) => {
        const newNames = [...pokemonNames];
        newNames[index] = name;
        setPokemonNames(newNames);
    };

    return(
        <Container>
            <Typography variant="h4" gutterBottom>
                Compare Pokemon
            </Typography>
            <Grid container spacing={2}>
                {pokemonNames.map((name, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <SearchInput 
                            pokemonList={[]}
                            onPokemonSelect={(name) => handlePokemonSelect(index, name)}
                        />
                        {name && <PokemonDetails pokemonName={name} />}
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default PokemonComparator