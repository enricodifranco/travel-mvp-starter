import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Proposte from './pages/Proposte';
import Itinerario from './pages/Itinerario';
import Contatti from './pages/Contatti';
import Recensioni from './pages/Recensioni';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/proposte" element={<Proposte />} />
          <Route path="/itinerario" element={<Itinerario />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/recensioni" element={<Recensioni />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
