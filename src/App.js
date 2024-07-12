import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CommunityPage from './pages/CommunityPage/CommunityPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PokemonDetailsPage from './pages/PokemonDetailsPage/PokemonDetailsPage';
import Header from './components/common/Header/Header';
import './App.css';

const App = ()  => {
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <Link to='/community'>Community</Link>
        </nav>
        <Routes>
          <Route path='/' exact Component={HomePage} />
          <Route path='/profile' exact Component={ProfilePage} />
          <Route path='/community' exact Component={CommunityPage} />
          <Route path='/pokemon/:id' exact Component={PokemonDetailsPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;