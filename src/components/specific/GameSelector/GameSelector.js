import React, { useState, useEffect } from 'react';
import { getGames } from '../../../services/PokeApi';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const GameSelector = ({ onSelectGame }) => {
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState('')

    useEffect(() => {
        const fetchGames = async () => {
            const gameList = await getGames();
            setGames(gameList);
        };
        fetchGames();
    }, []);

    const handleChange = (event) => {
        const game = event.target.value;
        setSelectedGame(game);
        onSelectGame(game);
    };

    return(
        <FormControl fullWidth>
            <InputLabel id="game-select-label">Select Game</InputLabel>
            <Select
                labelId='game-select-label'
                id='game-select'
                value={selectedGame}
                onChange={handleChange}
                label='Select Game'
            >
                <MenuItem value=''>
                    <em>None</em>
                </MenuItem>
                {games.map((game, index) => (
                    <MenuItem key={index} value={game}>
                        {game}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default GameSelector;