import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const RecipeDetails = ({ recipe }) => {
  const { id, name, ingredients, method, rating,photo } = recipe;

  const addToFavourite =() =>{
    toast.success("Added as your favourite recipe");
  }
  return (
    <div className="card bg-base-100 shadow-xl py-10">
      <figure>
        <img src={photo} alt="recipe" className="w-full h-96" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-purple-800">
          <span className="text-purple-400">Recipe Name:</span> {name}
        </h2>
        <h2 className="text-2xl text-purple-500">Ingredients:</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index} className="">
              {ingredient}
            </li>
          ))}
        </ul>
        <h2 className="text-2xl text-purple-500">Method:</h2>
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
          <button onClick={addToFavourite} className="btn btn-primary">
            Add to favourite
          </button>
        </div>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
};

export default RecipeDetails;
