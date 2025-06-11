import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/proposte');
  };

  return (
    <div className="min-h-screen">
      <header className="flex flex-col items-center justify-center text-center h-[60vh] bg-blue-50">
        <h1 className="text-4xl font-bold">Scopri il tuo prossimo viaggio</h1>
        <p className="text-lg text-gray-600 mt-2">Scrivi cosa vuoi fare, ti proponiamo noi dove andare</p>
        <textarea className="mt-6 p-4 w-80 h-24 border rounded" placeholder="Es: Voglio vedere l'aurora boreale" />
        <button onClick={handleSearch} className="mt-4 px-6 py-2 bg-blue-600 text-white rounded">Inizia la ricerca</button>
      </header>
      <section id="come-funziona" className="p-10 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">Come funziona</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="p-4 border rounded shadow">
              <h3 className="font-bold mb-2">Passo {i}</h3>
              <p className="text-sm text-gray-600">Descrizione del passo {i} su come funziona il sito.</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button onClick={handleSearch} className="px-6 py-2 bg-blue-600 text-white rounded">Portami al mio viaggio</button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
