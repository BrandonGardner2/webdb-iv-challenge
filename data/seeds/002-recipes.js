exports.seed = function(knex, Promise) {
  return knex("recipes").insert([
    { dish_id: 1, name: "Brandons PB & J" },
    { dish_id: 1, name: "Cydneys PB & J" },
    { dish_id: 2, name: "Super Ham Sammy" },
    { dish_id: 3, name: "Tour de Hamme" },
    { dish_id: 4, name: "Super Cheez Mac" }
  ]);
};
