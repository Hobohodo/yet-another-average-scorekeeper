import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Nav/Navbar";
import Player from "./components/Player/Player";
import NewPlayer from "./components/NewPlayer/NewPlayer";

const pages = ["home", "about"];

function App() {
  const [players, setPlayers] = useState([]);
  const [stages, setStages] = useState({1: "Stage 1"});

  const addPlayer = name => {
    const newPlayers = [...players, { name: name, score: 0 }];
    setPlayers(newPlayers);
  };

  /**
   * Add a new stage to the stages of the game. This could be a round or a type of scoring
   * @param {String} stage name of the new stage 
   */
  const addStage = stage => {
    let newStages = stages;
    newStages.set(newStages.length + 1, stage);
    setStages(newStages);
    updatePlayersWithNewStage(stage);
  }

  /**
   * Add a new Stage to the scores of each player, with a default value of 0
   * @param {String} newStage 
   */
  const updatePlayersWithNewStage = newStage => {
    players.map(player => {
      player.score.set(newStage, 0); //TODO: Work out how to add a stage to the scores using a key instead of the stage name
    });
  }

  return (
    <div className="main">
      <Navbar pages={pages} />
      <main>
        <section className="section">
          <header>Welcome to YAAS!</header>
          <div className="container">
            <Players players={players} />
          </div>
        </section>
        <section className="section">
          <NewPlayer add={addPlayer} />
        </section>
      </main>
    </div>
  );
}

const Players = ({ players }) => {
  if(!players.length) {
    return (<div>You have no players!</div>);
  }
  return (
      <div className="columns">
        {players.map((player, i) => (
          <div className="column" key={i}>
            <Player player={player} />
          </div>
        ))}
      </div>
  );
};

export default App;
