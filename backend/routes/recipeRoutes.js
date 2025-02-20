import express from "express";
import { getRecipes, addRecipe, deleteRecipe } from "../controllers/recipeController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRecipes);
router.post("/", authMiddleware, addRecipe);
router.delete("/:id", authMiddleware, deleteRecipe);

export default router;
