const db = require("../config");

module.exports = {
  getDishes,
  addDish,
  getDish
};

function getDishes() {
  return db("dishes");
}

async function addDish(dish) {
  const [id] = await db("dishes").insert(dish);

  return db("dishes")
    .where({ id })
    .first();
}

function getDish(id) {
  return db("dishes")
    .where({ id })
    .first();
}
