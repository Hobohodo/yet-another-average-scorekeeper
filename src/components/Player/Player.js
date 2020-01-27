import React, {useState} from "react";


const Scorebox = ({ score, setScore }) => {

  return (
    <div className="card-content has-text-centered" style={{display: "flex", justifyContent: "space-around"}} >
      <button className="button is-error" onClick={() => setScore(score - 1)}>-1</button>
      <span className="title">{score || "0"}</span>
      <button className="button is-success" onClick={() => setScore(score + 1)}>+1</button>
    </div>
  );
};

const Player = ({ player, updatePlayer }) => {
  // const [score, setScore] = useState(player.score);
  const updateScore = (newScore) => {
    let newPlayer = player;
    newPlayer.score = newScore;
    updatePlayer();
  }

  return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-title">{player.name}</p>
      </div>
      {/* TODO: Change this to work with multiple scores in an array/map/object */}
      <Scorebox score={player.score} setScore={updateScore} />
    </div>
  );
};

export default Player;
