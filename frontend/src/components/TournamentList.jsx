import axios from "axios";
import { useEffect, useState } from "react";

function TournamentList() {
  const [data, setData] = useState("");

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
    <div className="bg-green-400">
      <h1 className="border-2 flex justify-center">Liste des matchs</h1>
      {data &&
        data.map((tournament) => {
          return (
            <div className="flex justify-center border-2 border-blue-400">
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
                    <h2>joueurs1</h2>
                    <h2>joueurs2</h2>
                    <h2>joueurs3</h2>
                    <h2>joueurs4</h2>
                    <h2>joueurs5</h2>
                  </div>
                  <div>
                    <h1>Equipe 1</h1>
                    <h2>joueurs1</h2>
                    <h2>joueurs2</h2>
                    <h2>joueurs3</h2>
                    <h2>joueurs4</h2>
                    <h2>joueurs5</h2>
                  </div>
                </div>
              </details>
            </div>
          );
        })}
    </div>
  );
}

export default TournamentList;
