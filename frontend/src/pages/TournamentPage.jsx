import React from "react";
import FormTournament from "../components/FormTournament";
import Navbar from "../components/Navbar";
import TournamentList from "../components/TournamentList";

function TournamentPage() {
  return (
    <div className="">
      <Navbar />
      <TournamentList />
      <FormTournament />
    </div>
  );
}

export default TournamentPage;
