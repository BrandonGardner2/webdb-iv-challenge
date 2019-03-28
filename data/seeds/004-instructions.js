exports.seed = function(knex, Promise) {
  return knex("instructions").insert([
    {
      recipe_id: 1,
      content:
        "Use white bread like a real man. Spread the pb&j on the bread.Smash.Eat!"
    },
    {
      recipe_id: 2,
      content: "Use wheat bread because diet. Spread pb&j.Smash.Eat!"
    },
    {
      recipe_id: 3,
      content: "Use white bread with ham and cheese.Toast.Eat hot goodness."
    },
    {
      recipe_id: 4,
      content: "Use wheat bread.Apply ham and cheese.Eat cold blandness."
    },
    { recipe_id: 5, content: "Ditch ingredients.Make easy mac." }
  ]);
};
