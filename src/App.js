import { useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: 1.6 }}>
      {/* HEADER */}
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "#fff",
          borderBottom: "1px solid #ddd",
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
        }}
      >
        <h2 style={{ margin: 0 }}>TravelMVP</h2>
        <nav style={{ display: "flex", gap: "24px" }}>
          <button onClick={() => scrollTo("home")} style={navBtnStyle}>Home</button>
          <button onClick={() => scrollTo("come-funziona")} style={navBtnStyle}>Come funziona</button>
        </nav>
      </header>

      {/* HERO - SEZIONE RICERCA */}
      <section id="home" style={{ paddingTop: 100, maxWidth: 800, margin: "80px auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: 16 }}>
          Scopri il tuo prossimo viaggio in pochi secondi
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: 40 }}>
          Scrivi dove vuoi andare, o il tipo di esperienza che sogni: penseremo noi al resto!
        </p>
        <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          rows={4}
          placeholder="Es. Viaggio in Giappone, weekend avventura, città romantiche..."
          style={{
            width: "100%",
            padding: "16px",
            fontSize: "16px",
            borderRadius: 8,
            border: "1px solid #ccc",
            resize: "none",
            marginBottom: 24,
          }}
        ></textarea>
        <button
          onClick={() => alert(`Hai cercato: ${query}`)}
          style={primaryBtnStyle}
        >
          Trova il mio itinerario
        </button>
      </section>

      {/* COME FUNZIONA */}
      <section id="come-funziona" style={{ backgroundColor: "#f9f9f9", padding: "80px 20px" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", marginBottom: 48 }}>Come funziona</h2>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <div style={stepStyle}><strong>1. Scrivi cosa cerchi</strong><p>Descrivi un'idea, una destinazione, o una sensazione.</p></div>
          <div style={stepStyle}><strong>2. Ti proponiamo 3 itinerari</strong><p>Sono dinamici, creati apposta in base alla tua richiesta.</p></div>
          <div style={stepStyle}><strong>3. Personalizzali</strong><p>Scegli uno e modifica attività, date, durata, stile.</p></div>
          <div style={stepStyle}><strong>4. Prenota</strong><p>Con link diretti, consigli locali, e supporto dedicato.</p></div>
        </div>
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <button onClick={() => scrollTo("home")} style={primaryBtnStyle}>
            Portami al mio viaggio
          </button>
        </div>
      </section>
    </div>
  );
}

const navBtnStyle = {
  background: "none",
  border: "none",
  color: "#333",
  fontSize: "16px",
  cursor: "pointer",
};

const primaryBtnStyle = {
  backgroundColor: "#0070f3",
  color: "#fff",
  border: "none",
  padding: "12px 24px",
  borderRadius: 6,
  fontSize: "16px",
  cursor: "pointer",
};

const stepStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};
