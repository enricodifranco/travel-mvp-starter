import React from "react";

const Contatti = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">Contattaci</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Hai bisogno di aiuto o vuoi metterti in contatto con noi? Compila il modulo qui sotto o scrivici via email.
      </p>
      <form className="w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Nome"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border border-gray-300 rounded-lg"
        />
        <textarea
          placeholder="Messaggio"
          rows="4"
          className="w-full p-3 border border-gray-300 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Invia
        </button>
      </form>
    </div>
  );
};

export default Contatti;
