import React, { useState, useEffect } from "react";
import { getPokemonDatails } from "../../../services/PokeApi";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const PokemonDetails = ({ pokemonName }) => {
    const [details, setDetails] = useState(null);
    console.log(pokemonName)

    useEffect(() => {
        const fetchDetails = async () => {
            if(pokemonName) {
                const PokemonDetails = await getPokemonDatails(pokemonName);
                setDetails(PokemonDetails);
            }
        };
        fetchDetails();
    }, [pokemonName]);

    if (!details) return <div>Select a Pokemon to see its details</div>

    return (
        <Card>
            <CardMedia
            component='img'
            height='140'
            image={details.sprites.front_default}
            alt={details.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {details.name}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PokemonDetails;