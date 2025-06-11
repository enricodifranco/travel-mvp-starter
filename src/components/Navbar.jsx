import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // (opzionale, se vuoi aggiungere stile CSS separato)

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">TravelMate</div>
      <ul className="nav-links">
        <li><a href="#how-it-works">Come funziona</a></li>
        <li><Link to="/contatti">Contatti</Link></li>
        <li><Link to="/recensioni">Recensioni & Preferiti</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
