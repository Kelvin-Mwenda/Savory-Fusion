const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const recipeRoutes = require("./routes/recipeRoutes");


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Register API routes
app.use("/api/recipes", recipeRoutes);

const PORT = process.env.PORT || 5000;

// Sample route to test
app.get("/", (req, res) => {
  res.send("API is running...");
});

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅MongoDB Connected"))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`✅Server running on port ${PORT}`));
