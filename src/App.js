import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Flickering from './pages/Flickering';
import Player from './pages/Player';
import Movies from './pages/Movies';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="/player" element={<Player />}/>
      <Route path='/movies' element={<Movies />} />
      <Route path='/' element={<Flickering />} />
    </Routes>
    </BrowserRouter>
  );           
}

export default App;
