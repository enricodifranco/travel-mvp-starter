import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';

const Homepage = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/proposte');
  };

  return (
    <div className="homepage">
      <section className="hero">
        <h1>Scopri il viaggio perfetto per te</h1>
        <p>Descrivici cosa cerchi e ti proponiamo 3 itinerari su misura.</p>
        <textarea placeholder="Es. viaggio romantico a settembre in Italia" />
        <button onClick={handleSearch}>Inizia la ricerca</button>
      </section>
      <section className="how-it-works" id="how-it-works">
        <h2>Come funziona</h2>
        <div className="steps">
          <div className="step">1. Scrivi cosa cerchi</div>
          <div className="step">2. Scegli un itinerario</div>
          <div className="step">3. Personalizzalo</div>
          <div className="step">4. Parti e goditi il viaggio</div>
        </div>
        <button onClick={handleSearch}>Portami al mio viaggio</button>
      </section>
    </div>
  );
};

export default Homepage;
