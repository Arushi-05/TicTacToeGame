import React from "react";
import Tile from "./Tile.jsx";
import Strike from "./Strike.jsx";
function Board({ tiles, onClick, playerTurn, strikeClass }) {
  return (
    <div className="board">
      <Tile
        playerTurn={playerTurn}
        className="right-border bottom-border"
        value={tiles[0]}
        onClick={() => onClick(0)}
      />
      <Tile
        playerTurn={playerTurn}
        className="right-border bottom-border"
        value={tiles[1]}
        onClick={() => onClick(1)}
      />
      <Tile
        playerTurn={playerTurn}
        className="bottom-border"
        value={tiles[2]}
        onClick={() => onClick(2)}
      />
      <Tile
        playerTurn={playerTurn}
        className="right-border bottom-border"
        value={tiles[3]}
        onClick={() => onClick(3)}
      />
      <Tile
        playerTurn={playerTurn}
        className="right-border bottom-border"
        value={tiles[4]}
        onClick={() => onClick(4)}
      />
      <Tile
        playerTurn={playerTurn}
        className="bottom-border"
        value={tiles[5]}
        onClick={() => onClick(5)}
      />
      <Tile
        playerTurn={playerTurn}
        className="right-border"
        value={tiles[6]}
        onClick={() => onClick(6)}
      />
      <Tile
        playerTurn={playerTurn}
        className="right-border"
        value={tiles[7]}
        onClick={() => onClick(7)}
      />
      <Tile
        playerTurn={playerTurn}
        value={tiles[8]}
        onClick={() => onClick(8)}
      />
      <Strike strikeClass={strikeClass} />
    </div>
  );
}

export default Board;
