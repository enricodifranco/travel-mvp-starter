import { useState } from "react";

const itineraries = [
  {
    id: "aurora01",
    titolo: "Aurora Boreale in Norvegia",
    stile: "natura",
    periodo: "novembre-marzo",
    localita: "Tromsø, Norvegia",
    durata: "5 giorni",
    contenuto:
      "Giorno 1: Arrivo. Giorno 2: Safari aurora. Giorno 3: Slitte con i cani. Giorno 4: Relax in sauna. Giorno 5: Ritorno.",
  },
  {
    id: "mare01",
    titolo: "Relax alle Canarie",
    stile: "mare",
    periodo: "ottobre-aprile",
    localita: "Fuerteventura, Spagna",
    durata: "7 giorni",
    contenuto:
      "Giorno 1: Spiaggia. Giorno 2: Surf. Giorno 3: Escursione in barca. Giorno 4: Relax. Giorno 5: Trekking. Giorno 6: Mercatino. Giorno 7: Ritorno.",
  },
  {
    id: "festival01",
    titolo: "Vivi il Tomorrowland",
    stile: "festival",
    periodo: "luglio",
    localita: "Boom, Belgio",
    durata: "3 giorni",
    contenuto:
      "Giorno 1: Arrivo e apertura. Giorno 2: Concerti principali. Giorno 3: Chill‑out e ritorno.",
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [risultati, setRisultati] = useState([]);

  const cerca = () => {
    const filtrati = itineraries.filter((it) =>
      query
        .toLowerCase()
        .split(" ")
        .some(
          (kw) =>
            it.titolo.toLowerCase().includes(kw) ||
            it.stile.toLowerCase().includes(kw) ||
            it.periodo.toLowerCase().includes(kw)
        )
    );
    setRisultati(filtrati.length ? filtrati : itineraries.slice(0, 3));
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Trova il tuo prossimo viaggio</h1>
      <div style={{ display: "flex", gap: "8px", marginBottom: 24 }}>
        <input
          style={{ flex: 1, padding: "8px", fontSize: "16px" }}
          placeholder="Es. aurora boreale, località calda a novembre, festival..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={cerca}>Cerca</button>
      </div>
      <div>
        {risultati.map((it) => (
          <div
            key={it.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: 16,
              marginBottom: 16,
            }}
          >
            <h2>{it.titolo}</h2>
            <p style={{ color: "#555", margin: 0 }}>
              {it.localita} • {it.durata}
            </p>
            <p>{it.contenuto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
