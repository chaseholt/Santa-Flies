import React, { useState, useEffect } from "react";
import axios from "axios";

function StartScreen(props) {

  

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("username")) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e) => {
    try {
      //console.log("event: ", e.target.room.value);
      const username = e.target.username.value;
      const room = e.target.room.value;
      e.preventDefault();
      const response = await axios.post("/api/users", {
        username,
        room,
      });
      // window.localStorage.setItem("highScore", highScore.data.highScore);
      window.localStorage.setItem("username", response.data.username);
      window.localStorage.setItem("room", response.data.room);
      //console.log("handleSubmit response : ", response);
      setIsLoggedIn(true);
    } catch (err) {
      alert("Username already taken");
      console.log("handleSubmit error : ", err);
    }
  };

  return isLoggedIn ? (
    <div id='startScreen'>
      <div>Press space bar to start the game...</div>
    </div>
  ) : (
    <form onSubmit={(e) => handleLogin(e)} name={"login"}>
      <div>
        <label>Username:</label>
        <input type='text' name='username' />
      </div>
      <div>
        <label>Room name:</label>
        <input type='text' name='room' />
      </div>
      <div>
        <input type='submit' value='Submit' />
      </div>
    </form>
  );
}

export default StartScreen;
