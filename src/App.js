import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Nav/Navbar";
import Player from "./components/Player/Player";
import NewPlayer from "./components/NewPlayer/NewPlayer";

const pages = ["home", "about"];

function App() {
  const [players, setPlayers] = useState([]);

  const addPlayer = name => {
    const newPlayers = [...players, { name: name }];
    setPlayers(newPlayers);
  };

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
