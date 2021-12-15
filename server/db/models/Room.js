const Sequelize = require("sequelize");
const db = require("../db");

const Room = db.define("room", {
  roomName: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  highScore: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Room;
