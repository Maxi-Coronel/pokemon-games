import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { getGames } from '../../../services/PokeApi';

const GameSearch = ({ onGameSelect }) => {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesList = await getGames();
        setGames(gamesList);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  const handleChange = (event) => {
    const game = event.target.value;
    setSelectedGame(game);
    onGameSelect(game);
  };

  return (
    <FormControl fullWidth>
      <InputLabel>Game</InputLabel>
      <Select value={selectedGame} onChange={handleChange}>
        {games.map(game => (
          <MenuItem key={game.name} value={game.name}>{game.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default GameSearch;