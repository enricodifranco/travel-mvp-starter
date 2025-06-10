import React from "react";

function App() {
  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header
        style={{
          width: "100%",
          padding: "30px 0",
          background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
          display: "flex",
          justifyContent: "center",
          position: "fixed",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <nav style={{ display: "flex", gap: "48px", alignItems: "center" }}>
          <button onClick={() => scrollTo("home")} style={menuBtnStyle}>
            Home
          </button>
          <button onClick={() => scrollTo("come-funziona")} style={menuBtnStyle}>
            Come funziona
          </button>
          <button onClick={() => alert("Contattaci via email!")} style={menuBtnStyle}>
            Contatti
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "100px",
          background: "#f4f7fa",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "10px", color: "#333" }}>
          Trova il viaggio perfetto per te
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "40px", color: "#666" }}>
          Scrivi la tua idea di viaggio, noi ti proponiamo gli itinerari ideali.
        </p>
        <textarea
          placeholder="Es: Voglio vedere l'aurora boreale a gennaio"
          style={{
            width: "80%",
            maxWidth: "600px",
            height: "100px",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        <button
          onClick={() => scrollTo("come-funziona")}
          style={{
            marginTop: "30px",
            backgroundColor: "#2575fc",
            color: "#fff",
            padding: "14px 30px",
            fontSize: "16px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          Inizia la ricerca
        </button>
      </section>

      {/* Come funziona */}
      <section
        id="come-funziona"
        style={{
          background: "#fff",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "40px", color: "#333" }}>Come funziona</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {[
            "Scrivi la tua idea di viaggio o lasciati ispirare",
            "Ricevi 3 proposte automatiche",
            "Personalizza il tuo itinerario",
            "Salva o prenota il tuo viaggio",
          ].map((step, i) => (
            <div
              key={i}
              style={{
                background: "#f4f7fa",
                borderRadius: "12px",
                padding: "30px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ fontSize: "20px", color: "#2575fc" }}>Passo {i + 1}</h3>
              <p style={{ marginTop: "10px", fontSize: "16px", color: "#444" }}>{step}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => scrollTo("home")}
          style={{
            marginTop: "50px",
            backgroundColor: "#6a11cb",
            color: "#fff",
            padding: "16px 32px",
            fontSize: "18px",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          Portami al mio viaggio
        </button>
      </section>
    </div>
  );
}

// Stili per i pulsanti del menu
const menuBtnStyle = {
  background: "transparent",
  color: "#fff",
  fontSize: "18px",
  border: "none",
  cursor: "pointer",
  padding: "10px 20px",
  borderRadius: "8px",
  transition: "background 0.3s ease",
};

export default App;
