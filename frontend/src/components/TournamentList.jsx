import axios from "axios";
import { useEffect, useState } from "react";

function TournamentList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/tournament`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

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
                    </div>
                  </details>
                  <div />
                  <div className="w-full lg:w-1/4 my-1 flex justify-center">
                    <button
                      className="bg-gray-800 text-yellow-300 active:bg-yellow-300 font-bold uppercase text-xs lg:text-sm px-2 lg:px-4 py-1 lg:py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 ml-4 ease-linear transition-all duration-150 "
                      type="button"
                    >
                      M'inscrire
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TournamentList;
