import React from 'react';

const Itinerario = () => {
  return (
    <div>
      <div className="h-64 bg-cover bg-center flex items-center justify-center text-white" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x400?travel')" }}>
        <h1 className="text-3xl font-bold bg-black bg-opacity-50 p-4 rounded">Nome Destinazione</h1>
      </div>
      <div className="p-8">
        {[1, 2, 3].map(day => (
          <div key={day} className="mb-6">
            <h2 className="text-xl font-bold">Giorno {day}</h2>
            <p className="text-gray-700">Descrizione attività del giorno {day}.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerario;
