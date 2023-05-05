import React, { Component, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "@smastrom/react-rating/style.css";
import LazyLoad from "react-lazy-load";
import { Rating } from "@smastrom/react-rating";
import { addToDb, getRecipeInformation } from "../../utilities/fakedb";

const RecipeDetails = ({ recipe }) => {
  const { id, name, ingredients, method, rating, photo } = recipe;
  const [isDisabled, setIsDisabled] = useState(false);

  const addToFavourite = () => {
    setIsDisabled(true);
    const recipeInfo = getRecipeInformation();
    const isAlreadyExists = recipeInfo[id];
    if (isAlreadyExists) {
      toast.error("You have already added this recipe !");
    } else {
      addToDb(id);
      toast.success("Added as your favourite recipe");
    }
    
  };
  // Recipe details page
  return (
    <div className="card bg-base-100 shadow-xl py-10">
      <figure>
        <LazyLoad>
          <img src={photo} alt="recipe" className="w-full h-96" />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-primary">
          <span className="text-primary">Recipe Name:</span> {name}
        </h2>
        <h2 className="text-2xl text-primary">Ingredients:</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index} className="">
              {ingredient}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl text-primary">Method:</h2>
        <ol>
          {method.map((step, index) => (
            <li key={index} className="">
              <strong>Step-{index + 1}:</strong> {step}
            </li>
          ))}
        </ol>
        <div className="flex">
          <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
          <span className="ms-5 mt-2">{rating}</span>
        </div>
        <div className="card-actions justify-end">
          <button
            onClick={()=>addToFavourite(id)}
            className="btn active"
            disabled={isDisabled}
          >
            Add to favourite
          </button>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default RecipeDetails;
