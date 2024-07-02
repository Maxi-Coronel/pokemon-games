import React from 'react'

const GameSelector = ({ games, onSelectGames }) => {
    return(
        <div>
            <h3>Selecciona un juego</h3>
            <select onChange={(e) => onSelectGames(e.target.value)}>
                {games.map((game) =>(
                    <option key={game.id} value={game.id}>
                        {game.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default GameSelector;