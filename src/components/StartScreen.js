import React from "react";

import "../css/startScreen.css";
import socket from "socket.io-client";
const clientSocket = socket(window.location.origin);
clientSocket.on("connect", () => {
  console.log("connected to server");
});

function StartScreen(props) {
  return (
    <div id='startScreen'>
      <div>Press space bar to start the game...</div>
    </div>
  );
}

export default StartScreen;
