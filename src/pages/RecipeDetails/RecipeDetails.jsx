import React from "react";

const RecipeDetails = ({ recipe }) => {
  const { id, name, ingredients, method, rating } = recipe;
  return (
    <div className="card  bg-base-100 shadow-xl py-10">
      <figure>
        <img
          src="https://img.freepik.com/free-photo/closeup-shot-deliciously-prepared-chicken-served-with-onions-chili-sauce_181624-61705.jpg?w=740&t=st=1683029114~exp=1683029714~hmac=67840b808ada7a0dc301b6996112f62ec556db15fbc1f1b2596a4986d212ad6f"
          alt="Movie" className="w-full"
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
          <button className="btn btn-primary">Add to favourite</button>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
