import React from "react";
import GameState from "./GameState";

function Reset({ gameState , onClick}) {
  if (gameState === GameState.inProgress) {
    return;
  }
  
  return (
    <button  onClick={onClick} className="reset-button">
      Reset Game
    </button>
  );
}

export default Reset;
