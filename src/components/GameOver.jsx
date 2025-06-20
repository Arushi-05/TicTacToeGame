import React from "react";
import GameState from "./GameState";
function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.reset:
      return <></>;
    case GameState.Owins:
      return <div className="game-over">O Wins!</div>;
    case GameState.Xwins:
      return <div className="game-over">X Wins!</div>;
    case GameState.draw:
      return <div className="game-over">It's a Draw!</div>;
    default:
      return <></>;
  }
}

export default GameOver;
