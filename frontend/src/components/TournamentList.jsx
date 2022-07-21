import axios from "axios";
import { useEffect, useState } from "react";

function TournamentList() {
  const [showModal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id,
      date,
      time,
    };
    axios
      .put(`http://localhost:5000/tournament/${id}`, data)
      .then(() => {
        console.warn("Yes", data);
      })
      .catch((error) => {
        console.warn("No !", error);
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/tournament`)
      .then((response) => {
        setData(response.data);
        setId(response.data.id);
        setDate(response.data.date);
        setTime(response.data.time);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const deleteTournament = (id) => {
    console.log(deleteTournament);
    console.log(id);
    axios
      .delete(`http://localhost:5000/tournament/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  // const updateAPIData = (id) => {
  //   console.log({ date, time });
  //   axios
  //     .put(`http://localhost:5000/tournament/${id}`, { date, time })
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.warn(error);
  //     });
  // }

  return (
    <div className="p-10 bg-red-400 flex justify-center">
      <div className="bg-green-400 w-2/3">
        <h1 className="border-2 flex justify-center">Liste des matchs</h1>
        {data &&
          data.map((tournament) => {
            return (
              <div className="flex justify-center border-2 border-blue-400">
                <button
                  className="bg-gray-800 text-yellow-300 active:bg-yellow-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => deleteTournament(tournament.id)}
                >
                  supprimer
                </button>
                <details>
                  <summary>
                    <p>
                      {tournament.date}, {tournament.time}{" "}
                      {tournament.five_center} niveau :{tournament.level}
                    </p>
                  </summary>
                  <div className="flex justify-around">
                    <div>
                      <h1>Equipe 1</h1>
                      <h2>{tournament.player1}</h2>
                      <h2>{tournament.player2}</h2>
                      <h2>{tournament.player3}</h2>
                      <h2>{tournament.player4}</h2>
                      <h2>{tournament.player5}</h2>
                    </div>
                    <div>
                      <h2>{tournament.player6}</h2>
                      <h2>{tournament.player7}</h2>
                      <h2>{tournament.player8}</h2>
                      <h2>{tournament.player9}</h2>
                      <h2>{tournament.player10}</h2>
                    </div>
                  </div>
                </details>
                <div />
                <button
                  className="bg-gray-800 text-yellow-300 active:bg-yellow-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 m-6"
                  type="button"
                  onClick={() => setModal(true)}
                >
                  Modifier
                </button>
                {showModal ? (
                  <div className="tout le  formulaire">
                    <div className="border-2 border-blue-400 flex justify-center">
                      <form className="border-4 border-yellow-300 bg-gray-800 text-yellow-300 font-bold shadow-md flex flex-col my-10 rounded-xl justify-center">
                        <div className="flex flex-col justify-center ">
                          <h1 className="border-b-2 py-4 mb-10 flex justify-center">
                            {tournament.date}, {tournament.id}
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
                              value={tournament.date}
                              name="date"
                              onChange={(event) => setDate(event.target.value)}
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
                              value={tournament.time}
                              name="time"
                              onChange={(event) => setTime(event.target.value)}
                            />
                          </label>

                          <div className="flex flex-col justify-center">
                            <p className="text-sm">hello</p>
                            <div className="flex justify-around">
                              <button
                                className="my-4 w-1/4 items-center rounded-full  text-gray-800 bg-yellow-300 active:bg-gray-800 active:text-yellow-300 shadow-sm shadow-black  "
                                type="button"
                                onClick={() => setModal(false)}
                              >
                                Annuler
                              </button>
                              <button
                                type="button"
                                className="my-4 w-2/3 items-center rounded-full  text-gray-800 bg-yellow-300 active:bg-gray-800 active:text-yellow-300 shadow-sm shadow-black  "
                                onClick={(e) => handleSubmit(e)}
                              >
                                Modifier le match
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
          })}
      </div>
    </div>
  );
}

export default TournamentList;
