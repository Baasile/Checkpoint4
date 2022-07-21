import React, { useState, useEffect } from "react";
import axios from "axios";

function FormTournament() {
  const [showModal, setShowModal] = useState(false);
  const [match, setmatch] = useState({
    date: "",
    time: "",
    level_id: "",
    place_id: "",
  });

  const [msg, setMsg] = useState("");
  const [levels, setLevel] = useState([]);
  const [places, setPlaces] = useState("");

  const updateMatch = (event) => {
    const provisoireMatch = { ...match };
    provisoireMatch[event.target.name] = event.target.value;
    setmatch(provisoireMatch);
  };


  const updatePlace = (event) => {
    const provisoirePlace = places;
    provisoirePlace[event.target.name] = event.target.value;

    //console.log("event target object: " + provisoirePlace);

  };

  const updateLevel = (event) => {
    const provisoireLevel = [{ ...levels }];
    provisoireLevel[event.target.name] = event.target.value;
    setLevel(provisoireLevel);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/level/")
      .then((res) => {
        console.log(res.data);
        setLevel(res.data);
      })
      .catch((err) => console.error(err));

    axios
      .get("http://localhost:5000/places/")
      .then((res) => {
        console.log(res.data);
        setPlaces(res.data);
        
      })
      .catch((err) => console.error(err));
  }, []);


  const createTournament = () => {
    if (
      match.date !== "" &&
      match.time !== "" &&
      match.level_id !== "" &&
      match.place_id !== ""
    ) {
      axios
        .post(`http://localhost:5000/tournament`, match)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    } else {
      setMsg("*Tous les champs sont obligatoires");
    }
  };


  return (
    <div>
      <button
        className="bg-gray-800 text-yellow-300 active:bg-yellow-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ajouter un match
      </button>
      {showModal ? (
        <div className="tout le  formulaire">
          <div className="border-2 border-blue-400 flex justify-center">
            <form className="border-4 border-yellow-300 bg-gray-800 text-yellow-300 font-bold shadow-md flex flex-col my-10 rounded-xl justify-center">
              <div className="flex flex-col justify-center ">
                <h1 className="border-b-2 py-4 mb-10 flex justify-center">
                  Créer un match
                </h1>
                <label
                  className="my-2 flex justify-between px-4"
                  htmlFor="date"
                >
                  Date :
                  <input
                    className="text-black shadow-sm ml-4 border-2 rounded-md"
                    type="text"
                    id="date"
                    value={match.date}
                    name="date"
                    onChange={(event) => updateMatch(event)}
                  />
                </label>
                <label
                  className="my-2 flex justify-between px-4"
                  htmlFor="time"
                >
                  Heure :
                  <input
                    className="text-black shadow-sm ml-4 border-2 rounded-md"
                    type="text"
                    id="time"
                    value={match.time}
                    name="time"
                    onChange={(event) => updateMatch(event)}
                  />
                </label>
                <select
                  onChange={(event) => updatePlace(event)}
                  name="places_id"
                >
                  selection le lieu
                  {places &&
                    places.map((place) => (
                      <option value={place.id}>
                        {place.five_center}, {place.city}
                      </option>
                    ))}

                </select>
                <select
                  onChange={(event) => updateLevel(event)}
                  name="level_id"
                >
                  selection le niveau
                  {/* {levels &&
                    levels.map((level) => (
                      <option value={level.id}>{level.level}</option>
                    ))} */}
                </select>
                {/* <label
                  className="my-2 flex justify-between px-4"
                  htmlFor="level_id"
                >
                  Niveau :
                  <input
                    className="text-black shadow-sm ml-4 border-2 rounded-md"
                    type="text"
                    id="level_id"
                    value={match.level_id}
                    name="level_id"
                    onChange={(event) => updateMatch(event)}
                  />
                </label>
                <label
                  className="my-2 flex justify-between px-4"
                  htmlFor="place_id"
                >
                  Lieu :
                  <input
                    className="text-black shadow-sm ml-4 border-2 rounded-md"
                    type="text"
                    id="place_id"
                    value={match.place_id}
                    name="place_id"
                    onChange={(event) => updateMatch(event)}
                  />
                </label> */}
                {/* <label className="my-2 flex justify-between px-4" htmlFor="player_id">
            Joueurs inscrits :
            <input
              className="text-black shadow-sm ml-4 border-2 rounded-md"
              type="text"
              id="player_id"
              value={match.player_id}
              name="player_id"
              onChange={(event) => updateMatch(event)}
            />
          </label> */}
                <div className="flex flex-col justify-center">
                  <p className="text-sm">{msg}</p>
                  <div className="flex justify-around">
                    <button
                      className="my-4 w-1/4 items-center rounded-full  text-gray-800 bg-yellow-300 active:bg-gray-800 active:text-yellow-300 shadow-sm shadow-black  "
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Annuler
                    </button>
                    <button
                      type="button"
                      className="my-4 w-2/3 items-center rounded-full  text-gray-800 bg-yellow-300 active:bg-gray-800 active:text-yellow-300 shadow-sm shadow-black  "
                      onClick={createTournament}
                    >
                      {" "}
                      Créer le match{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default FormTournament;
