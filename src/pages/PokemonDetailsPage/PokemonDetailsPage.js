import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonByName } from '../../services/PokeApi';
import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';

const PokemonDetailsPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await getPokemonByName(id);
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) return <div>Loading...</div>;

  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Card style={{ maxWidth: 500, margin: '.3rem' }}>
          <CardMedia
            component="img"
            height="250"
            image={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            sx={{ padding: "0.5em", objectFit: "contain" }}
          />
          <CardContent>
            <Typography variant="h4">{pokemon.name}</Typography>
            <Typography variant="body2">ID: {pokemon.id}</Typography>
            <Typography variant="body2">Types: {pokemon.types.map(type => type.type.name).join(', ')}</Typography>
            <Typography variant="body2">Stats: {pokemon.stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}</Typography>
            {/* Aquí agregaremos más detalles */}
          </CardContent>
        </Card>
        <Typography variant="h5" style={{ marginTop: '1rem' }}>Available in Games:</Typography>
        {/* Lista de juegos disponibles */}
        <Typography variant="h5" style={{ marginTop: '1rem' }}>Evolution Tree:</Typography>
        {/* Árbol de evoluciones */}
        <Typography variant="h5" style={{ marginTop: '1rem' }}>Attacks:</Typography>
        {/* Lista de ataques */}
        <Typography variant="h5" style={{ marginTop: '1rem' }}>Description:</Typography>
        {/* Descripción */}
      </Grid>
    </Container>
  );
};

export default PokemonDetailsPage;