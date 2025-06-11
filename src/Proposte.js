import React from 'react';
import { useNavigate } from 'react-router-dom';

const Proposte = () => {
  const navigate = useNavigate();

  const handleSelect = () => {
    navigate('/itinerario');
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[1, 2, 3].map(i => (
          <div key={i} className="p-4 border shadow rounded">
            <h3 className="text-xl font-bold mb-2">Destinazione {i}</h3>
            <ul className="text-sm text-gray-600">
              <li>Attività 1</li>
              <li>Attività 2</li>
              <li>Attività 3</li>
            </ul>
            <button onClick={handleSelect} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Scegli</button>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <textarea className="w-full p-4 border rounded" placeholder="Personalizza la ricerca" />
        <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded">Ricalcola</button>
      </div>
    </div>
  );
};

export default Proposte;
