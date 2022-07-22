import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TournamentPage from "./pages/TournamentPage";
import AdminTournament from "./pages/AdminTournament";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournament" element={<TournamentPage />} />
          <Route path="/admin" element={<AdminTournament />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
