import React, { useEffect } from "react";
import axios from "axios";

function Score(props) {
  //const highScore = window.localStorage.getItem("highScore");
  let highScore = 0;
  useEffect(async () => {
    highScore = await axios.get(`/api/rooms/highscore/${room}`);
    console.log("highScore: ", highScore);
  }, []);

  return (
    <div id='score'>
      {highScore && <div>High Score: {highScore}</div>}
      <div>{props.score}</div>
    </div>
  );
}

export default Score;
