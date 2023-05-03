import React from "react";
import { ToastContainer, toast } from "react-toastify";

const RecipeDetails = ({ recipe }) => {
  const { id, name, ingredients, method, rating,photo } = recipe;

  const addToFavourite =() =>{
    toast.success("Added as your favourite recipe");
  }
  return (
    <div className="card  bg-base-100 shadow-xl py-10">
      <figure>
        <img
          src={photo}
          alt="recipe" className="w-full h-96"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-purple-800"><span className="text-purple-400">Recipe Name:</span> {name}</h2>
        <h2 className="text-2xl text-purple-500">Ingredients:</h2>
        {
            ingredients.map(ingredient=> <li className="">{ingredient}</li>)
        }
       <h2 className="text-2xl text-purple-500">Method:</h2>
       {
        method.map(step=> <li className="">{step}</li>)
       }
       
       <p>{rating}</p>
        <div className="card-actions justify-end">
          <button onClick={addToFavourite} className="btn btn-primary">Add to favourite</button>
        </div>
        <ToastContainer position="top-center"/>
      </div>
    </div>
  );
};

export default RecipeDetails;
