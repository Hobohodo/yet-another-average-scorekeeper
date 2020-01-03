import React from "react";

const Scorebox = ({ score }) => (
  <div className="card-content has-text-centered">
    <p className="title">{score || "0"}</p>
  </div>
);

const Player = ({ player }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="card-header-title">{player.name}</p>
      </div>
      <Scorebox score={player.score} />
    </div>
  );
};

export default Player;
