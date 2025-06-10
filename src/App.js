// Template base React per portale viaggi MVP (senza AI)

import { useState } from "react";
//import { Card, CardContent } from "@/components/ui/card";
//import { Input } from "@/components/ui/input";
//import { Button } from "@/components/ui/button";

const itineraries = [
  {
    id: "aurora01",
    titolo: "Aurora Boreale in Norvegia",
    stile: "natura",
    budget: "medio",
    periodo: "novembre-marzo",
    localita: "Tromsø, Norvegia",
    durata: "5 giorni",
    contenuto: "Giorno 1: Arrivo. Giorno 2: Safari aurora. Giorno 3: Slitte con i cani. Giorno 4: Relax in sauna. Giorno 5: Ritorno."
  },
  {
    id: "mare01",
    titolo: "Relax alle Canarie",
    stile: "mare",
    budget: "basso",
    periodo: "ottobre-aprile",
    localita: "Fuerteventura, Spagna",
    durata: "7 giorni",
    contenuto: "Giorno 1: Spiaggia. Giorno 2: Surf. Giorno 3: Escursione in barca. Giorno 4: Relax. Giorno 5: Trekking. Giorno 6: Mercatino. Giorno 7: Ritorno."
  },
  {
    id: "festival01",
    titolo: "Vivi il Tomorrowland",
    stile: "festival",
    budget: "alto",
    periodo: "luglio",
    localita: "Boom, Belgio",
    durata: "3 giorni",
    contenuto: "Giorno 1: Arrivo e apertura. Giorno 2: Concerti principali. Giorno 3: Chill-out e ritorno."
  }
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [risultati, setRisultati] = useState([]);

  const cerca = () => {
    const filtrati = itineraries.filter((it) =>
      query.toLowerCase().split(" ").some((kw) =>
        it.titolo.toLowerCase().includes(kw) ||
        it.stile.toLowerCase().includes(kw) ||
        it.periodo.toLowerCase().includes(kw)
      )
    );
    setRisultati(filtrati.length ? filtrati : itineraries.slice(0, 3));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Trova il tuo prossimo viaggio</h1>
      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Es. aurora boreale, località calda a novembre, festival musicale..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={cerca}>Cerca</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {risultati.map((it) => (
          <Card key={it.id} className="rounded-2xl shadow-md">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-1">{it.titolo}</h2>
              <p className="text-sm text-gray-500 mb-2">{it.localita} • {it.durata}</p>
              <p className="text-sm">{it.contenuto}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
