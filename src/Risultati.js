import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Risultati() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const query = state?.query || "Viaggio generico";

  const itinerari = [
    {
      titolo: "Itinerario culturale a Roma",
      descrizione: "3 giorni tra Colosseo, Musei Vaticani e cucina romana.",
    },
    {
      titolo: "Weekend di relax in Toscana",
      descrizione: "2 notti tra le colline e le terme di Saturnia.",
    },
    {
      titolo: "Avventura nei fiordi norvegesi",
      descrizione: "5 giorni in auto tra montagne e villaggi nordici.",
    },
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Risultati per: <em>{query}</em></h2>
      <div style={{ display: "grid", gap: "20px", marginTop: "30px" }}>
        {itinerari.map((it, i) => (
          <div
            key={i}
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              backgroundColor: "#f4f4f4",
            }}
          >
            <h3>{it.titolo}</h3>
            <p>{it.descrizione}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "40px",
          padding: "10px 20px",
          fontSize: "16px",
          background: "#6a11cb",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Torna alla home
      </button>
    </div>
  );
}

export default Risultati;
