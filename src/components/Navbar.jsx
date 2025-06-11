import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const scrollToHowItWorks = () => {
    const section = document.getElementById('how-it-works');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">TravelLogo</Link>
      <div className="navbar-links">
        <button onClick={scrollToHowItWorks} className="nav-button">Come funziona</button>
        <Link to="/contatti" className="nav-button">Contatti</Link>
        <Link to="/recensioni" className="nav-button">Recensioni & Preferiti</Link>
      </div>
    </nav>
  );
};

export default Navbar;
