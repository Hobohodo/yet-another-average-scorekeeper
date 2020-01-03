import React, { useState } from "react";

/**
 * This component is a modal form that contains a player's name.
 * It doesn't actually use a form since we never submit properly.
 * TODO: Focus form on opening
 */
const NewPlayer = ({ add }) => {
  const [isActive, setActive] = useState(false);
  const [name, setName] = useState(null);

  const addPlayer = event => {
    event.preventDefault();
    add(name);
    setName("");
    setActive(false);
  };
  
  return (
    <>
      <button className="button is-primary" onClick={() => setActive(true)}>
        Add player
      </button>
      <div className={`modal  ${isActive ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <form className="modal-card" onSubmit={addPlayer}>
          <div className="modal-card-body">
            <div className="field">
              <label className="label">Name</label>
              <input
                className="input"
                type="text"
                name="player-name"
                placeholder="Lucy"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>
          </div>

          <footer className="modal-card-foot">
            <button className="button is-success" onClick={addPlayer}>
              Add player
            </button>
            <button className="button" onClick={() => setActive(false)}>
              Cancel
            </button>
          </footer>
        </form>
        <button
          className="modal-close is-large"
          aria-label="close"
          onClick={() => setActive(false)}
        ></button>
      </div>
    </>
  );
};

export default NewPlayer;
