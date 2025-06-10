import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Risultati from "./Risultati";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/risultati" element={<Risultati />} />
      </Routes>
    </Router>
  );
}

export default App;
