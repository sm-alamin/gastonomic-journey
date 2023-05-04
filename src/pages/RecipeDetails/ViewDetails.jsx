import React from "react";
import ChefBanner from "./ChefBanner";
import RecipeDetails from "./RecipeDetails";
import { useLoaderData } from "react-router-dom";

// View details page
const ViewDetails = () => {
  const recipes = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      {/* Banner */}
      <ChefBanner />

      {/* Recipe list */}
      <h3 className="text-2xl text-primary font-bold text-center">
        My Latest Recipes- <span className="text-primary">You can try</span>
      </h3>
      <div className="grid grid-cols-2 gap-5">
        {recipes.map((recipe) => (
          <RecipeDetails key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default ViewDetails;
