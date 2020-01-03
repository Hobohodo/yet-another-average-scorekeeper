import React, {useState} from "react";
import "./App.scss";
import Navbar from "./components/Nav/Navbar";
import Player from "./components/Player/Player";

const pages = ["home", "about"];

function App() {
  const [players, setPlayers] = useState([{name: "hi"}, {name: "Lucy"}]);


  const addPlayer = (name) => {
    const newPlayers = [...players, {name: name}];
    setPlayers(newPlayers);
  }

  return (
    <div className="main">
      <Navbar pages={pages} />
      <main>
        <section className="section">
          <header>Welcome to YAAS!</header>
          <div className="container">
            <div className="columns">
              {players.map((player, i) => (
                <div className="column"><Player key={i} player={player} /></div>
              ))}
            </div>
          </div>
        </section>
        <section className="section">
          <button className="button is-primary" 
            onClick={() => addPlayer("Newbie")}>Add player</button>
        </section>
      </main>
    </div>
  );
}

export default App;
