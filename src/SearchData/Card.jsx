import React, { useState } from 'react';
import data from './data.json';
import './Card.css';

const meals = data.meals;

const MealCard = ({ meal }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [liked, setLiked] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const addToCart = () => {
    setAddedToCart(true);
  };

  return (
    <div className={`meal-card ${showDetails ? 'expanded' : ''}`}>
      <div className="meal-details">
        <img className="meal-image" src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="meal-info">
          <h2>{meal.strMeal}</h2>
          <p><strong>Category:</strong> {meal.strCategory}</p>
          <p><strong>Area:</strong> {meal.strArea}</p>
          <div className="buttons-container">
            <button className="detail-button" onClick={toggleDetails}>
              {showDetails ? 'Hide Details' : 'Show Details'}
            </button>
            <button className={liked ? 'liked-button' : 'like-button'} onClick={toggleLike}>
              {liked ? 'Liked ❤️' : 'Like 👍'}
            </button>
            {addedToCart && (
              <span className="added-to-cart-message">Added to Cart!</span>
            )}
          </div>
        </div>
      </div>
      {showDetails && (
        <div className="expanded-details">
          <p>{meal.strInstructions}</p>
          <ul className="ingredient-list">
            {Array.from({ length: 8 }, (_, i) => meal[`strIngredient${i + 1}`])
              .filter(Boolean)
              .map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
          </ul>
          {meal.strYoutube && (
            <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
              Watch on YouTube
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMeals = meals.filter(meal =>
    meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <div className="search-container">
        <input
          className='search'
          type="text"
          placeholder="Search food..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="meal-cards">
        {filteredMeals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default App;
