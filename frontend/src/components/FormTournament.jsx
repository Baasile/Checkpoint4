import React, { useState } from "react";
import axios from "axios";

function FormTournament() {
  const [match, setmatch] = useState({
    date: "",
    time: "",
    level_id: "",
    place_id: "",
    player_id: "",
  });

  const [msg, setMsg] = useState("");

  const updateMatch = (event) => {
    const provisoireMatch = { ...match };
    provisoireMatch[event.target.name] = event.target.value;
    setmatch(provisoireMatch);
  };

  const createTournament = () => {
    if (
      match.date !== "" &&
      match.time !== "" &&
      match.level_id !== "" &&
      match.place_id !== "" &&
      match.player_id !== ""
    ) {
      axios
        .post(`http://localhost:5000/tournament`, match)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    } else {
      setMsg("Tous les champs sont obligatoires");
    }
  };

  return (
    <div className="">
      <form>
        <div>
          ajout tournois
          <label htmlFor="date">
            date
            <input
              type="text"
              id="date"
              value={match.date}
              name="date"
              onChange={(event) => updateMatch(event)}
            />
          </label>
          <label htmlFor="time">
            time
            <input
              type="text"
              id="time"
              value={match.time}
              name="time"
              onChange={(event) => updateMatch(event)}
            />
          </label>
          <label htmlFor="level_id">
            level
            <input
              type="text"
              id="level_id"
              value={match.level_id}
              name="level_id"
              onChange={(event) => updateMatch(event)}
            />
          </label>
          <label htmlFor="place_id">
            place
            <input
              type="text"
              id="place_id"
              value={match.place_id}
              name="place_id"
              onChange={(event) => updateMatch(event)}
            />
          </label>
          <label htmlFor="player_id">
            player
            <input
              type="text"
              id="player_id"
              value={match.player_id}
              name="player_id"
              onChange={(event) => updateMatch(event)}
            />
          </label>
        </div>
        <p>{msg}</p>
        <button type="button" onClick={createTournament}>
          {" "}
          ajouter{" "}
        </button>
      </form>
    </div>
  );
}

export default FormTournament;
