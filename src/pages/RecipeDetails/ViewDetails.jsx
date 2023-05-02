import React from 'react';
// import ChefBanner from './ChefBanner';
import RecipeDetails from './RecipeDetails';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const recipes = useLoaderData();
    console.log(recipes);
    return (
        <div className='w-11/12 mx-auto'>
            {/* <ChefBanner /> */}
            <div className='grid grid-cols-2 gap-5'>
            {
                recipes.map(recipe => <RecipeDetails 
                key={recipe.id}
                recipe={recipe}
                />)
            }
            </div>
        </div>
    );
};

export default ViewDetails;