import React from 'react';
import { FaHeart, FaSkyatlas, FaStaylinked } from 'react-icons/fa';

const LatestRecipe = () => {
    return (
        <div className="bg-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center">
            <FaSkyatlas />
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
              Our Latest Recipe
            </h2>
            <FaSkyatlas />
          </div>

          <div className="mx-auto">
            <p className="mt-2 text-lg text-gray-600">
              You can try our latest recipe
            </p>
            <div className="flex justify-center items-center">
              <div>------------------------</div>
              <span className="mt-1 mx-3">
                <FaStaylinked />
              </span>
              <div>-------------------------</div>
            </div>

            <div className='flex gap-5 py-7'>
                <div>
                    <img src="https://img.freepik.com/premium-photo/dum-handi-chicken-biryani-is-prepared-earthen-clay-pot-called-haandi-popular-indian-non-vegetarian-food_466689-52414.jpg?w=740" alt="" className='w-60 h-36 rounded-full'/>
                    <a href='#' className='text-2xl'>Chicken Biryani</a>
                   <div className='flex justify-center items-center gap-2'>
                   <FaHeart className='text-red-400'/>
                    <a href="">300</a>
                   </div>
                </div>
                <div>
                    <img src="https://img.freepik.com/premium-photo/indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-background_2829-4752.jpg?w=740" alt="" className='w-60 h-36 rounded-full'/>
                    <a href='#' className='text-2xl'>Dhal Spicy Curry</a>
                   <div className='flex justify-center items-center gap-2'>
                   <FaHeart className='text-red-400'/>
                    <a href="">300</a>
                   </div>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/vegetarian-stew-eggplants-bell-peppers-onions-garlic-tomatoes-with-herbs_2829-11005.jpg?w=826&t=st=1683142086~exp=1683142686~hmac=88c35aa9e3a1fe3075b876294a29bf206974619e03aadd58581233ac8d2498ac" alt="" className='w-60 h-36 rounded-full'/>
                    <a href='#' className='text-2xl'>Vegetarian Stew Eggplants</a>
                   <div className='flex justify-center items-center gap-2'>
                   <FaHeart className='text-red-400'/>
                    <a href="">300</a>
                   </div>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/top-view-tasty-meat-soup-with-potatoes-seasonings-dark-desk_140725-76945.jpg?w=740&t=st=1683142152~exp=1683142752~hmac=d74192bd47b21f062cec849414483467d191aabdfdbcbac2553f0035f332f1bd" alt="" className='w-60 h-36 rounded-full'/>
                    <a href='#' className='text-2xl'>Tasty Meat Soup with Potatoes</a>
                   <div className='flex justify-center items-center gap-2'>
                   <FaHeart className='text-red-400'/>
                    <a href="">300</a>
                   </div>
                </div>
                <div>
                    <img src="https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine-top-view_2829-6240.jpg?w=740&t=st=1683142307~exp=1683142907~hmac=de5df7d067a84eef98c9b837ba4d90c4d555f1e543e0721dd3028d01f08695b5" alt="" className='w-60 h-36 rounded-full'/>
                    <a href='#' className='text-2xl'>Curry with chicken</a>
                   <div className='flex justify-center items-center gap-2'>
                   <FaHeart className='text-red-400'/>
                    <a href="">300</a>
                   </div>
                </div>
                
            </div>
          </div>
        </div>
      </div>
    );
};

export default LatestRecipe;