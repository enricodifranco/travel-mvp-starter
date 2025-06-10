import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (query.trim()) {
      navigate("/risultati", { state: { query } });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px", padding: "20px" }}>
      <h1>Trova il viaggio perfetto per te</h1>
      <p>Scrivi la tua idea di viaggio, noi ti proponiamo gli itinerari ideali.</p>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Es: Un viaggio culturale a ottobre"
        style={{
          width: "80%",
          maxWidth: "600px",
          height: "100px",
          padding: "16px",
          marginTop: "20px",
          fontSize: "16px",
          borderRadius: "10px",
        }}
      />
      <br />
      <button
        onClick={handleSubmit}
        style={{
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "#2575fc",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Inizia la ricerca
      </button>
    </div>
  );
}

export default Home;
