import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon, onCompareSelect }) => {
  const { id, name, types, stats, sprites } = pokemon;

  return (
    <Card style={{ maxWidth: 180, margin: '.3rem' }}>
      <CardMedia
        component="img"
        height="140"
          image={pokemon.sprites.other['official-artwork'].front_default}
        alt={name}
        sx={{ padding: "0.5em", objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ID: {id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Types: {types.map(type => type.type.name).join(', ')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stats: {stats.map(stat => `${stat.stat.name}: ${stat.base_stat}`).join(', ')}
        </Typography>
        <Button component={Link} to={`/pokemon/${id}`}>
          View Details
        </Button>
        <Button onClick={() => onCompareSelect(pokemon)}>
          Compare
        </Button>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;