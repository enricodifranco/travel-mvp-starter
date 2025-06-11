import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProposteItinerario.css';

const ProposteItinerario = () => {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate('/itinerario');
  };

  return (
    <div className="proposte">
      <div className="cards">
        {[1, 2, 3].map((n) => (
          <div className="card" key={n}>
            <h3>Destinazione {n}</h3>
            <ul>
              <li>Durata: 5 giorni</li>
              <li>Budget: medio</li>
              <li>Esperienze: natura, relax</li>
            </ul>
            <button onClick={handleSelect}>Scegli questo itinerario</button>
          </div>
        ))}
      </div>
      <div className="personalizza">
        <textarea placeholder="Scrivi nuove preferenze" />
        <br />
        <button>Ricalcola</button>
      </div>
    </div>
  );
};

export default ProposteItinerario;
