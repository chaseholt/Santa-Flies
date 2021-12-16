const {
  db,
  models: { User, Room },
} = require("../db");

async function seed() {
  await db.sync({ force: true });
}
