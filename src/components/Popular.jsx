import { useEffect, useState } from 'react';

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
      },
    };
    const api = await fetch(
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=9',
      options
    );
    const data = await api.json();
    setPopular(data.recipes);
  };

  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Popular;
