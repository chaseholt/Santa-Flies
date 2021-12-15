import React from "react";
import { render } from "react-dom";
import AppContainer from "./containers/AppContainer";
import socket from "socket.io-client";
const clientSocket = socket(window.location.origin);
clientSocket.on("connect", () => {
  console.log("connected to server");
});
render(<AppContainer />, document.getElementById("app"));
