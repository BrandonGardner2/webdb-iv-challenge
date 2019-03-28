exports.seed = function(knex, Promise) {
  return knex("ingredients").insert([
    { name: "white bread slice" },
    { name: "wheat bread slice" },
    { name: "peanut butter" },
    { name: "jelly" },
    { name: "ham" },
    { name: "noodles" },
    { name: "sliced cheese" },
    { name: "melty cheese" }
  ]);
};
