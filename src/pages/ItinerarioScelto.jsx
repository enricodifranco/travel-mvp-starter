import React from 'react';

const ItinerarioScelto = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <div style={{ backgroundImage: 'url(https://via.placeholder.com/1200x300)', height: '300px', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: 'white', fontSize: '3rem' }}>Destinazione Selezionata</h1>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <h2>Giorno 1</h2>
        <p>Visita al centro storico</p>
        <h2>Giorno 2</h2>
        <p>Escursione in natura</p>
        <h2>Giorno 3</h2>
        <p>Relax e rientro</p>
      </div>
    </div>
  );
};

export default ItinerarioScelto;
