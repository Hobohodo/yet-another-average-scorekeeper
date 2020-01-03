import React, {useState} from "react";


const Scorebox = ({ score, setScore }) => {

  const changeScore = newScore => {
    setScore(newScore);
  }

  return (
    <div className="card-content has-text-centered" style={{display: "flex", justifyContent: "space-around"}} >
      <button className="button is-error" onClick={() => changeScore(score - 1)}>-1</button>
      <span className="title">{score || "0"}</span>
      <button className="button is-success" onClick={() => changeScore(score + 1)}>+1</button>
    </div>
  );
};

const Player = ({ player }) => {
  const [score, setScore] = useState(player.score);

  return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-title">{player.name}</p>
      </div>
      <Scorebox score={score} setScore={setScore} />
    </div>
  );
};

export default Player;
