function TournamentDetails() {
  return (
    <div>
      <div className="border-2 border-blue-400 flex flex-col w-2/3 justify-center justify-around">
        <h1>Teams</h1>
        <div className="border-2 border-green-500 flex justify-around">
          <div className="border-2 border-red-400 flex flex-col w-1/5 justify-center justify-around">
            <h2>Team A</h2>
            <p>joueurs1</p>
            <p>joueurs2</p>
            <p>joueurs3</p>
            <p>joueurs4</p>
            <p>joueurs5</p>
          </div>
          <div className="border-2 border-red-400 w-1/5 justify-center justify-around">
            <h2>Team B</h2>
            <p>joueurs1</p>
            <p>joueurs2</p>
            <p>joueurs3</p>
            <p>joueurs4</p>
            <p>joueurs5</p>
          </div>
          <div className="border-2 border-red-400 flex flex-col w-1/5 justify-center justify-around">
            <h2>Team C</h2>
            <p>joueurs1</p>
            <p>joueurs2</p>
            <p>joueurs3</p>
            <p>joueurs4</p>
            <p>joueurs5</p>
          </div>
          <div className="border-2 border-red-400 flex flex-col w-1/5 justify-center justify-around">
            <h2>Team D</h2>
            <p>joueurs1</p>
            <p>joueurs2</p>
            <p>joueurs3</p>
            <p>joueurs4</p>
            <p>joueurs5</p>
          </div>
        </div>
      </div>
      <div>
        <h1>Resultats</h1>
        <p>Winners :</p>
        <p>Deuxième :</p>
        <p>Troisième :</p>
        <p>Quatrième :</p>
      </div>
    </div>
  );
}

export default TournamentDetails;
