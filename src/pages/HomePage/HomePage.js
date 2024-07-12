import React, { useEffect, useState } from 'react';
import { Grid, Container, Button } from '@mui/material';
import { getPokemonByRange, getPokemonByGame } from '../../services/PokeApi';
import SearchGame from '../../components/common/SearchGame/SearchGame';
import PokemonCard from '../../components/specific/PokemonCard/PokemonCard';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [selectedGame, setSelectedGame] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      try {
        let data;
        if (selectedGame) {
          data = await getPokemonByGame(selectedGame, offset);
        } else {
          data = await getPokemonByRange(offset);
        }
        setPokemons(data);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
      setLoading(false);
    };

    fetchPokemons();
  }, [offset, selectedGame]);

  const handlePrevious = () => {
    setOffset(prevOffset => Math.max(prevOffset - 20, 0));
  };

  const handleNext = () => {
    setOffset(prevOffset => prevOffset + 20);
  };

  return (
    <Container>
      <h1>Pokémon</h1>
      <SearchGame onGameSelect={(game) => { setSelectedGame(game); setOffset(0); }} />
      <Grid container spacing={1}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          pokemons.map(pokemon => (
            <Grid item xs={12} sm={6} md={4} lg={2} key={pokemon.id}>
              <PokemonCard pokemon={pokemon} onCompareSelect={() => {}} />
            </Grid>
          ))
        )}
      </Grid>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <Button onClick={handlePrevious} disabled={offset === 0}>
          Previous
        </Button>
        <Button onClick={handleNext}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default HomePage;