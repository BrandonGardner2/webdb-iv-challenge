exports.seed = function(knex, Promise) {
  return knex("dishes").insert([
    { name: "PB & J" },
    { name: "Ham Sandwich" },
    { name: "Mac & Cheese" }
  ]);
};
