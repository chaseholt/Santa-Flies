import React from "react";

function GameOver(props) {
  const highScore = window.localStorage.getItem("highScore");
  if (props.score > highScore) {
    window.localStorage.setItem("highScore", props.score);
  }
  return (
    <div id='gameOver'>
      <div>Game Over!</div>
      <button onClick={() => document.location.reload()}>Restart</button>
    </div>
  );
}

export default GameOver;
