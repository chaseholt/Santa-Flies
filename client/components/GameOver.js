import React from "react";

function GameOver(props) {
  return (
    <div id='gameOver'>
      <div>Game Over!</div>
      <button onClick={() => document.location.reload()}>Restart</button>
    </div>
  );
}

export default GameOver;
