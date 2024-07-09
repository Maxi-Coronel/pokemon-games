import React, { useState } from 'react';
import './App.css';
import PokemonDetails from './components/specific/PokemonDetails/PokemonDetails';
import GameSelector from './components/specific/GameSelector/GameSelector';
import PokemonList from './components/specific/PokemonList/PokemonList';
import PokemonComparator from './components/specific/PokemonComparator/PokemonComparator';

const App = ()  => {
  const [selectedGame, setSelectedGame] = useState('');
  const [selectedPokemon, setSelectedPokemon] = useState('');

  return (
    <div className='app-container'>
      <header className='app-header'>
        <h1>Pokédex</h1>
      </header>
      <main className='app-main'>
        <GameSelector onSelectGame={setSelectedGame} />
        <PokemonList game={selectedGame} onPokemonSelect={setSelectedPokemon} />
        <PokemonDetails pokemonName={selectedPokemon} />
        <PokemonComparator />
      </main>
    </div>
  );
}

export default App;