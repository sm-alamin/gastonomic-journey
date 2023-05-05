import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getRecipeInformation, removeFromDb } from "../../utilities/fakedb";
import { Rating } from "@smastrom/react-rating";

const MyFavourite = () => {
  const [recipes, setRecipes] = useState([]);
  const [removedRecipeId, setRemovedRecipeId] = useState(null);

  useEffect(() => {
    const recipeIds = Object.keys(getRecipeInformation());
    if (recipeIds.length > 0) {
      const url = `https://chef-recipe-hunter-server-blush.vercel.app/recipe-info?id=${recipeIds.join(
        ","
      )}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Filter out only the favourite recipes
          const favouriteRecipes = data.filter((recipe) =>
            recipeIds.includes(recipe.id.toString())
          );
          setRecipes(favouriteRecipes);
        });
    }
  }, [removedRecipeId]);

  const removeRecipe = (id) => {
    removeFromDb(id);
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.id !== id)
    );
    setRemovedRecipeId(id);
  };

  return (
    <div className="w-11/12 mx-auto">
      {recipes.map((recipe) => (
        <div className="card bg-base-100 shadow-xl py-10 mb-5" key={recipe.id}>
          <figure>
            <LazyLoad>
              <img src={recipe.photo} alt="recipe" className="w-full h-96" />
            </LazyLoad>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl text-primary">
              <span className="text-primary">Recipe Name:</span> {recipe.name}
            </h2>
            <h2 className="text-2xl text-primary">Ingredients:</h2>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="">
                  {ingredient}
                </li>
              ))}
            </ul>
            <h2 className="text-2xl text-primary">Method:</h2>
            <ol>
              {recipe.method.map((step, index) => (
                <li key={index} className="">
                  <strong>Step-{index + 1}:</strong> {step}
                </li>
              ))}
            </ol>
            <div className="flex">
              <Rating
                style={{ maxWidth: 180 }}
                value={recipe.rating}
                readOnly
              />
              <span className="ms-5 mt-2">{recipe.rating}</span>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => removeRecipe(recipe.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <ToastContainer position="top-center" />
    </div>
  );
};

export default MyFavourite;
