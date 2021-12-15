const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "src")));

const server = app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

const socket = require("socket.io");
const io = socket(server);

io.on("connection", (socket) => {
  console.log("made socket connection", socket.id);
});
