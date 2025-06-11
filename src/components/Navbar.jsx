import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToHome = () => {
    navigate('/');
  };

  const goToComeFunziona = () => {
    if (location.pathname === '/') {
      // Se siamo già in homepage, scrolla
      const section = document.getElementById('come-funziona');
      section?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Se siamo su un'altra pagina, prima vai alla home e poi scrolla
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('come-funziona');
        section?.scrollIntoView({ behavior: 'smooth' });
      }, 300); // Tempo per far caricare la home
    }
  };

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center sticky top-0 z-50">
      <div onClick={goToHome} className="text-2xl font-bold text-blue-600 cursor-pointer">
        TravelMVP
      </div>
      <ul className="flex space-x-6 text-gray-800 font-medium">
        <li className="cursor-pointer hover:text-blue-500" onClick={goToComeFunziona}>
          Come funziona
        </li>
        <li className="cursor-pointer hover:text-blue-500" onClick={() => navigate('/contatti')}>
          Contatti
        </li>
        <li className="cursor-pointer hover:text-blue-500" onClick={() => navigate('/recensioni')}>
          Recensioni & Preferiti
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
