import React, { useEffect } from "react";
import axios from "axios";

function Score(props) {
  const highScore = window.localStorage.getItem("highScore");

  return (
    <div id='score'>
      {highScore && <div>High Score: {highScore}</div>}
      <div>{props.score}</div>
    </div>
  );
}

export default Score;
