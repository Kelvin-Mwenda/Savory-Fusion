import { useEffect, useState } from "react";
import axios from "axios";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/recipes").then(res => setRecipes(res.data));
  }, []);

  return (
    <div>
      <h1>Recipe List</h1>
      {recipes.map(recipe => (
        <div key={recipe._id}>
          <h2>{recipe.title}</h2>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
