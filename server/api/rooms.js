const router = require("express").Router();
const {
  models: { User, Room },
} = require("../db");
module.exports = router;

//get room with name
router.get("/", async (req, res, next) => {
  try {
    const room = await Room.findOne({
      where: {
        roomName: req.body.roomName,
      },
    });
    res.json(room);
  } catch (err) {
    next(err);
  }
});

//get high schore of room
router.get("/highscore/:name", async (req, res, next) => {
  try {
    const room = await Room.findAll({
      where: {
        roomName: req.params.name,
      },
    });
    res.send(room);
  } catch (err) {
    next(err);
  }
});

//set high score of room
router.post("/highscore", async (req, res, next) => {
  try {
    const room = await Room.findOne({
      where: {
        roomName: req.body.roomName,
      },
    });
    room.update({
      highScore: req.body.highScore,
    });
    res.send(room);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
