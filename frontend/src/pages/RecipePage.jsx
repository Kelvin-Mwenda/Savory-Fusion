import PropTypes from 'prop-types'; // Import PropTypes

const RecipePage = ({ sampleRecipe }) => {
  return (
    <div className="recipe-page">
      <h1>{sampleRecipe.title}</h1>
      <img src={sampleRecipe.image} alt={sampleRecipe.title} className="recipe-image" />
      <div className="recipe-details">
        <h2>Ingredients</h2>
        <ul>
          {sampleRecipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2>Instructions</h2>
        <ol>
          {sampleRecipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

RecipePage.propTypes = {
  sampleRecipe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default RecipePage;