import axios from "axios";
import { useEffect, useState } from "react";
import FormTournament from "./FormTournament";

function TournamentListAdmin() {
  const [showModal, setModal] = useState(false);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const datab = {
      id,
      date,
      time,
    };
    axios
      .put(`http://localhost:5000/tournament/${id}`, datab)
      .then(() => {
        console.warn("Yes", datab);
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
        console.log(data);
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
    <div className="flex justify-center">
      <div className="bg-slate-100 my-10 lg:px-6 py-10 mx-2 w-full lg:w-4/5 rounded-xl shadow-xl">
        <h1 className="border-2 text-2xl font-bold flex justify-center">
          Liste des rencontres
        </h1>
        {data &&
          data.map((tournament) => {
            return (
              <div className="flex justify-center">
                <div className="flex flex-col lg:flex-row justify-around items-center  w-full ">
                  <details className=" bg-gray-800 text-yellow-300 rounded-xl text-lg w-full">
                    <summary className="flex flex-col text-center border-2 border-yellow-400 lg:flex-row justify-evenly ">
                      <p className=" lg:w-1/6">{tournament.date}</p>
                      <p className=" lg:w-1/6">à {tournament.time} </p>
                      <p className=" lg:w-2/6">au {tournament.five_center} </p>
                      <p className=" lg:w-2/6">de {tournament.city} </p>
                      <p className=" lg:w-2/5"> Niveau: {tournament.level}</p>
                    </summary>
                    <div className="bg-gray-800 text-yellow-300 border-l-2 border-r-2 border-b-2 border-yellow-300 flex justify-around">
                      <div>
                        <h1 className="font-bold">Equipe 1</h1>
                        <h2>Eric</h2>
                        <h2>Kyle</h2>
                        <h2>Stan</h2>
                        <h2>Kenny</h2>
                        <h2>Chef</h2>
                      </div>
                      <div>
                        <h1 className="font-bold">Equipe 2</h1>
                        <h2>Bart</h2>
                        <h2>Homer</h2>
                        <h2>Libre</h2>
                        <h2>Libre</h2>
                        <h2>Libre</h2>
                      </div>
                      {/* <div>
                        <h2>{tournament.player6}</h2>
                        <h2>{tournament.player7}</h2>
                        <h2>{tournament.player8}</h2>
                        <h2>{tournament.player9}</h2>
                        <h2>{tournament.player10}</h2>
                      </div> */}
                    </div>
                  </details>
                  <div />
                  <div className="w-full lg:w-1/4 my-1 flex justify-end">
                    <button
                      className="bg-gray-800 text-yellow-300 active:bg-yellow-300 font-bold uppercase text-xs lg:text-sm px-2 lg:px-6 py-1 lg:py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ml-4 ease-linear transition-all duration-150 "
                      type="button"
                      onClick={() => setModal(true)}
                    >
                      Modifier
                    </button>
                    <button
                      className="bg-gray-800 text-yellow-300 active:bg-yellow-300 font-bold uppercase text-xs lg:text-sm px-2 lg:px-6 py-1 lg:py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ml-4 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => deleteTournament(tournament.id)}
                    >
                      supprimer
                    </button>
                  </div>
                </div>
                {showModal ? (
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      <div className="flex justify-center">
                        <form className="border-4 border-yellow-300 bg-gray-800 text-yellow-300 font-bold shadow-md flex flex-col my-10 rounded-xl justify-center">
                          <div className="flex flex-col justify-center ">
                            <h1 className="border-b-2 py-4 mb-10 flex justify-center">
                              Match du {tournament.date},
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
                                value={date && date}
                                name="date"
                                onChange={(event) =>
                                  setDate(event.target.value)
                                }
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
                                value={time && time}
                                name="time"
                                onChange={(e) => setTime(e.target.value)}
                              />
                            </label>
                            <label
                              className="my-2 flex justify-between px-4"
                              htmlFor="time"
                            >
                              Centre :
                              <input
                                className="text-black shadow-sm ml-4 border-2 rounded-md"
                                type="text"
                                id="time"
                                value={time && time}
                                name="time"
                                onChange={(e) => setTime(e.target.value)}
                              />
                            </label>
                            <label
                              className="my-2 flex justify-between px-4"
                              htmlFor="time"
                            >
                              Ville :
                              <input
                                className="text-black shadow-sm ml-4 border-2 rounded-md"
                                type="text"
                                id="time"
                                value={time && time}
                                name="time"
                                onChange={(e) => setTime(e.target.value)}
                              />
                            </label>
                            <label
                              className="my-2 flex justify-between px-4"
                              htmlFor="time"
                            >
                              Niveau :
                              <input
                                className="text-black shadow-sm ml-4 border-2 rounded-md"
                                type="text"
                                id="time"
                                value={time && time}
                                name="time"
                                onChange={(e) => setTime(e.target.value)}
                              />
                            </label>

                            <div className="flex flex-col justify-center">
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
                    {/* <div className="opacity-20 fixed inset-0 z-40 bg-gray-800">
                    </div> */}
                  </div>
                ) : null}
              </div>
            );
          })}
      <FormTournament />
      </div>
    </div>
  );
}

export default TournamentListAdmin;
