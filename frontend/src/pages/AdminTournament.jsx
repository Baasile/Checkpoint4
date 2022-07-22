import React from "react";
import Navbar from "../components/Navbar";
import TournamentListAdmin from "../components/TournamentListAdmin";
import Footer from "../components/Footer";

function TournamentPageAdmin() {
  return (
    <div className="">
      <Navbar />
      <TournamentListAdmin />
      <Footer />
    </div>
  );
}

export default TournamentPageAdmin;
