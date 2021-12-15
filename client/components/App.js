import React from "react";

import SantaContainer from "../containers/SantaContainer";
import PillarContainer from "../containers/PillarContainer";
import Score from "./Score";
import GameOver from "./GameOver";
import StartScreen from "./StartScreen";

function App(props) {
  if (props.isGameStarted) {
    return (
      <div
        style={{
          background: `url(/trees.jpeg)`,
        }}
      >
        <SantaContainer
          isGameOver={props.isGameOver}
          handleGameOver={props.handleGameOver}
          handleScore={props.handleScore}
        />
        <PillarContainer isGameOver={props.isGameOver} />
        <Score score={props.score} />
        {props.isGameOver && <GameOver />}
      </div>
    );
  } else {
    return <StartScreen />;
  }
}

export default App;
