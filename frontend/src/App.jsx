import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TournamentPage from "./pages/TournamentPage";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournament" element={<TournamentPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
