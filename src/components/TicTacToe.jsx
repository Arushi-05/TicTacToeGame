import Board from "./Board";
import GameOver from "./GameOver";
import { useEffect, useState } from "react";
import GameState from "./GameState";
import Reset from "./Reset";
const PLAYER_X = "X";
const PLAYER_O = "O";
const winningCombinations = [
  { combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];

function checkWinner(tiles, setStrikeClass, setGameState) {
  for (const { combo, strikeClass } of winningCombinations) {
    const tile1 = tiles[combo[0]];
    const tile2 = tiles[combo[1]];
    const tile3 = tiles[combo[2]];

    if (tile1 !== null && tile1 === tile2 && tile1 === tile3) {
      setStrikeClass(strikeClass);
      
      if (tile1 === PLAYER_X) {
        setGameState(GameState.Xwins);
      } else {
        setGameState(GameState.Owins);
      }
      return;
    }

    const alltilesfilled=tiles.every((tile)=>tile!==null);
    if (alltilesfilled){
      setGameState(GameState.draw)

    }
    
  }
  
}
function TicTacToe() {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  useEffect(() => {
    checkWinner(tiles, setStrikeClass, setGameState);
  }, [tiles]);

  const handlePlayerturn = (index) => {
    if (gameState!==GameState.inProgress){
      return;
    }
    if (tiles[index]) {
      return;
    }
    
    const newTiles = [...tiles];
    newTiles[index] = playerTurn;
    setTiles(newTiles);
    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  const handleReset=()=>{
    setTiles(Array(9).fill(null))
    setStrikeClass();
    setGameState(GameState.inProgress)

  }
  return (
    <div>
      <h1>TicTacToe</h1>
      <Board
        strikeClass={strikeClass}
        playerTurn={playerTurn}
        tiles={tiles}
        onClick={handlePlayerturn}
      />
      <GameOver gameState={gameState} />
      <Reset gameState={gameState} onClick={handleReset}/>
    </div>
  );
}

export default TicTacToe;
