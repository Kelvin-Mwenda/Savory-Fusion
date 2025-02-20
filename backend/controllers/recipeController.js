const RecipeSchema = require("../models/Recipe");

// Get all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await RecipeSchema.find();
    res.json(recipes);
    console.log(req.body);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a recipe
const addRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, image } = req.body;
    const recipe = await RecipeSchema.create({
      title,
      ingredients,
      instructions,
      image,
      createdBy: req.user.id,
    });
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
  try {
    await RecipeSchema.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Export functions using `module.exports`
module.exports = {
  getRecipes,
  addRecipe,
  deleteRecipe,
};
