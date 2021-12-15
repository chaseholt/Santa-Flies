const router = require("express").Router();
const {
  models: { User, Room },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ["id", "username"],
    });
    res.send(users);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { username, room } = req.body;
    const user = await User.create({ username, room });
    const roomFound = await Room.findOne({
      where: {
        roomName: room,
      },
    });
    if (!roomFound) {
      await Room.create({
        roomName: room,
        highScore: 0,
      });
    }
    res.status(201).send(user);
  } catch (err) {
    next(err);
  }
});

//delete user by username
router.delete("/name", async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        username: req.body.username,
      },
    });
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
