import Recipe from "../models/Recipe.js";

// Get all recipes
export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add a recipe
export const addRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, image } = req.body;
    const recipe = await Recipe.create({ title, ingredients, instructions, image, createdBy: req.user.id });
    res.status(201).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a recipe
export const deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
