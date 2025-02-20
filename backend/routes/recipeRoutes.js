const express = require("express");
const { getRecipes, addRecipe, deleteRecipe } = require("../controllers/recipeController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", getRecipes);
router.post("/", authMiddleware, addRecipe);
router.delete("/:id", authMiddleware, deleteRecipe);

module.exports = router; // ✅ Use CommonJS `module.exports`

