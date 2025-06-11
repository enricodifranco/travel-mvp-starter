import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ProposteItinerario from './pages/ProposteItinerario';
import ItinerarioScelto from './pages/ItinerarioScelto';
import Contatti from './pages/Contatti';
import RecensioniPreferiti from './pages/RecensioniPreferiti';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/proposte" element={<ProposteItinerario />} />
        <Route path="/itinerario" element={<ItinerarioScelto />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/recensioni" element={<RecensioniPreferiti />} />
      </Routes>
    </Router>
  );
}

export default App;
