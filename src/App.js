import React from 'react';
import './App.css';

const App = ()  => {
  return (
    <div className='app-container'>
      <header className='app-header'>
        <h1>Pokédex</h1>
      </header>
      <main className='app-main'>
        <PokemonContainer />
      </main>
    </div>
  );
}

export default App;